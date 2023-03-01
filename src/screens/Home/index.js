import { Text,View,Pressable,StyleSheet,Image } from "react-native";

const Home = (props) => {
    const navigation = props.navigation;

    const chuyenMH = (ten_mh) =>{
        navigation.navigate(ten_mh);
    }

    return(
        <View>
            <Image style={{height: 70, width: 170, marginLeft: 100}} source={require('../../../../Assigment_Ph27050/assets/logo_fpt.png')} /> 
            {/* '../../../../assets/logo_fpt.png' */}
            <Text style={{marginLeft: 70, fontSize: 21, fontStyle:"italic"}}>Assignment môn Đa nền tảng</Text>
            <Pressable onPress={() => chuyenMH('Info', {id: 123})}>
                <Text style={{marginLeft: 30, marginTop: 25,fontSize:17, fontStyle:"normal",color:"blue"}}>Màn hình Thông tin cá nhân</Text>
            </Pressable>
            <Pressable onPress={() => chuyenMH('QLShop',{id: 234})}>
                <Text style={{marginLeft: 30,fontSize:17,marginTop:10,fontStyle:"normal", color:"blue"}}>Màn hình Quản lý cửa hàng</Text>
            </Pressable>
        </View>
    );
};

export default Home;