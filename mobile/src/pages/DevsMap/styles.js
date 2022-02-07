import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },

  mapContainer: {
    height: '100%',
    width: '100%',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 100,
  },

  mapMarkerImage: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2
  },

  calloutContainer: {
    width: 200,
    height: 55,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },

  devName: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
  },

  devTechs: {
    color: '#bbb',
    fontSize: 12,
    fontWeight: 'bold',
    width: '100%',
  },

  arrowContainer: {
    width: 200,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowBorder: {
    width: 17,
    borderTopWidth: 17,
    borderColor: '#ccc',
    transform: [
          { translateY: -13 },
          { translateX: 10 },
          { rotate: '135deg' },
        ],
  },

  arrowFill: {
    width: 17,
    borderTopWidth: 17,
    borderColor: 'white',
    transform: [
          { translateY: -14.3 },
          { translateX: -7 },
          { rotate: '135deg' },
        ],
  },

  search: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 25,
    fontSize: 17
  },

  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  }
})