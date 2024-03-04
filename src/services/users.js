import axios from 'axios';
import instance from '../services/instance';

const userToken = localStorage.getItem('loggedInUser');

const getProfile = async ({userId }) => {
    try {
        console.log(userToken, "userToken")
        const config = {
            headers: { authorization: userToken }
        }
        const response = await instance.protectedInstance.get('/profile', config)
        // const response = await axios.get('http://localhost:7000/api/profile', config)
        console.log(response.data,"responseData")
        return response.data
    } catch (error) {
        console.error('Fetching user profile failed', error)
    }
}

const editProfile = async ({ name, email }) => {
    try {
        const config = {
            headers: { authorization: userToken },
        }
        const response = await instance.protectedInstance.put('/editProfile/:id', { name, email }, config);       
        return response.data
       
    } catch (error) {
        console.error('Updating user profile failed', error)
    }
}

const deleteProfile = async () => {
    try {
        const config = {
            headers: { authorization: userToken }
        }
        const response = await instance.protectedInstance.delete('/deleteProfile/:id', config)
    } catch (error) {
        console.error('Deleting user profile failed', error)
    }
}

export default {
    getProfile,
    editProfile,
    deleteProfile
}