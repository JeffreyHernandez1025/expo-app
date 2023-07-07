import { Text, View, Image } from 'react-native';
import Myself from './assets/images/image.jpeg';
import styles from './assets/styles/styles';

export default function App() {
  return (
    <View style={{backgroundColor: 'black', display: 'flex', flex: 1}} >

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Myself} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.header} > Role</Text>
        <Text style={styles.text}> Scrum Leader </Text>

        <Text style={styles.header} > Passion </Text>
        <Text style={styles.text}> I am very passionate about Astronomy and want to focus on studying space and what it holds for humanity. </Text>

        <Text style={styles.header}> Dream Career </Text>
        <Text style={styles.text}> Software Engineer for SpaceX / NASA </Text>
      </View>

    </View>
  );
}
