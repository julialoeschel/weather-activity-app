import Head from "next/head";
import Form from "../Components/Form";
import useLocalStorageState from "use-local-storage-state";
import List from "../Components/List";
import Weather from "../Components/Weather";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useLocalStorageState<
    {
      [k: string]: FormDataEntryValue;
    }[]
  >("todos", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState<{
    location: string;
    temperature: number;
    condition: string;
    isGoodWeather: boolean;
  }>({
    location: "Europe",
    temperature: 18,
    condition: "☁️",
    isGoodWeather: true,
  });

  useEffect(() => {
    async function getWether() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }

    const timer = setInterval(() => {
      getWether();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleAdd(activity: { [k: string]: FormDataEntryValue }) {
    setTodos([activity, ...todos]);
  }

  const goodWeatherActivities = todos.filter((todo) => todo.weather === "on");
  const badWeatherActivities = todos.filter((todo) => todo.weather !== "on");

  function handleDelete(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <Head>
        <title>WeatherApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Weather weather={weather}></Weather>
        <List
          todos={
            weather.isGoodWeather ? goodWeatherActivities : badWeatherActivities
          }
          onDelete={handleDelete}
        ></List>
        <Form onAddActivity={handleAdd}></Form>
      </main>
    </>
  );
}
