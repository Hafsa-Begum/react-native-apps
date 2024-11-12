import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  StatusBar,
  FlatList 
} from 'react-native'
import React, {useState} from 'react'

export default function App() {
  const [randomColorGenerate, setRandomGenerate] = useState("#000000");
  const [squareBg, setSquareBg] = useState("#ffffff");
  const [circleBg, setCircleBg] = useState("#ffffff");
  const [triangleBg, setTriangleBg] = useState("#ffffff");
  const [leafBg, setLeafBg] = useState("#ffffff");
  const [rectangleBg, setRectangleBg] = useState("#ffffff");
  const [flowerBg, setFlowerBg] = useState("#ffffff");

  const generateColor = () =>{
    const hexColor = "0123456789ABCDEF";
    let color = "#";
    let squareColor ="#"
    let circleColor ="#"
    let triangleColor ="#"
    let leafColor ="#"
    let rectangleColor ="#"
    let flowerColor ="#"
    for (let i = 0; i < 5; i++) {
      color += hexColor[Math.floor(Math.random()*16)];
      squareColor += hexColor[Math.floor(Math.random()*16)]
      triangleColor += hexColor[Math.floor(Math.random()*16)]
      leafColor += hexColor[Math.floor(Math.random()*16)]
      rectangleColor += hexColor[Math.floor(Math.random()*16)]
      circleColor += hexColor[Math.floor(Math.random()*16)]
      flowerColor += hexColor[Math.floor(Math.random()*16)]
    }
    setRandomGenerate(color+'A');
    setCircleBg(circleColor+'B');
    setSquareBg(squareColor+'C');
    setTriangleBg(triangleColor+'D');
    setLeafBg(leafColor+'E');
    setRectangleBg(rectangleColor+'F');
    setFlowerBg(flowerColor+'E')
  }
  const shapes = [
    
    {
      id: 2,
      type: 'square',
      bgColor: squareBg,
    },
    {
      id: 1,
      type: 'circle',
      bgColor: circleBg,
    },
    {
      id: 3,
      type: 'triangle',
      bgColor: triangleBg,
    },
    {
      id: 4,
      type: 'leaf',
      bgColor: leafBg,
    },
    {
      id: 5,
      type: 'rectangle',
      bgColor: rectangleBg,
    },
  ]
  const getShapeStyle = (type:any) => {
    console.log("type", type)
    switch (type) {
      case 'circle':
        return [styles.circle, {borderRadius: 80/2}];
      case 'square':
        return styles.square;
      case 'triangle':
        return styles.triangle;
      case 'leaf':
        return styles.leaf;
      case 'rectangle':
        return styles.rectangle;
      default:
        return {};
    }
  };
  return (
    <>
    <StatusBar backgroundColor={randomColorGenerate}/>
      <View style={[styles.changeBg, {backgroundColor: randomColorGenerate}]}>
        
        <View style={styles.shapes}>
        
        <FlatList
        data={shapes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.shapeOutline}>
            <View style={[getShapeStyle(item.type),  {backgroundColor: item.bgColor}]}>
              {/* <Text>{item.type}</Text> */}
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      />
      
      </View>
      <View style={[styles.shapeOutline, styles.flowerContainer]}>
              <View>
                <View style={[styles.flower1,  {backgroundColor: flowerBg}]}></View>
                <View style={[styles.flower2,  {backgroundColor: flowerBg}]}></View>
              </View>
              <View>
                <View style={[styles.flower3,  {backgroundColor: flowerBg}]}></View>
                <View style={[styles.flower4,  {backgroundColor: flowerBg}]}></View>
              </View>
        </View>
        <TouchableOpacity onPress={generateColor} style={styles.changeBtn}>
            <Text>Change Color</Text>
        </TouchableOpacity>
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  changeBg:{
    // height: 415,
    paddingHorizontal: 12,
    // backgroundColor: "#2c2c54",
    // paddingBottom: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeBtn:{
    marginTop: 8,
    marginBottom: 28,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8
  },
  changeBtnText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shapes:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  shapeOutline: {
    width: 80,
    height: 80,
    borderRadius: 8,
    // borderWidth: 1,
    margin: 25
  },
  square:{
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 1
  },
  circle:{
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1
    // backgroundColor: '#fff',
  },
  triangle:{
    width: 80,
    height: 80,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 150,
    backgroundColor: '#fff',
  },
  leaf:{
    width: 80,
    height: 80,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 150,
    backgroundColor: '#fff',
  },
  flowerContainer:{
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row'
  },
  flower1:{
    width: 40,
    height: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
  },
  flower2:{
    width: 40,
    height: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
  },
  flower3:{
    width: 40,
    height: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
  },
  flower4:{
    width: 40,
    height: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
  },
  rectangle:{
    width: 80,
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  }
})