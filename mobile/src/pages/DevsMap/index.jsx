import React, { useEffect, useState } from 'react'
import { Alert, BackHandler, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'

import * as Location from "expo-location";
import * as WebBrowser from 'expo-web-browser';

import { AntDesign } from '@expo/vector-icons';

import { getApi } from '../../services/api'

import styles from './styles'
import { StatusBar } from 'expo-status-bar';


function DevsMap() {

    const [devs, setDevs] = useState([])
    const [filteredDevs, setFilteredDevs] = useState([])
    const [techs, setTechs] = useState('')

    const [initialRegion, setInitialRegion] = useState(null)

    async function getLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert(
                'Poxa :(',
                'Nosso app precisa ter acesso à sua localização',
                [{
                    text: 'OK',
                    onPress: () => BackHandler.exitApp()
                }],
                {
                    cancelable: false
                }
            )
                return true
        }
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({accuracy: 6})
        setInitialRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
        })
    }

    async function handlePressButtonAsync(username) {
        WebBrowser.openBrowserAsync(`https://github.com/${ username }`)
    }

    async function loadDevsList() {
        const response = await getApi('dev-radar/devs')
        if (response.length > 0) {
            setDevs(response)
            setFilteredDevs(response)
        }
    }

    function filterDevsByTechs() {
        console.log(techs)
        if (techs) {
            setFilteredDevs(devs.filter(dev => dev.techs.toLowerCase().includes(techs.toLowerCase())))
        } else {
            setFilteredDevs([...devs])
        }
    }

    useEffect(() => {
        getLocation()
        loadDevsList()
    }, [])

    const handleBack = () => {
        Alert.alert(
            'Que pena :(',
            'Deseja sair do app?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            }, ], {
                cancelable: false
            }
        )
            return true
        }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBack
        )
        return () => backHandler.remove()
    }, [])

    return (
        <>
            <StatusBar style="light"/>

            <View style={ styles.mapContainer }>
                { initialRegion && (
                    <MapView
                        style={ styles.map }
                        initialRegion={ initialRegion }
                    >
                        { filteredDevs.map(dev => (
                            <Marker
                                key={ dev.id }
                                style={ styles.mapMarker}
                                coordinate={{
                                    latitude: dev.latitude,
                                    longitude: dev.longitude,
                                }}
                                calloutAnchor={{
                                    x: 0.3,
                                    y: -0.02,
                                }}
                            >
                                <View style={ styles.mapMarkerContainer }>
                                    <Image
                                        style={ styles.mapMarkerImage }
                                        source={{ uri: dev.avatar }}
                                    />
                                </View>

                                <Callout tooltip onPress={ () => handlePressButtonAsync(dev.username) }>
                                    <View>
                                        <View style={ styles.calloutContainer }>
                                            <Text style={ styles.devName }>{ dev.name }</Text>
                                            <Text style={ styles.devTechs }>{ dev.techs }</Text>
                                        </View>

                                        <View style={ styles.arrowContainer }>
                                            <View style={ styles.arrowBorder } />
                                            <View style={ styles.arrowFill } />
                                        </View>
                                    </View>

                                </Callout>
                            </Marker>
                        ))}
                    </MapView>
                )}
            </View>

            <View style={ styles.search }>
                <TextInput
                    style={ styles.searchInput }
                    onChangeText={ setTechs }
                    value={ techs }
                    placeholder="Buscar por tecnologias..."
                />

                <TouchableOpacity
                    style={ styles.searchButton }
                    onPress={ filterDevsByTechs }
                >
                    <AntDesign
                        name="search1"
                        size={ 20 }
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default DevsMap
