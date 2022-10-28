import React from 'react';
import { 
    View,
    Text,
    StyleSheet

 } from 'react-native';

 import { MotiView } from 'moti'

export default function Balance({ saldo , gastos}) {
 return (
    <MotiView 
    style={styles.container}
    from={{
        rotateX:'-100deg',
        opacity:0,
    }}
    animate={{
        rotateX:'0deg',
        opacity:1,
    }}
    transition={{
        type:'timing',
        delay: 300,
        duration:900,
    }}
    
    >
        <View style= {styles.item}>
            <Text style={styles.itenTitle}>Saldo</Text>
            <View style= {styles.content}>
                <Text style= {styles.currencySymbol}>R$</Text>
                <Text style= {styles.balance}>{saldo}</Text>
            </View>
        </View>
        <View style= {styles.item}>
            <Text style={styles.itenTitle}>Gastos</Text>
            <View style= {styles.content}>
                <Text style= {styles.currencySymbol}>R$</Text>
                <Text style= {styles.expenses}>{gastos}</Text>
            </View>
        </View>
    </MotiView>

 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom:22,
        marginTop: -28,
        marginStart: 14,
        marginEnd: 14,
        borderRadius:10,
        zIndex: 99,
    
    },

    itenTitle:{
        fontSize: 20,
        color: '#DADADA',

    },

    content: {
        flexDirection: 'row',
        alignContent: 'center',
    
    },

    currencySymbol:{
        color: '#dadada',
        marginRight: 6,    
    },

    balance:{
        fontSize: 22, 
        color:'#2ecc71',
    },

    expenses:{
        fontSize: 22,
        color: '#e74e3c',

    }
})