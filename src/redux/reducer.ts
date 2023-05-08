import { Action } from "./action";
import { ActionType } from "./action-types";
import { AppState } from "./app-state";

export function reduce(oldAppState: AppState = new AppState(), action: Action): AppState {

    const newAppState = { ...oldAppState };

    switch (action.type) {
        case ActionType.saveUserName:
            newAppState.userName = action.payload.userName;
            break;
        case ActionType.LoginData:
            newAppState.loginData = action.payload.loginData;
            break;
        case ActionType.SendSearchText:
            newAppState.sendSearchText = action.payload.subText;
            break;
    }

    return newAppState;
}