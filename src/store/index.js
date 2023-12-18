import {createStore} from "vuex";
import recipe from './recipe';

export const store = createStore({
    modules: {
        recipe
    }
})