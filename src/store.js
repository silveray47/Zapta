import {configureStore} from '@reduxjs/toolkit'
import UserDetails  from './components/user'

export default configureStore({
    reducer: {
        user : UserDetails

    }
})