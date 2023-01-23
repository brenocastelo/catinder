import { StyleSheet } from 'react-native'


const tabStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 156,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 27,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginHorizontal: 24
  },
});

const tabContainerStyles = tabStyles.container

export { tabContainerStyles }