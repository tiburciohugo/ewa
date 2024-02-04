import { SessionProvider } from "next-auth/react";
import React from "react";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: {
    Component: React.ComponentType<any>;
    pageProps: any;
}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
