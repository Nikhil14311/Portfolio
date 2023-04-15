import React from 'react'
import Java from './assets/Java.gif'
import Js from './assets/JS.png'
import ReactImage from './assets/React.gif'
import {useTranslation} from "react-i18next";

const Languages = () => {
    const {t} = useTranslation('');
    const images = [
        {
            id:0,
            name:t('dashboard:c'),
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'
        },
        {
            id:1,
            name:t('dashboard:java'),
            imageUrl:Java
        },
        {
            id:2,
            name:t('dashboard:javascript'),
            imageUrl:Js
        },
        {
            id:3,
            name:t('dashboard:reactjs'),
            imageUrl:ReactImage
        },
        {
            id:4,
            name:t('dashboard:reactnative'),
            imageUrl:ReactImage
        }
    ]



  return (
    <div style={{display:'flex',flexDirection:'column'}} className="border-bottom">
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h4 style={{color:'red'}}>{t('dashboard:excellenxyinlanguages')}</h4>
        </div>
        <div class="container" style={{marginTop:20}}>
            <div class="row">
            {images.map((item,index)=>{
                return(
                    <div class="col-sm" key={index} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                        <img src={item.imageUrl} style={{width:100,height:100}} />
                        <h6 style={{marginTop:10}}>{item.name}</h6>
                    </div>
                    )
                })}
            </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button style={{width:120,height:30,marginTop:20,marginBottom:10, borderRadius:5,borderWidth:1,backgroundColor:'white',fontSize:14,fontWeight:'bold'}}>{t("dashboard:showmore")}</button>
        </div>
    </div>
  )
}

export default Languages