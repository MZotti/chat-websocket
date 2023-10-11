import { Box, Flex, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import MessageBox from './MessageBox';
import { useSelector } from "react-redux";
import { SEND_MESSAGE } from '../../services/chat';

const Chat = () => {
    const [message, setMessage] = useState('');
	const user = useSelector(({ user }) => user);
	const messages = useSelector(({ message }) => message);

    const handleSend = () => {
        try {
            const response = SEND_MESSAGE({
                id: user.id,
                name: user.name,
                message: message
            })
            setMessage('');
        } catch(error) {
            console.log(error)
        }
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
                justifyContent="start"
                alignItems="center"
                w="800px"
                h="800px"
                mx="auto"
                my="80px"
                p="20px"
                border="1px solid black"
            >
                <Flex 
                    w="full" 
                    h="full"
                    maxH="800px"
                    overflow="auto"
                    pb="12px" 
                    flexDirection="column-reverse"
                >
                    {
                        messages.sort((a, b) => a.sentAt > b.sentAt ? -1 : 1).map(msg => <MessageBox sender={{name: msg.name, id: msg.id}} message={msg.message} />)
                    }
                </Flex>
                <Box
                    w="full"
                    mt="auto"
                >
                    <Input
                        w="full"
                        h="40px"
                        placeholder="Insira uma mensagem"
                        border="1px solid black"
                        value={message}
                        onChange={({ target }) => setMessage(target.value)}
                    />
                    <Button 
                        onClick={handleSend}
                        colorScheme="blue"
                        size="md"
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
}

export default Chat