import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})``;

export const PodcastDetails = styled.View`
  align-items: center;

  padding: 0 0 20px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${340 + getStatusBarHeight()}px;
  opacity: 0.2;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 30}px;
`;

export const PodcastTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-self: stretch;
  align-items: center;
  justify-content: center;

  height: 50px;
  background: #1db954;
  margin: 30px 40px 0;
  border-radius: 25px;
`;

export const PlayButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1.5px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ active }) => (active ? '#1db954' : '#fff')};
`;

export const Author = styled.Text`
  font-size: 14px;
  color: #c4c4c4;
  margin-top: 3px;
`;
