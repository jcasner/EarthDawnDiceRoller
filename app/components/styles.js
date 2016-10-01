import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'space-around',
    marginLeft: 5,
    padding: 5,
    paddingTop: 1,
  },
  bigButton: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    height: 40,
    marginLeft: 25,
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
  checkboxContainer: {
    marginTop: 20,
    paddingTop: 20
  },
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
  wideInputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    width: 150,
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
    justifyContent: 'center'
  },
});

export const toolbarStyles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
  text: {
    color: '#3388FC',
    fontSize: 24,
    paddingLeft: 10,
    textAlign: 'center'
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    marginTop: 10
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
  quickButton: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 25,
    marginTop: 10,
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
    flex: 1,
    height: 100,
    margin: 10,
    textAlign: 'center',
  },
  totalResult: {
    color: '#3388FC',
    fontSize: 120,
    margin: 10,
    textAlign: 'center',
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
    height: 30,
    paddingBottom: 0,
    textAlign: 'center',
  },
});
