import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    justifyContent: 'space-around',
    marginLeft: 5,
    padding: 5,
    paddingTop: 1,
  },
  bigButton: {
    height: 40,
    marginLeft: 25,
    marginTop: 10,
    width: 75,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  bigButtonText: {
    fontSize: 25,
  }
});

export const containerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    width: 50,
  },
  navContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  rowContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
});

export const toolbarStyles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'black',
    height: 56,
  },
});

export const textStyles = StyleSheet.create({
  instructions: {
    color: 'white',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  quick: {
    color: 'white',
    textAlign: 'center',
  },
  settings: {
    color: 'white',
    fontSize: 20,
    paddingRight: 10,
  },
  settingsSmall: {
    color: 'white',
    fontSize: 10,
  },
  singleResult: {
    color: '#F5FCFC',
    height: 60,
    margin: 10,
    textAlign: 'center',
  },
  totalResult: {
    color: '#3388FC',
    fontSize: 120,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    color: '#3388FC',
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
  },
});

export const inputStyles = StyleSheet.create({
  inputBox: {
    color: '#3388FC',
    fontSize: 20,
    textAlign: 'center',
  },
});
