//function returns true or false
module.exports = {
    user_edit: (logged_in, user_id) => {
        if ( logged_in === user_id) {
            return true
        } else 
        return false
    }
}