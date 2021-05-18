class UserProfileAction {

    changeDefaultPage(newDefaultPage) {
        return {
            type : "userprofile/change_default_page",
            payload : newDefaultPage
        };
    }
}

export default new UserProfileAction();