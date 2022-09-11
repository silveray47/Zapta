import {configureStore} from '@reduxjs/toolkit'
import UserDetails  from './components/user'
import paymentDetails from './components/paymentDetails'
import usersSlice from './components/usersSlice'

export default configureStore({
    reducer: {
        user : UserDetails,
        payment : paymentDetails,
        users : usersSlice

    }
})