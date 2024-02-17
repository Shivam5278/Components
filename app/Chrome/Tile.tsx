import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

import {MARGIN, SIZE} from './Config';

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
  },
  web: {
    borderRadius: MARGIN,
    margin: MARGIN * 2,
  },
});
interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const Tile = ({uri}: TileProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <WebView source={{uri}} containerStyle={styles.web} />
    </View>
  );
};

export default Tile;