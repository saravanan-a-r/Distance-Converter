import { initialStateForUserProfile } from "../store/initial-state";

const userProfileReducer = (state = initialStateForUserProfile, action) => {

    switch(action.type) {

        case "userprofile/change_default_page" : 
            state = {
                ...state,
                defaultPage : action.payload
            };
        break;
    }

    return state;
};

export default userProfileReducer;