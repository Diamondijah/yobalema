import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { id: messages.length + 1, text: inputMessage, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      processUserMessage(inputMessage);
    }
  };

  const processUserMessage = (message) => {
    // Traitez le message de l'utilisateur et générez une réponse du chatbot
    // Ajoutez la réponse du chatbot à la liste des messages
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' && styles.userMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <Image
            source={require('../logo.png')}
            style={styles.logo}
          />
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputMessage}
          value={inputMessage}
          placeholder="Votre message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 360,
    marginBottom: 30,
  },
  messageContainer: {
    backgroundColor: '#e2e2e2',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#b0f2b6s',
    width: '90',
  },
  messageText: {
    color: '#000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#096a09',
    borderRadius: 8,
    padding: 8,
  },
  sendButton: {
    backgroundColor: '#096a09',
    borderRadius: 8,
    padding: 8,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default ChatbotScreen;
