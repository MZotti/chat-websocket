import { UserActionType } from "../action-types/userTypes";

const initialState = {
	id: 0,
	name: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UserActionType.SET_USER:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
