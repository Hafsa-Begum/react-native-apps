import React, { createContext, FC, PropsWithChildren, useState } from 'react'
import AppWrite from './service'

type AppContextType = {
    appwrite: AppWrite,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn:boolean)=> void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new AppWrite(),
    isLoggedIn: false,
    setIsLoggedIn: ()=>{}
})

export const AppwriteProvider : FC<PropsWithChildren> = ({children})=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const defaultValue = {
        appwrite: new AppWrite(),
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    )
}

export default AppwriteContext