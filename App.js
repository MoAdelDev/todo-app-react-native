import { View } from "react-native";
import Router from "./src/Routes/index.js";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
