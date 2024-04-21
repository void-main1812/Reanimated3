import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import cities from '../assets/data/Cities.json';

export default function DynamicPage() {
  const { id } = useLocalSearchParams();

  const data = cities.find((city) => city.id === Number(id));

  return (
    <View>
      <Image source={data?.image_source} className=" w-full" style={{ height: 500 }} />
      <View className="mt-[40px] gap-y-[24px] px-[24px]">
        <Text className="text-5xl font-bold">{data?.city_name}</Text>
        <Text className="text-lg">{data?.description}</Text>
      </View>
    </View>
  );
}
