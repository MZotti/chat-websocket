import React from 'react'
import { Box, Flex, SlideFade, Text } from '@chakra-ui/react';
import { useSelector } from "react-redux";

const MessageBox = ({ message, sender }) => {
    const user = useSelector(({ user }) => user);
    console.log(user);
    const align = sender.id === user.id ? "start" : "end";
    const fontColor = sender.id === user.id ? "white" : "black";
    const backgroundColor = sender.id === user.id ? "gray.900" : "white";
    const borderColor = sender.id === user.id ? "black" : "black";

    return (
        <Flex
            flexDirection="column"
            alignItems={align}
            mb="12px"
        >
            <Text fontSize="16px" fontWeight="bold" mb="4px">{sender.name} disse:</Text>
            <SlideFade 
                in={true} 
                offsetX='20px'
                maxW="45%"
            >
                <Box
                    borderRadius="8px"
                    backgroundColor={backgroundColor}
                    p="8px"
                    border={`1px solid ${borderColor}`}
                >
                    <Text fontSize="16px" color={fontColor}>
                        {message}
                    </Text>
                </Box>
            </SlideFade>
        </Flex>
    )
}

export default MessageBox