import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache, useTheme } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";

// Configure Amplify
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

// Configure Amplify Auth
import { Authenticator, View, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

// Custom Form Fields for Cognito Signin + Signup Authenticator
const FORM_FIELDS = {
    signUp: {
        name: {
            label: "Enter your name",
            placeholder: "John Doe",
            isRequired: true,
        },
        phone_number: {
            dialCodeList: ["+1"],
            isRequired: true,
        },
    },
};

// Custom React JSX Components for Cognito Signin + Signup Authenticator
const components = {
    Header() {
        // TODO: Use theme from next theme provider & pass it in View
        // const { tokens } = useTheme();

        return (
            <View textAlign="center">
                <Image
                    alt="Amplify logo"
                    src="https://shatez.com/images/shatez_logo.png?d23f6ca78c799c7192488aef046309bd"
                />
            </View>
        );
    },
    Footer() {
        // TODO: Use theme from next theme provider & pass it in View
        // const { tokens } = useTheme();

        return (
            <View textAlign="center">
                <Text>&copy; All Rights Reserved</Text>
            </View>
        );
    },
};
export function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Shatez</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Authenticator formFields={FORM_FIELDS} components={components}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.*/}
                    <CssBaseline />
                    <Component {...pageProps} />
                </Authenticator>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
