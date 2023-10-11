import { MessageActionType } from "../action-types/messageTypes";

export const getMessages = (messages) => {
	return (dispatch) => {
		dispatch({
			type: MessageActionType.GET_MESSAGES,
			payload: messages,
		});
	};
};

export const newMessage = (message) => {
	return (dispatch) => {
		dispatch({
			type: MessageActionType.NEW_MESSAGE,
			payload: message,
		});
	};
};