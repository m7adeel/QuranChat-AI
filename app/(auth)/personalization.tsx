import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { Iconify } from 'react-native-iconify';
import AgePicker from '~/components/forms/Age';
import GenderSelection from '~/components/forms/GenderSelect';
import Selection from '~/components/forms/Selection';
import TextInput from '~/components/forms/TextInput';

import { data } from '~/content/personalization';
import { answerTypes } from '~/content/personalization';

const RenderAnswer = ({ question, next }) => {
  if (question.answerType == answerTypes.GENDER_SELECT) {
    return <GenderSelection handleOptionSelect={next}/>
  } else if (question.answerType == answerTypes.SELECTION) {
    return <Selection options={question.options} handleOptionSelect={next} />
  } else if (question.answerType == answerTypes.TEXT) {
    return <TextInput label={question.label} />
  } else if (question.answerType == answerTypes.NUMBER) {
    return <AgePicker placeholder={question.label} />
  }
}

const QuranConnectionScreen = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const width = currentStep * 100 / (data.length - 1);

  const next = () => {
    if (currentStep < data.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.replace('/chat');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-teal-900">
      <StatusBar barStyle="light-content" />

      <View className="flex-1 px-6 pt-3">
        {/* Header with back button and skip */}
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.back()} className="p-2">
            {/* <Iconify icon="ri:arrow-left-s-line" color="white" width={24} height={24} /> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('/chat')}>
            <Text className="text-white text-lg font-medium">Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Progress bar */}
        <View className="h-2 bg-gray-400 rounded-full mt-4">
          <View className="h-2 bg-yellow-400 rounded-full" style={{width: width}}/>
        </View>

        {/* Question */}
        <Text className="text-white text-3xl font-bold mt-8 mb-6">
          {data[currentStep].title}
        </Text>

        {/* Description */}
        {data[currentStep].description &&
          <Text className="text-white text-lg mb-6">
            {data[currentStep].description}
          </Text>
        }

        {/* Option buttons */}
        <RenderAnswer question={data[currentStep]} next={next}/>

        {/* Next Button */}
        {data[currentStep].nextButton &&
          <TouchableOpacity
            className="bg-yellow-400 w-full py-4 rounded-full items-center mt-8"
            activeOpacity={0.8}
            onPress={next}
          >
            <Text className="text-teal-900 text-lg font-semibold">{data[currentStep].nextButton || ''}</Text>
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
};

export default QuranConnectionScreen;