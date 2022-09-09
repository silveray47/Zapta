import {configureStore} from '@reduxjs/toolkit'
import UserDetails  from './components/user'
import activUser from './components/activUser'
import paymentDetails from './components/paymentDetails'


export default configureStore({
    reducer: {
        user : UserDetails,
        activUser: activUser,
        payment : paymentDetails
    }
})