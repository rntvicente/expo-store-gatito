import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";

import Styles, { pallete } from "../../styles/global"

function Layout({children}) {
  const platform = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <>
      <SafeAreaView style={Styles.fill}>
        <StatusBar backgroundColor={pallete.purple} />
        <KeyboardAvoidingView behavior={platform} style={Styles.fill}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={Styles.footer}/>
    </>
  );
}

export default Layout;