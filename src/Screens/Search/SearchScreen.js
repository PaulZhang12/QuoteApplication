import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, SafeAreaView, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CategoryComponent from "../../Components/CategoryComponent"
class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state ={
            cat1: {
                picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Cercopithecus_diana.jpg/1200px-Cercopithecus_diana.jpg",
                words:" Monkey "
            },
            cat2: {
                picture:"https://audiograb.files.wordpress.com/2015/02/gibbon-singing-techniques-opera-singers_58611_990x742.jpg",
                words:" Gibbon "
            },
            cat3: {
                picture:"https://media1.britannica.com/eb-media/20/154120-004-6FEE3A9C.jpg",
                words:" Lemur "
            },
            cat4: {
                picture:"https://media1.britannica.com/eb-media/20/154120-004-6FEE3A9C.jpg",
                words:" Lemur "
            },
            cat5: {
                picture:"https://media1.britannica.com/eb-media/20/154120-004-6FEE3A9C.jpg",
                words:" Lemur "
            },
            cat6: {
                picture:"https://media1.britannica.com/eb-media/20/154120-004-6FEE3A9C.jpg",
                words:" Lemur "
            },
        }
    }

    GetCategoryArray(CategoryObjects){
        let CategoryArray = [];
        for (const category in CategoryObjects) {
            if (CategoryObjects.hasOwnProperty(category))
                CategoryArray.push(<CategoryComponent picture={CategoryObjects[category].picture} words={CategoryObjects[category].words}/>)
        }
        return CategoryArray;

    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.layout}>
                    <View style={styles.searchContainer}>
                        <Icon name="ios-search" size={25} style={styles.searchIcon}/>
                        <TextInput placeholder="Find Your Philos" style={styles.searchText}></TextInput>
                    </View>
                    <View style={styles.catView}>
                        <Text style={styles.categoriesText}> Categories </Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.categoriesView} horizontal={true}>
                        {this.GetCategoryArray(this.state)}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({
    layout: {
        display: "flex",
        alignItems: "center"
    },

    searchContainer: {
        display: "flex",
        width: 90+"%",
        height: 40,
        borderColor: "grey",
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },

    searchIcon: {
        marginLeft: 10,
        color: "grey"
    },

    searchText: {
        fontSize: 15,
        marginLeft: 10,
        paddingTop: 10
    },
    categoriesView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center'
    },
    categoriesText: {
        display: "flex",
        alignItems: "center",
        color: "black",
        fontSize: 30,
    },
    catView: {
        display: "flex",
        alignItems: "center",
        width: 100+"%",
        height: 50,



    }


});

export default SearchScreen;
