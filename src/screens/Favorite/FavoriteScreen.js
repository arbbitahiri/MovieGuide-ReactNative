import React from "react"
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button
} from "react-native";
import { FAB } from 'react-native-paper';
import styles from "./styles"

class FavoriteScreen extends React.Component {
    
    renderItemFavorites({ item, navigation }) {
        return (
            <View style={styles.listItemFav}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetailsFavorites')} >
                    <Image
                        style={styles.imageViewFav}
                        source={item.photo}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.textDesign}>{item.name}</Text>
                    <Text style={styles.textDesign}>{item.date}</Text>
                    <Text style={styles.textDesign}>{item.rating}</Text>
                </View>
                <View style={{flex: 1}}>
                    <FAB
                        style={styles.fab}
                        small
                        icon="check"
                        onPress={() => alert('Removed from favorites!')}
                    />
                </View>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.containerFav}>
                <FlatList
                    horizontal={false}
                    data={state.data}
                    renderItem={renderItemFavorites}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent = { flatListItemSeparator }
                />
            </View>
        );
    }
}

export default FavoriteScreen;