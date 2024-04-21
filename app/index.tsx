import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import cities from '../assets/data/Cities.json';
import { BlurView } from 'expo-blur';

const CityCard = ({ source, name }: { source: string; name: string }) => {
  return (
    <View className="mb-10 w-full">
      <View className={styles.cardImageContainer}>
        <Image className={styles.cardImage} style={{ height: 300 }} source={`${source}`} />
      </View>
      <View className={styles.cardTextContainer}>
        <View
          className="overflow-hidden rounded-xl"
          style={{ borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.7)' }}>
          <BlurView
            className="h-full w-full px-6 py-8"
            experimentalBlurMethod="dimezisBlurView"
            tint="light"
            intensity={50}>
            <Text className={styles.cardText}>{name}</Text>
          </BlurView>
        </View>
      </View>
    </View>
  );
};

const index = () => {
  return (
    <SafeAreaView>
      <View className={styles.screen}>
        <FlatList
          data={cities}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CityCard name={item.city_name} source={item.image_source} key={item.id} />
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  screen: 'px-[24px] py-[24px] h-full',
  cardImage: 'w-full object-cover rounded-lg',
  cardImageContainer: 'rounded-2xl overflow-hidden mb-4',
  cardText: 'text-4xl font-semibold text-white',
  cardTextContainer: 'w-full absolute bottom-0 overflow-hidden rounded-b-2xl px-6 py-12',
};

export default index;
