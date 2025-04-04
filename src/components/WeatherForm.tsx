import { Button, Flex, Input, Stack } from "@chakra-ui/react";

import { useState } from "react";

interface WeatherFormProps {
  onSubmit: (city: string) => void;
}
export const WeatherForm = ({ onSubmit }: WeatherFormProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSubmit(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "100%", maxWidth: 400, margin: "auto" }}
    >
      <Stack align="center" spacing="md">
        <Flex gap={"10px"}>
          <Input
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            size="md"
          />
          <Button
            type="submit"
            size="md"
            w={"100%"}
            maxW={"300px"}
            border={"none"}
            outline={"none"}
            color={"white"}
            background={"linear-gradient(135deg, #007bff, #6610f2)"}
            _hover={{background: "linear-gradient(135deg, #0056b3, #520dc2)"}}
          >
            Get Weather
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default WeatherForm;
