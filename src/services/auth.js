import instance from '../services/instance';


const signup = async (credentials) => {
    try {
        const response = await instance.authInstance.post('/signup',credentials);   
        console.log("response", response.data)
        console.log('Signup Successful');        
    } catch (error) {
        console.error('Signup failed', error)
    }
}

const signin = async (credentials) => {
    try {
        const response = await instance.authInstance.post('/signin',credentials);
        console.log("response", response.data)
        console.log('Signin Successful');   

        localStorage.setItem('loggedInUser',response.data.token);
        return response.data 
    } catch (error) {
        console.error('Signin failed',error)
    }
}

export default {
    signup,
    signin,
}