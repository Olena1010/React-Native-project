import { StyleSheet, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const location = route.params.location;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="I am here"
          description="My location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;

