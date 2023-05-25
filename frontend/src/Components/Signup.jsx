import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const details = {
      // username: username,
      // email: email,
      // password: password,
      username,
      email,
      password,
    };
    console.log(details);
    const { data } = await axios.post("http://localhost:8080/users/signup", details);
    console.log(data);
  };
  return (
    <Box
      maxWidth="400px"
      mx="auto"
      mt={"30px"}
      w="20%"
      border={"3px solid blue"}
      borderRadius={"25px"}
      padding={"20px"}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} alignItems={"center"}>
          <FormControl>
            <FormLabel fontSize={"10px"}>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"10px"}>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"10px"}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button
            borderColor={"1px solid blue.500"}
            bgColor={"blue.300"}
            borderRadius={"10px"}
            w={"56px"}
            type="submit"
          >
            Signup
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
