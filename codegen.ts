import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://127.0.0.1:8000/graphql",
    documents: ["src/**/*.tsx", "!src/gql/**/*"],
    ignoreNoDocuments: true,
    generates: {
        "src/gql/": {
            preset: "client",
            plugins: [],
        },
        "./graphql.schema.json": {
            plugins: ["introspection"],
        },
    },
};

export default config;
