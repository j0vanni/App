import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "687366643167-n3c917duo66cs25qsebjngdkjv3quok7.apps.googleusercontent.com",
    iosClientId:
      "687366643167-n3c917duo66cs25qsebjngdkjv3quok7.apps.googleusercontent.com",
    androidClientId:
      "687366643167-n3c917duo66cs25qsebjngdkjv3quok7.apps.googleusercontent.com",
    webClientId:
      "687366643167-n3c917duo66cs25qsebjngdkjv3quok7.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
