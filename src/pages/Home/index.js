import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Touchable} from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '249,49',
    date: '17/09/2022',
    type: 0, //despesas

  },
  {
    id: 2,
    label: 'Pix Cliente Guilherme',
    value: '1005,45',
    date: '20/09/2022',
    type: 1, //receita / entradas
  
  },
  {
    id: 3,
    label: 'Salário',
    value: '3500,49',
    date: '23/09/2022',
    type: 1, //despesas

  },
]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Ana Luiza"/>
      
        <Balance saldo= "6.783,05" gastos= "-297,22"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style = {styles.list} 
          data = {list}
          keyExtractor = {(item) => String(item.id)}
          showsVerticalScrollIndicator= {false}
          renderItem = {({item}) => <Movements data={item} /> }

        />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title: {
    fontSize:18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 18,
    marginEnd: 14,
    marginTop: 8,
    marginLeft: 18,
    marginRight: 14,
    marginTop: 14,
  }

});
