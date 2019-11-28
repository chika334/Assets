export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://localhost:3000/components/conn.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message) {
                console.log('Invalid user')
            } else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'Login_USER',
    payload: userObj
})