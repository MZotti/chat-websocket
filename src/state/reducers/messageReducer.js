import { MessageActionType } from "../action-types/messageTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case MessageActionType.GET_MESSAGES:
			return action.payload;
		case MessageActionType.NEW_MESSAGE:
			return [
				...state,
				action.payload
			];
		default:
			return state;
	}
};

export default reducer;
