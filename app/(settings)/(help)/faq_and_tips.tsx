import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  interpolate,
  Easing,
  runOnJS
} from 'react-native-reanimated';

const FAQItem = ({ item, isOpen, onToggle, index }) => {
  const animation = useSharedValue(isOpen ? 1 : 0);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleAnimation = (open) => {
    animation.value = withTiming(open ? 1 : 0, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  React.useEffect(() => {
    toggleAnimation(isOpen);
  }, [isOpen]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(animation.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: animation.value * contentHeight,
      opacity: animation.value,
      overflow: 'hidden',
    };
  });

  return (
    <View className="mb-3">
      <TouchableOpacity
        onPress={() => onToggle(index)}
        className={`flex-row justify-between items-center p-4 ${isOpen ? 'rounded-t-lg' : 'rounded-lg'} bg-teal-700 bg-opacity-70`}
      >
        <Text className="text-white font-medium">{item.title}</Text>
        <Animated.View style={iconAnimatedStyle}>
          <Ionicons name='chevron-down' color="white" size={20} />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={contentAnimatedStyle} className="bg-teal-700 border-t border-white/50 bg-opacity-50 rounded-b-lg">
        <View 
          className="p-4"
          style={{
            width: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setContentHeight(height);
          }}
        >
          <Text className="text-white">{item.content}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const FAQScreen = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqItems = [
    { id: 0, title: 'How to use ?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 1, title: 'How to use ?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 2, title: 'How to use ?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 3, title: 'How to use ?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { id: 4, title: 'How to use ?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View className="flex-1 bg-teal-800 p-4">
      <View className="mb-6">
        <Text className="text-2xl font-bold text-white">FAQs & Quick Tips</Text>
        <Text className="text-base text-gray-300 italic">Answers to your querries</Text>
      </View>

      <ScrollView className="flex-1">
        {faqItems.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={toggleAccordion}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FAQScreen;