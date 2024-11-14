import { Link } from 'expo-router';
import { Text, View, Button } from 'react-native';
import { useEffect } from 'react';
import { MMKV, useMMKVString } from 'react-native-mmkv';
import Reactotron from 'reactotron-react-native';
export default function Index() {
  const [username, setUsername] = useMMKVString('user.name');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    };
    Reactotron.display({
      name: 'KNOCK KNOCK',
      preview: "Who's there?",
      value: 'Orange.',
    });

    fetchData();
  }, []);

  const triggerError = () => {
    console.log('Triggering dddd');
    throw new Error('This is a test error');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Link href="/contacts">Contacts</Link>
      <Link href="/images">Images</Link>

      <Text>{username}</Text>
      <Button title="Set Username" onPress={() => setUsername('John Doe')} />
      <Button title="Trigger Error" onPress={triggerError} />
    </View>
  );
}
