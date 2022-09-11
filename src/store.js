import {configureStore} from '@reduxjs/toolkit'
import paymentDetails from './components/paymentDetails'
import usersSlice from './components/usersSlice'


export default configureStore({
    reducer: {
        payment : paymentDetails,
        users : usersSlice
    }
})