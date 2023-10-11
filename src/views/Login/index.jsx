import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { userCreator } from "../../state";
import React, { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(userCreator, dispatch);
    const [name, setName] = useState('')

    const handleLogin = () => {
        setUser({
            id: Math.floor(Math.random() * 1000000000),
            name: name,
        })
    }

    return (
        <Flex
            w="full"
            h="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                w="200px"
                h="200px"
                mx="auto"
                my="80px"
                p="20px"
                border="1px solid black"
            >
                <Input
                    w="full"
                    h="40px"
                    placeholder="Insira seu nome"
                    border="1px solid black"
                    mb="12px"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <Button colorScheme="blue" onClick={handleLogin}>
                    Entrar
                </Button>
            </Box>
        </Flex>
    );
}

export default Login