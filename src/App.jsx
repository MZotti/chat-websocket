import { ChakraProvider } from '@chakra-ui/react';
import ChatProvider from './providers/ChatProvider';
import { useSelector } from "react-redux";
import Chat from './views/Chat';
import Login from './views/Login';

function App() {
	const user = useSelector(({ user }) => user);
	
	return (
		<ChakraProvider>
			<ChatProvider>
				{
					!user.name ? <Login />
					: <Chat />
				}
			</ChatProvider>
		</ChakraProvider>
	);
}

export default App;
