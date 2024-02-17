import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { createTheme, MantineProvider } from "@mantine/core";
import client from "./graphql.ts";
import "@mantine/core/styles.css";

const theme = createTheme({
    /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <MantineProvider theme={theme}>
                <App />
            </MantineProvider>
        </ApolloProvider>
    </React.StrictMode>
);
