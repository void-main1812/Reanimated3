import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import cities from '../assets/data/Cities.json';

const index = () => {
  return (
    <View className={styles.screen} style={{ marginTop: StatusBar.currentHeight }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae neque dolorem
        sunt pariatur sint, cum eligendi voluptatum quaerat est aliquid inventore accusamus soluta
        veritatis voluptate praesentium tenetur, ipsam delectus eum! Aliquam exercitationem
        cupiditate fugit ut voluptates laborum aliquid minima tempora animi. Temporibus quia natus
        optio sunt quaerat accusamus ullam?
      </Text>
    </View>
  );
};

const styles = {
  screen: 'h-full w-full justify-center items-center flex-1',
};

export default index;
