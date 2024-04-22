import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import cities from '../assets/data/Cities.json';
import { Ionicons } from '@expo/vector-icons';

export default function DynamicPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const data = cities.find((city) => city.id === Number(id));

  return (
    <View>
      <Image source={data?.image_source} className=" w-full" style={{ height: 500 }} />
      <View className="mt-[40px] gap-y-[24px] px-[24px]">
        <Text className="text-5xl font-bold">{data?.city_name}</Text>
        <Text className="text-lg">{data?.description}</Text>
      </View>
      <Pressable
        onPress={() => router.back()}
        className="absolute left-8 top-16 flex-row gap-x-4 rounded-xl bg-white/70 px-4 py-4 shadow-2xl shadow-black">
        <BlurView>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text className="text-lg">Back</Text>
        </BlurView>
      </Pressable>
    </View>
  );
}
