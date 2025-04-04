import { Card, Image, Stack, Text } from "@chakra-ui/react";

interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  dt: number;
}
interface WeatherDisplayProps {
  weather: WeatherData;
}

export const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  const lastUpdated = new Date(weather.dt * 1000).toLocaleTimeString();

  return (
    <Card
      shadow="lg"
      padding="xl"
      border={"1px solid #e2e8f0"}
      style={{
        maxWidth: 400,
        margin: "20px auto",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      <Stack align="center" spacing="xs">
        <Text size="xl" fontWeight={700} color={"'#333'"}>
          {weather.name}
        </Text>
        <Image
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          width={80}
        />
        <Text size="2xl" fontWeight={600} color={"#007bff"} >
          {weather.main.temp}°C
        </Text>
        <Text size="md" style={{ color: "#555" }}>
          {weather.weather[0].description}
        </Text>
        <Text size="sm" style={{ color: "gray" }}>
          Last updated: {lastUpdated}
        </Text>
      </Stack>
    </Card>
  );
};
