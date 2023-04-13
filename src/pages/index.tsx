import Head from "next/head";
import Form from "../Components/Form";
import useLocalStorageState from "use-local-storage-state";

export default function Home() {
  const [todos, setTodos] = useLocalStorageState<
    {
      [k: string]: FormDataEntryValue;
    }[]
  >("todos", {
    defaultValue: [],
  });

  function handleAdd(activity: { [k: string]: FormDataEntryValue }) {
    setTodos([activity, ...todos]);
  }
  console.log(todos);

  return (
    <>
      <Head>
        <title>WeatherApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form onAddActivity={handleAdd}></Form>
      </main>
    </>
  );
}
