import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import cities from '../assets/data/Cities.json';

export default function DynamicPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const data = cities.find((city) => city.id === Number(id));

  return (
    <View>
      <Animated.View sharedTransitionTag="image">
        <Image source={data?.image_source} className=" w-full" style={{ height: 500 }} />
      </Animated.View>
      <View className="mt-[40px] gap-y-[24px] px-[24px]">
        <Text className="text-5xl font-bold">{data?.city_name}</Text>
        <Text className="text-lg">{data?.description}</Text>
      </View>
      <Pressable
        onPress={() => router.back()}
        className="absolute left-8 top-16 flex-row gap-x-4 rounded-xl bg-white/70 px-4 py-4 shadow-2xl shadow-black">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-lg">Back</Text>
      </Pressable>
    </View>
  );
}
