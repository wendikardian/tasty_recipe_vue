import {createStore} from "vuex";
import recipe from './recipe';
import auth from "./auth"

export const store = createStore({
    modules: {
        recipe,
        auth
    }
})