import React from 'react';

import { Text } from 'react-native';
import { CustomTabBar } from '../../components/CustomTabBar';
import { ScreenContainer } from '../styles';

export function Profile({ navigation }) {
  return (
    <ScreenContainer>
      <Text>Profile</Text>

      <CustomTabBar navigation={navigation} />
    </ScreenContainer>
  );
}
