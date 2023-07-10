import "./utils/expo-crypto-shim"; //needed
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  ENV_PROJECT_ID,
  providerMetadata,
} from "./utils/WalletConnectConstants";

const buttonStyle = {
  padding: 5,
  borderRadius: 5,
  backgroundColor: "#007AFF",
};

export default function App() {
  const { open, address, provider, isConnected } = useWalletConnectModal();

  const handleLogout = () => provider.disconnect();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {isConnected ? (
        <>
          <Text>Welcome, {address}!</Text>
          <TouchableOpacity style={buttonStyle} onPress={handleLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={buttonStyle} onPress={open}>
          <Text>Connect wallet</Text>
        </TouchableOpacity>
      )}

      <WalletConnectModal
        projectId={ENV_PROJECT_ID}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
