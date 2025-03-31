// App.js
import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const apiService = {
  getIntroMessage: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: "Peace be upon you! May this journey bring you closer to the wisdom of the Quran. How can I help you today?"
        });
      }, 1000);
    });
  },
  
  getSurahTranslation: (surahName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (surahName.toLowerCase() === 'al-fatiha') {
          resolve({
            translation: `In the name of Allah, the Most Gracious, the Most Merciful.
All praise is for Allah, the Lord of all worlds.
The Most Gracious, the Most Merciful.
Master of the Day of Judgment.
You alone we worship, and You alone we ask for help.
Guide us on the Straight Path.
The path of those who have received Your grace, not the path of those who have earned Your anger or gone astray.`,
            additionalInfo: "Would you like the Tafsir (explanation) of this Surah?"
          });
        } else {
          resolve({
            translation: `Translation for ${surahName} would appear here.`,
            additionalInfo: "Would you like the Tafsir (explanation) of this Surah?"
          });
        }
      }, 1500);
    });
  },
  
  getVerseAboutTopic: (topic) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (topic.toLowerCase() === 'gratitude') {
          resolve({
            verse: "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]...' (Quran 14:7)",
            explanation: "This verse reminds us that gratitude leads to increase in blessings."
          });
        } else {
          resolve({
            verse: `A verse about ${topic} would appear here.`,
            explanation: `Explanation about the verse related to ${topic}.`
          });
        }
      }, 1000);
    });
  }
};

// Chat Screen
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef(null); // Add a ref for the ScrollView

  useEffect(() => {
    // Load initial welcome message
    apiService.getIntroMessage()
      .then(response => {
        setMessages([
          { id: 1, text: response.message, sender: 'bot', timestamp: new Date() }
        ]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching initial message:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Scroll to the end whenever messages change
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleInitialPrompt = (prompt) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: prompt,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Get response based on the prompt
    if (prompt.includes('verse about gratitude')) {
      setLoading(true);
      apiService.getVerseAboutTopic('gratitude')
        .then(response => {
          const botResponse = {
            id: messages.length + 2,
            text: response.verse,
            additionalInfo: response.explanation,
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prevMessages => [...prevMessages, botResponse]);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching verse:', error);
          setLoading(false);
        });
    }
  };
  
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    
    // Process the message and get response
    setLoading(true);
    
    if (inputText.toLowerCase().includes('surah al-fatiha') || 
        inputText.toLowerCase().includes('translation of surah al-fatiha')) {
      apiService.getSurahTranslation('Al-Fatiha')
        .then(response => {
          const botResponse = {
            id: messages.length + 2,
            text: response.translation,
            additionalInfo: response.additionalInfo,
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prevMessages => [...prevMessages, botResponse]);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching translation:', error);
          setLoading(false);
        });
    } else {
      // Generic response for other queries
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: `I've received your question about "${inputText}". I'll provide information based on Islamic teachings.`,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prevMessages => [...prevMessages, botResponse]);
        setLoading(false);
      }, 1500);
    }
  };
  
  return (
    <SafeAreaView className="flex-1 bg-teal-900">
      <StatusBar barStyle="light-content" backgroundColor="#0E3B43" />
      <View className="flex-row justify-between items-center p-4 bg-teal-900">
        <TouchableOpacity className="w-10 h-10 justify-center items-center">
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <Image source={require('../assets/images/logo.png')} className="w-6 h-6 mr-2" />
          <Text className="text-2xl font-bold text-white">QuranChat</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        className="flex-1 p-4" 
        ref={scrollViewRef} // Attach the ref to the ScrollView
      >
      <View className="items-center p-6">
          <Image 
            source={require('../assets/images/chat-image.png')} 
            className="w-48 h-40 mb-4" 
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-white mb-2 text-center">
            Know more about Quran
          </Text>
          <Text className="text-base text-gray-300 text-center mx-6">
            You can ask me all your questions related to Islam. I will be happy to answer them!
          </Text>
        </View>
        
        <View className="mt-4 px-4">
          <View className={styles.informationBackground}>
            <MaterialIcons name="security" size={24} color="#FFD700" />
            <Text className="text-white ml-4 flex-1">
              Be comfortable, our discussions are confidential
            </Text>
          </View>
          
          <View className={styles.informationBackground}>
            <MaterialIcons name="book" size={24} color="#A78BFA" />
            <Text className="text-white ml-4 flex-1">
              I have learned extensively from an Imam of Al-Azhar
            </Text>
          </View>
          
          <View className={styles.informationBackground}>
            <MaterialIcons name="delete" size={24} color="#60A5FA" />
            <Text className="text-white ml-4 flex-1">
              You can delete our discussions at any time.
            </Text>
          </View>
        </View>
        {messages.map(message => (
          <View 
            key={message.id} 
            className={`rounded-xl p-4 mb-4 max-w-[80%] ${
              message.sender === 'user' 
                ? 'bg-yellow-400 self-end' 
                : 'bg-white/10 border border-white/50 self-start'
            }`}
          >
            <Text className="text-white text-base leading-6">{message.text}</Text>
            {message.additionalInfo && (
              <Text className="text-white/80 mt-2 text-sm">{message.additionalInfo}</Text>
            )}
            {message.sender === 'bot' && (
              <View className="flex-row justify-between mt-3 items-center">
                <Text className="text-yellow-400 text-sm">Read more</Text>
                <Text className="text-white/50 text-xs">
                  {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </Text>
              </View>
            )}
          </View>
        ))}
        
        {loading && (
          <View className="self-start mb-4">
            <View className="flex-row bg-white/15 rounded-xl p-3">
              <View className="w-2 h-2 rounded-full bg-white/50 mx-0.5" />
              <View className="w-2 h-2 rounded-full bg-white/50 mx-0.5" />
              <View className="w-2 h-2 rounded-full bg-white/50 mx-0.5" />
            </View>
          </View>
        )}
      </ScrollView>
      
      <View className="px-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-2">
          <TouchableOpacity 
            className="bg-gray-800/30 rounded-full px-4 py-3 mr-3"
            onPress={() => handleInitialPrompt('Show me a verse about gratitude.')}
          >
            <Text className="text-white">Show me a verse about gratitude.</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="bg-gray-800/30 rounded-full px-4 py-3 mr-3"
            onPress={() => handleInitialPrompt('Show me a verse about gratitude.')}
          >
            <Text className="text-white">Show me a verse about gratitude.</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      <View className="flex-row items-center p-4 border-t border-gray-700">
        <TouchableOpacity className="w-10 h-10 justify-center items-center">
          <MaterialIcons name="attach-file" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          className="flex-1 h-10 bg-gray-800/30 rounded-full mx-2 px-4 text-white"
          placeholder="Ask about life, faith, or the Qur'an..."
          placeholderTextColor="#7C9A92"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity className="w-10 h-10 justify-center items-center mr-2">
          <MaterialIcons name="mic" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          className="w-10 h-10 bg-emerald-700 rounded-full justify-center items-center"
          onPress={handleSendMessage}
        >
          <MaterialIcons name="arrow-upward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  informationBackground: 'flex-row items-center bg-white/15 border border-white/50 rounded-xl p-4 mb-4'
}

export default Chat;