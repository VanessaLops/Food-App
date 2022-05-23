import React, { useState , useRef} from 'react';
import { Box, Space, Title , Button } from '../Css/global';
import { Image } from 'react-native';

import Lottie from 'lottie-react-native'
import {Colors} from '../Assets/theme.json'
import Delivery from '../Assets/Delivery.png'
import descont from '../Assets/descont.png'





const Tuor = ()=>{

const tuorData =[
    {
       bg : "primary",
       title: "Seu app de entregas favorito para todas as horas.",
       pic : Delivery,
       btnbg: 'white',
       textcolor: 'white'
       

    },

    {
        bg : "white",
        title: "Aproveite descontos exclusivos para voce e toda familia!",
        pic : descont,
        btnbg: 'primary',
        textcolor: 'primary'
        
 
     },

     {
        bg : "primary",
        title: "Explore milhares de combinações para o seu prato do dia.",
        pic : Delivery,
        btnbg: 'white',
        textcolor: 'white'
        
 
     }
]

const [actualTuor, setActualTuor] = useState(0)

const animation = useRef(null);


    return(

    <Box  haspadding paddingTop={25} fluid color={tuorData[actualTuor]?.bg}  align="center" >
        <Box width={'90%'}>

  
        <Title  size={35} bold color={tuorData[actualTuor]?.textcolor}>{tuorData[actualTuor]?.title}</Title>
        <Space size='100px' />
    {   actualTuor == 2 ?    <Lottie
        autoPlay
        ref={animation}
        style={{
          width: 320,
          height: 320,
          
        }}
        source={require('../lotties/78267-food-choice.json')}
      /> :  
       <Image source={tuorData[actualTuor]?.pic} />
      }
  
  </Box>
        <Space size='150px' />
        <Button 
        onPress={actualTuor==2 ? ()=>alert('ok') : ()=>setActualTuor(actualTuor + 1 , console.log(actualTuor))}
         color={tuorData[actualTuor]?.btnbg}
    
        width={"90%"}
        height={"60px"} 
        radius={5}
        align="center"
        justify="center"
        >
         
         <Title bold size={20}  >
             {actualTuor== 2 ? 'Explorar' : 'Proximo'}</Title>
        </Button>
    </Box>
    )
 

}

export default Tuor;