// import Layout from '~/components/Layout'
import { useMachine } from "@xstate/react";
import MainLayout from "~/components/Layout";
import { cartMachine } from "../lib/services/checkout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [current, send] = useMachine(cartMachine);
  const addItem = send;
  const Layout = Component.Layout || DefaultLayout;
  let props = {
    ...pageProps,
    addItem,
    current,
  };
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}

      <div className="">
        <MainLayout>{children} </MainLayout>
      </div>
    </div>
  );
};

export default MyApp;
