import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "black",
    shadowOpacity: 0.12,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 6,
    minHeight: 90
  },
  cardBody: {
    display:"flex",
  }
})