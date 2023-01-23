import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import 'react-native-gesture-handler';
import ToggleSwitch from 'toggle-switch-react-native';

import { client } from '../../lib/client';
import { CustomTabBar } from '../../components/CustomTabBar';

import {
  SecondaryText,
  buttonStyles,
  Text,
  InfoContainer,
  toggleButtonStyle,
} from './styles';
import { FavoriteIcon, TrendingIcon } from '../../../assets/icons';
import { ScreenContainer } from '../styles';

export default function Home({ navigation }) {
  const [cats, setCats] = useState([]);
  const [currentCat, setCurrentCat] = useState(null);
  const [toggle, setToggle] = useState(false);

  const carouselRef = useRef<ICarouselInstance>(null);
  const width = Dimensions.get('window').width;

  useEffect(() => {
    client
      .get('/images/search?limit=10&has_breeds=1')
      .then((response) => {
        const { data } = response;
        const parsedCats = data.map((cat) => ({
          name: cat.breeds.length !== 0 ? cat.breeds[0].name : 'Little Kitty',
          origin: cat.breeds.length !== 0 ? cat.breeds[0].origin : 'Who knows?',
          energy: cat.breeds.length !== 0 ? cat.breeds[0].energy_level : '🚀',
          ...cat,
        }));

        setCats(parsedCats);
        setCurrentCat(data.length !== 0 ? data[0] : null);
      })
      .catch((error) => console.log(error));
  }, []);

  async function handleVote(type: 'up' | 'down' = 'up') {
    try {
      await client.post('https://api.thecatapi.com/v1/votes', {
        image_id: currentCat.id,
        value: type === 'up' ? 1 : -1,
      });

      carouselRef.current.next();
    } catch (error) {
      console.log(error);
    }
  }

  if (!currentCat || cats.length === 0) return null;

  return (
    <GestureHandlerRootView>
      <ScreenContainer>
        <ToggleSwitch
          isOn={toggle}
          offColor="#E3E3E4"
          onColor="#E3E3E4"
          size="large"
          icon={toggle ? <TrendingIcon /> : <FavoriteIcon />}
          thumbOffStyle={toggleButtonStyle}
          thumbOnStyle={toggleButtonStyle}
          onToggle={(isOn) => setToggle(isOn)}
        />

        <Carousel
          ref={carouselRef}
          data={cats}
          onSnapToItem={(value) => setCurrentCat(cats[value])}
          renderItem={({ item }) => {
            return (
              <View style={{ marginHorizontal: 16, position: 'relative' }}>
                <Image
                  source={{
                    uri: item.url,
                    height: 446,
                  }}
                  style={{ borderRadius: 16 }}
                />

                <InfoContainer>
                  <View>
                    <Text>{item.name}</Text>

                    <SecondaryText>{item.origin}</SecondaryText>
                  </View>
                  <Text>{item.energy}</Text>
                </InfoContainer>
              </View>
            );
          }}
          width={width}
          height={446}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <TouchableOpacity
            style={buttonStyles}
            onPress={() => handleVote('down')}
          >
            <Image source={require('../../../assets/ignore.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={buttonStyles} onPress={() => handleVote()}>
            <Image source={require('../../../assets/match.png')} />
          </TouchableOpacity>
        </View>

        <CustomTabBar navigation={navigation} />
      </ScreenContainer>
    </GestureHandlerRootView>
  );
}
