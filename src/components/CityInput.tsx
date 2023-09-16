import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

interface InputLocationProps {
  onChangeLocation: (city: string) => void;
}

const CityInput = ({ onChangeLocation }: InputLocationProps) => {
  const [city, setCity] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(city);
    // if (!city) return;
    onChangeLocation(city);
    setCity("");
  };

  return (
    <form onSubmit={submitForm}>
      <FormControl marginBottom={5}>
        <FormLabel id="city"></FormLabel>
        <Input
          value={city}
          id="city"
          type="text"
          placeholder="Type your city "
          borderColor="blue.400"
          w={300}
          marginRight={5}
          padding="10px"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          id="city"
          colorScheme="blue"
          type="submit"
          marginBottom="4px"
          h="42px"
        >
          Search
        </Button>
      </FormControl>
    </form>
  );
};

export default CityInput;
