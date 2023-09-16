import { VStack, Text, Box, Grid, GridItem } from "@chakra-ui/react";

export interface LocationInfo {
  address: string;
  currentConditions: {
    temp: number;
    windspeed: number;
    sunrise: string;
    conditions: string;
  };
}

interface InfoProps {
  info: LocationInfo;
}

const WeatherInfo = ({ info }: InfoProps) => {
  return (
    <VStack h="70vh" w="100vh">
      <Box
        border="2px"
        borderRadius={7}
        borderColor="purple.200"
        bg="purple.100"
        w="70vh"
        marginY={7}
      >
        <Text textAlign="center" fontSize="5xl" marginY="30px">
          {info.address}
        </Text>
      </Box>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={5}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            border="2px"
            borderRadius={7}
            borderColor="blue.200"
            bg="blue.100"
            w="30vh"
          >
            <Text textAlign="center" fontSize="xl" marginY="30px">
              Temperature: {info.currentConditions.temp}
            </Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            border="2px"
            borderRadius={7}
            borderColor="teal.200"
            bg="teal.100"
            w="30vh"
          >
            <Text textAlign="center" fontSize="xl" marginY="30px">
              Windspeed: {info.currentConditions.windspeed}
            </Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            border="2px"
            borderRadius={7}
            borderColor="orange.200"
            bg="orange.100"
            w="30vh"
          >
            <Text textAlign="center" fontSize="xl" marginY="30px">
              Sunrise: {info.currentConditions.sunrise}
            </Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            border="2px"
            borderRadius={7}
            borderColor="red.200"
            bg="red.100"
            w="30vh"
          >
            <Text textAlign="center" fontSize="xl" marginY="30px">
              {info.currentConditions.conditions}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default WeatherInfo;
