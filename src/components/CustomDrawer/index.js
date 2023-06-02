import React, { useContext } from "react";
import * as C from './styles'
import { AuthContext } from "../../contexts/auth";
import { DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";


export default function CustomDrawer(props){

 const {user} = useContext(AuthContext)

    return(
        <DrawerContentScrollView {...props}>
            <C.Container>
                <C.Logo
                 source={require('../../assets/Logo.png')}
                 resizeMode="contain"
                />

                <C.handleText>Bem-vindo</C.handleText>
                <C.NameText
                 atyle={{paddingHorizontal: 20}}
                 numberOfLines={1}
                >
                    {user && user.name}
                </C.NameText>
            </C.Container>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}