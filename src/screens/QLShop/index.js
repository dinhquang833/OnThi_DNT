import { useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, Image, Pressable, SafeAreaView, Text, Alert, Button,Modal, TextInput } from 'react-native';
import { API_QLShop } from '../../helper/api';
import { useIsFocused } from '@react-navigation/native';


const QLShop = (props) => {
    const navigation = props.navigation;
    const kiem_tra = useIsFocused();
    

const [list, setList] = useState([]);

const getList = () =>{
  fetch(API_QLShop)
  .then((res) => res.json())
  .then((data) => setList(data))
  .catch((err) => console.log(err));
};

  useEffect(() => {
    getList();
  }, [kiem_tra]);

const onAdd = () => {
  navigation.navigate('AddShop')
};

const onEdit = (editId) => {
  fetch(`${API_QLShop}/${editId}`)
  .then(res => res.json())
  .then(data => navigation.navigate('AddShop', {
      editData: data
  }))
  .catch(err => console.log(err));
};

const onDelete = (deleteId) => {
  fetch(
      `${API_QLShop}/${deleteId}`, // API_BOOK + '/' + deleteId
      {method: 'DELETE'}
  ).then((res) => {
      getList();
  });
};

    return (
        <View>
            <Button title='Thêm mới' onPress={() => onAdd()}/>
        <FlatList
        data={list}
        renderItem={({item}) => (
          <View>
              <Text style = {{marginLeft: 110,fontSize: 22, color:"violet", fontStyle:'italic'}}>Thông tin shop</Text>
              <Text style = {{marginLeft: 75,fontSize: 15, fontStyle:'normal'}}>{item.id}</Text>
              <Text style = {{marginLeft: 75,fontSize: 15, fontStyle:'normal'}}>Tên: {item.name}</Text>
              <Text style = {{marginLeft: 75,fontSize: 15, fontStyle:'normal'}}>Địa chỉ: {item.adress}</Text>
              <Text style = {{marginLeft: 75,fontSize: 15, fontStyle:'normal'}}>Số điện thoại: {item.phone}</Text>
              <Text style = {{marginLeft: 75,fontSize: 15, fontStyle:'normal'}}>Trạng thái: {item.status}</Text>
              
              <Pressable onPress={() => onEdit(item.id)}>
                <Text style = {{marginLeft: 140,fontSize: 18, fontStyle:'normal', color:"red"}}>Sửa</Text>
              </Pressable>
              <Pressable onPress={() => onDelete(item.id)}>
                <Text style = {{marginLeft: 140,fontSize: 18, fontStyle:'normal', color:"red",marginBottom:20}}>Xóa</Text>
              </Pressable>
            </View>
        )}
        />
            
            
        </View>
    );
};

export default QLShop;

