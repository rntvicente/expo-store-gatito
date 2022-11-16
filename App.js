import * as SplashScreen from "expo-splash-screen";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import Routes from "./src/routes"
import Layout from "./src/components/layout"

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}
