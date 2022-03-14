import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>JAK API</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-center bg-[#964B00] p-10">
                <h1 className="text-2xl font-bold text-white">JAK API</h1>
            </div>
            <div className=""></div>
        </div>
    );
};

export default Home;
