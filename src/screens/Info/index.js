import { Button, Text, View, Image,Pressable} from "react-native";
import { useState, useEffect} from "react";

const Info = (props) => {
    const navigation = props.navigation;
    const chuyenMH = (ten_mh) =>{
        navigation.navigate(ten_mh);
    }

    

    return(
        <View>
            <Image style={{height: 70, width: 170, marginLeft: 100}} source={require('../../../../Assigment_Ph27050/assets/logo_fpt.png')} />
            <Text style={{marginLeft: 75,fontSize:20, fontStyle:"italic",color:"red"}}>Màn hình Thông tin cá nhân</Text>
            <Text style={{marginLeft: 30,fontSize:15}}>Họ tên: Nguyễn Đình Quang</Text>
            <Text style={{marginLeft: 30,fontSize:15}}>Msv: PH27050</Text>
            


            
            <Pressable onPress={() => chuyenMH('QLShop')}>
                <Text style={{marginLeft: 30}}>Màn hình Quản lý cửa hàng</Text>
            </Pressable>
        </View>
    );
};

export default Info;