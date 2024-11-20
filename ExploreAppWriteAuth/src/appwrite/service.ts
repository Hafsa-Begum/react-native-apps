import {ID, Account, Client} from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

const appwriteClient = new Client()
const APPWRITE_END_POINT: string = 'https://cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID: string = '673c5693002b357902b9'

console.log('APPWRITE_END_POINT:', Config.APPWRITE_END_POINT);
console.log('APPWRITE_PROJECT_ID:', Config.APPWRITE_PROJECT_ID);

type CreateUserAccount = {
    email: string,
    password: string,
    name: string
}
type LoginUserAccount = {
    email: string,
    password: string
}

class AppWriteService{
    account;

    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_END_POINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)
        console.log('account',this.account);

    }

    //create a new record user inside appwrite
    async createAccount({email, password, name}: CreateUserAccount){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(userAccount){
                return this.login({email, password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: createAccount ::"+ error)
        }
    }

    async login({email, password} : LoginUserAccount){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: loginAccount ::"+ error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser ::"+ error)
        }
    }

    async logout(){
        try {
            return this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service :: logout ::"+ error)
        }
    }
}

export default AppWriteService;