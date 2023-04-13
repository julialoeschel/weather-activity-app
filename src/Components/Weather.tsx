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
  return (
    <Section>
      <p>{weather.condition}</p>
      <p>{weather.temperature} °C</p>
      {weather.isGoodWeather ? (
        <Introduction>AWESOME! Go Outside!</Introduction>
      ) : (
        <Introduction>Bad Weatehr! here are some options:</Introduction>
      )}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  p {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;

const Introduction = styled.p`
  grid-column: 1 / 3;
`;
