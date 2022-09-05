import createDataContext from "./createDataContext";

const AuthReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return
    ({ email, password }) => {

        //doThings
    };

};

const signin = (dispatch) => {
    return
    ({ email, password }) => {

        //doThings
    };

};

const signout = (dispatch) => {
    return
    () => {

        //doThings
    };

};



export const { Provider, Context } = createDataContext(
    AuthReducer,
    { signup, signin, signout },
    { isSignedIn: false }
);