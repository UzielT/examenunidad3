import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductosContext } from '../Context/ProductosContext';

const HomeScreen = ({ navigation }) => {
  
  const {carro, lista, setCarro, total} = useContext(ProductosContext);


  const agregarCompra =(producto, precio)=> {

    setCarro([...carro,producto])
    
    total.total+=precio

    console.log(total)

  }

  return (
    <View style={styles.container}>
      <Header
        placement=""
        centerComponent={{
          text: 'Tienda',
          style: { color: '#fff', fontSize: 15 },
        }}
        rightComponent={
          <Icon
            name="cart-outline"
            size={35}
            color="#FFF"
            onPress={() => {
              navigation.navigate('CartScreen', []);
            }}
          />
        }
      />
     
      <ScrollView>
        {lista.length > 0 ? (
          lista.map((a, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{a.descripcion}</ListItem.Title>
                <ListItem.Title>$ {a.precio}</ListItem.Title>
              </ListItem.Content>

              <View style={styles.buttons}>
                <Icon
                  name="add-circle-outline"
                  size={35}
                  color="rgb(11, 120, 1)"
                  onPress={() => agregarCompra(a, a.precio)}
                />
              </View>
            </ListItem>
          ))
        ) : (
          <Text> No hay productos</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
