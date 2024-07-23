import AppContainer from "@/components/layout/AppContainer";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
