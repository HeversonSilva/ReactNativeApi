import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: '189.55.45.211'})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
