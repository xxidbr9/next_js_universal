import { Provider } from "react-redux";
import "../styles/globals.css";
import withRedux from "../utils/hooks/withRedux";
function MyApp({ Component, pageProps, reduxStore }) {
    return (
        <Provider store={reduxStore}>
            <Component {...pageProps} />
        </Provider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
};

export default withRedux(MyApp);
