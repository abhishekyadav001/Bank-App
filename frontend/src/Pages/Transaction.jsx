import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { depositAmount } from "../Redux/Trasaction/action";

function Transaction(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [amount, setAmount] = useState(0);
  const initialRef = React.useRef(null);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAmount({ [name]: value });
  };
  const handleEvent = (e) => {
    dispatch(depositAmount({ amount, type: "Deposit" }))
      .then((res) => {
        toast({
          title: "Payment Successfull",
          description: "You can check for confirmation your transaction history",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box width={"70%"}>
        <VStack align={"flex-start"}>
          <Heading>Transaction Page</Heading>
          <Text fontSize="2xl">Amount</Text>
        </VStack>
        <HStack>
          <Button colorScheme="blue" size="md" onClick={onOpen}>
            Deposit
          </Button>
          <Button colorScheme="red" size="md">
            Withdraw
          </Button>
        </HStack>
      </Box>
      <Box>
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Deposit your Money</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input ref={initialRef} name="amount" onChange={handleInput} placeholder="Enter amount here" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={handleEvent} mr={3}>
                Deposit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default Transaction;
