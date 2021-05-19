const initialStateForDistance = {
    
    input : {
        scale : "m",
        value : 0
    },
    output : {
        scale: "km",
        value : 0
    }
};

const initialStateForTemperature = {

    input : {
        scale : "c",
        value : 0
    },
    output : {
        scale : "f",
        value : 0
    }
};

const initialStateForUserProfile = {
    defaultPage : "distance",
    nightMode : false
};

export {
    initialStateForDistance as initialStateForDistance,
    initialStateForTemperature as initialStateForTemperature,
    initialStateForUserProfile as initialStateForUserProfile
};