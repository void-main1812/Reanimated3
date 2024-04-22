import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import cities from '../assets/data/Cities.json';

const CityCard = ({ source, name, id }: { source: string; name: string; id: number }) => {
  return (
    <Link href={{ pathname: '/[id]', params: { id } }} asChild>
      <Pressable className="mb-10 w-full">
        <View className={styles.cardImageContainer}>
          <Image className={styles.cardImage} style={{ height: 300 }} source={`${source}`} />
        </View>
        <LinearGradient
          className={styles.cardTextContainer}
          colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.5)']}>
          <View className="overflow-hidden rounded-xl">
            <Text className={styles.cardText}>{name}</Text>
          </View>
        </LinearGradient>
      </Pressable>
    </Link>
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
            <CityCard id={item.id} name={item.city_name} source={item.image_source} key={item.id} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  screen: 'px-[24px] pt-[24px] h-full',
  cardImage: 'w-full object-cover rounded-lg',
  cardImageContainer: 'rounded-2xl overflow-hidden',
  cardText: 'text-4xl font-semibold text-white',
  cardTextContainer: 'w-full absolute bottom-0 overflow-hidden rounded-b-2xl px-6 py-6',
};

export default index;
