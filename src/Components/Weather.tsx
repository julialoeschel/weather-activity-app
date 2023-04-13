import styled from "styled-components";

type WeatherProps = {
  weather: {
    location: string;
    temperature: number;
    condition: string;
    isGoodWeather: boolean;
  };
};

export default function Weather({ weather }: WeatherProps) {
  console.log(weather);
  return (
    <section>
      <p>{weather.condition}</p>
      <p>{weather.temperature}</p>
      {weather.isGoodWeather ? (
        <p>AWESOME! Go Outside!</p>
      ) : (
        <p>Bad Wetehr! here are some options</p>
      )}
    </section>
  );
}
