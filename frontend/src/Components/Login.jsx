import React, { useState } from "react";
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    console.log("heelo");
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    let res = await axios.post("http://localhost:8080/users/login", data);
    console.log(res.data.token);
  };
  return (
    <Box w="20%" mx="auto" mt={"100px"} border={"3px solid blue"} borderRadius={"25px"} padding={"20px"}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} alignItems={"center"} textAlign={"left"} w={"100%"}>
          <FormControl>
            <FormLabel fontSize={"10px"}>Email </FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText fontSize={"0.7em"}>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"10px"}>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormHelperText fontSize={"0.7em"}>Your Password is Safe</FormHelperText>
          </FormControl>
          <Button colorScheme="blue" size="xs" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
