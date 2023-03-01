import {View, TextInput, Button, Switch} from 'react-native';
import {useState, useEffect} from 'react';
import { API_QLShop } from '../../helper/api';

const AddShop = (props) => {
    const navigation = props.navigation;
    const editData = props.route.params?.editData;
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setAdress(editData.adress);
            setPhone(editData.phone);
            setStatus(editData.status);
        }
    }, [editData?.id]);

    const onSave = () => {

        // const newObj = {name: name, status: status};
        const newObj = {name: name, adress, phone ,status};
        fetch(
            !editData ? API_QLShop : `${API_QLShop}/${editData.id}`,
            {
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newObj),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        ).then(res => navigation.goBack())
    };

    return(
        <View>
            <TextInput placeholder='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput placeholder='Adress'
                value={adress}
                onChangeText={text => setAdress(text)}
            />
            <TextInput placeholder='Phone'
                value={phone}
                onChangeText={text => setPhone(text)}
            />
            <TextInput placeholder='Status'
                value={status}
                onChangeText={text => setStatus(text)}
            />
            <Button
                title='Lưu'
                onPress={() => onSave()}
            />
        </View>
    );

};

export default AddShop;