import { VStack, Text, Box } from "@chakra-ui/react";
import WeatherInfo, { LocationInfo } from "./components/WeatherInfo";
import CityInput from "./components/CityInput";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState<LocationInfo>({
    address: "City",
    currentConditions: {
      temp: 0,
      windspeed: 0,
      sunrise: "00:00:00",
      conditions: "Condition",
    },
  });
  const [location, setLocation] = useState(" ");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (location !== " ") {
      axios
        .get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=4SSX59UJBMBM5Z5HMGWTD9MMX&contentType=json`
        )
        .then((response) => {
          console.log(response.data);
          setInfo(response.data);
        })
        .catch((error) => {
          setErrors(error.response.data);
          if (location === "") return console.log(error.response.data);
        });
    }
  }, [location]);

  const changeLocation = (city: string) => {
    setLocation(city);
    console.log(location);
  };

  return (
    <>
      <VStack>
        <WeatherInfo info={info} />
        {errors && (
          <Box
            border="2px"
            w="50vh"
            h="55px"
            bg="red.100"
            borderRadius={7}
            borderColor="red.600"
          >
            <Text textAlign="center">{errors}</Text>
          </Box>
        )}
        <CityInput onChangeLocation={changeLocation} />
      </VStack>
    </>
  );
}
export default App;
