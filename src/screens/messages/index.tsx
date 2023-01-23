import { Text } from 'react-native';
import { CustomTabBar } from '../../components/CustomTabBar';
import { ScreenContainer } from '../styles';

export function Message({ navigation }) {
  return (
    <ScreenContainer>
      <Text>Messages</Text>

      <CustomTabBar navigation={navigation} />
    </ScreenContainer>
  );
}
