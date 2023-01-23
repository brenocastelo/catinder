import { useNavigationState } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { CatBlueprintIcon, MessageIcon, UserIcon } from '../../../assets/icons';

import { tabContainerStyles } from './styles';

const routesIcons = {
  Home: CatBlueprintIcon,
  Messages: MessageIcon,
  Profile: UserIcon,
};

export function CustomTabBar({ navigation }) {
  const state = useNavigationState((state) => state);

  return (
    <View style={tabContainerStyles}>
      {state.routeNames.map((route, index) => {
        const isFocused = index === state.index;

        const Icon = routesIcons[route];

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={() => {
              console.log('press');
              navigation.navigate(route);
            }}
            key={route}
          >
            <Icon color={isFocused ? '#EC537E' : '#434141'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
