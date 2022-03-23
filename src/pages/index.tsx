import "swagger-ui-react/swagger-ui.css";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { createSwaggerSpec } from "next-swagger-doc";
import SwaggerUI from "swagger-ui-react";

const Home = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="">
            <Head>
                <title>JAK API</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-center bg-[#964B00] p-10">
                <h1 className="text-2xl font-bold text-white">JAK API</h1>
            </div>
            <SwaggerUI spec={spec} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const spec: Record<string, any> = createSwaggerSpec({
        definition: {
            info: {
                title: "JAK API",
                version: "0.0.1",
            },
        },
        apiFolder: "src/pages/api",
    });

    return {
        props: {
            spec,
        },
    };
};

export default Home;
