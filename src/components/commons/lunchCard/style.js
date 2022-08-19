import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    title: {
      color: colors.black,
      fontWeight: '700',
      fontSize: 15,
    },
    description: {
      color: colors.black,
    },
    container: {
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      overflow: 'hidden',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.main,
    },
    details: {
      padding: 20,
      backgroundColor: colors.lightGrey,
    },
  });
export default getStyles;