import {configureStore} from '@reduxjs/toolkit'
import UserDetails  from './components/user'
import paymentDetails from './components/paymentDetails'

export default configureStore({
    reducer: {
        user : UserDetails,
        payment : paymentDetails

    }
})