import Head from "next/head";
import Form from "../Components/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form></Form>
      </main>
    </>
  );
}
