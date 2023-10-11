import { UserActionType } from "../action-types/userTypes";

export const setUser = (user) => {
	return (dispatch) => {
		dispatch({
			type: UserActionType.SET_USER,
			payload: user,
		});
	};
};