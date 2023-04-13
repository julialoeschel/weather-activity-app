import Head from "next/head";
import Form from "../Components/Form";
import useLocalStorageState from "use-local-storage-state";
import List from "../Components/List";

export default function Home() {
  const [todos, setTodos] = useLocalStorageState<
    {
      [k: string]: FormDataEntryValue;
    }[]
  >("todos", {
    defaultValue: [],
  });
  const goodWeather = false;

  function handleAdd(activity: { [k: string]: FormDataEntryValue }) {
    setTodos([activity, ...todos]);
  }

  const goodWeatherActivities = todos.filter((todo) => todo.weather === "on");
  const badWeatherActivities = todos.filter((todo) => todo.weather !== "on");

  return (
    <>
      <Head>
        <title>WeatherApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <List
          todos={goodWeather ? goodWeatherActivities : badWeatherActivities}
        ></List>
        <Form onAddActivity={handleAdd}></Form>
      </main>
    </>
  );
}
