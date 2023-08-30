import { configureStore } from '@reduxjs/toolkit'
import AddSlice from './AddSlice'
export default configureStore({
    reducer: {
        addTodo:AddSlice
    }

})