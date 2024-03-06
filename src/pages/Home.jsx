import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import WaterMark from "../components/WaterMark";

const Home = () => {
  return (
    <Box>
      <Box
        px={{ lg: 200, md: 150, sm: 10, base: 10 }}
        py={{ lg: 10, md: 10, sm: 5, base: 5 }}
      >
        <Header />
        <Hero />
      </Box>
    </Box>
  );
};

export default Home;
