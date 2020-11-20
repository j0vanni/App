import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StreamApp, FlatFeed } from "expo-activity-feed";

const Feed = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <StreamApp
          apiKey="4m4x2gcszs2s"
          appId="100732"
          token="jpc7ettmf84zux34ujd4cyp23q72mumnfp6aky3sjzvds6u5u3grajczqyyz5yef"
        >
          <FlatFeed />
        </StreamApp>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Feed;
