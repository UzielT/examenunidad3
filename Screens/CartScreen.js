import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import { ProductosContext } from '../Context/ProductosContext';

const CartScreen = () => {
  const {
    carro,
    setCarro,
    total,
    setTotal,
  } = useContext(ProductosContext);


  const eliminar = (codigo, precio) => {
    const temporal = carro.filter((item) => {
      return item.codigo !== codigo;
    });

    total.total-=precio
    setCarro(temporal);
  };

  const comprar = () => {
    alert('Comprado');
    console.log(total)
    setCarro({})
    setTotal({})

  };

  return (
    
    <View style={styles.container}>
      <ScrollView>
        {carro.length > 0 ? (
          carro.map((a, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{a.descripcion}</ListItem.Title>
                <ListItem.Subtitle>$ {a.precio}</ListItem.Subtitle>
              </ListItem.Content>

              <View style={styles.buttons}>
                <Icon
                 name="backspace-outline"
                  size={30}
                  color="rgb(230, 28, 28)"
                  onPress={() => eliminar(a.codigo, a.precio)}
                />
              </View>
            </ListItem>
          ))
        ) : (
          <Text> No tienes productos</Text>
        )}
      </ScrollView>

      {carro.length > 0 ? (
        <View>
    <Text style={{fontSize: 20, textAlign: 'center'}}>$ {total.total}</Text>
          <Button
            style={{ margin: 20, elevation: 20, borderWidth: 20 }}
            title="Comprar"
            onPress={() => comprar()}
          />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
