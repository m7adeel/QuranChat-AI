import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const NumberPicker = ({ 
  minValue = 18, 
  maxValue = 65, 
  initialValue = 25,
  onChange = (value) => console.log(value) 
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const scrollViewRef = useRef(null);
  const itemHeight = 70;
  const visibleItems = 5;
  const windowHeight = Dimensions.get('window').height;
  
  // Generate array of numbers from minValue to maxValue
  const numbers = Array.from(
    { length: maxValue - minValue + 1 },
    (_, i) => minValue + i
  );

  // Initialize with correct offset for initialValue
  const initialScrollIndex = numbers.findIndex(num => num === initialValue);
  
  // Handle value selection
  const handleValueChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  // Scroll to specific number
  const scrollToNumber = (number) => {
    const index = numbers.findIndex(num => num === number);
    if (index !== -1 && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: index * itemHeight,
        animated: true,
      });
    }
  };

  // Handle scroll end to snap to nearest number
  const handleScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / itemHeight);
    const value = numbers[index];
    handleValueChange(value);
    scrollToNumber(value);
  };

  return (
    <View className="flex-1 bg-teal-900 justify-center items-center">
      <View className="h-80 justify-center">
        {/* Top fade overlay */}
        <View className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-teal-900 to-transparent z-10" />
        
        {/* Bottom fade overlay */}
        <View className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-teal-900 to-transparent z-10" />
        
        {/* Highlight for selected item */}
        <View className="absolute w-full h-16 bg-teal-800/30 border-0 rounded-lg z-0" />
        
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: (visibleItems - 1) * itemHeight / 2 }}
          onMomentumScrollEnd={handleScrollEnd}
          snapToInterval={itemHeight}
          decelerationRate="fast"
          initialScrollOffset={initialScrollIndex * itemHeight}
        >
          {numbers.map((number) => (
            <TouchableOpacity
              key={number}
              className="h-16 w-64 justify-center items-center"
              onPress={() => {
                handleValueChange(number);
                scrollToNumber(number);
              }}
            >
              <Text
                className={`text-2xl ${
                  selectedValue === number
                    ? 'text-white font-bold'
                    : 'text-gray-400 font-normal'
                }`}
              >
                {number}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default NumberPicker;