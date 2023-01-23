import { StyleSheet } from 'react-native';
import styled from 'styled-components/native'

const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-top-right-radius: 16;
  border-top-left-radius: 16;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-right: 20px;
  margin-left: 20px;
`
const Text = styled.Text`
  color: #434141;
  font-size: 16;
  line-height: 30;
  font-weight: 700;
`

const SecondaryText = styled(Text)`
  color: #BFBFC0;
  font-size: 8;
  line-height: 10;
`

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
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
  toggleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingTop: 3,
    backgroundColor: '#fff',
    width: 40,
  }
});

const buttonStyles = styles.button
const toggleButtonStyle = styles.toggleButton

export { InfoContainer, SecondaryText, Text, buttonStyles, toggleButtonStyle }