import { StyleSheet } from 'react-native';
import { useTheme } from './theme';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Matches theme background
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default globalStyles;
