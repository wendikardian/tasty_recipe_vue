import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            recipes : []
        }
    }, getters : {},
    mutations : {
        setRecipeData(state, payload) {
            state.recipes = payload;
        }
    },
    actions : {
        async getRecipeData({commit}) {
            try { 
                const response = await axios.get("https://vue-js-project-5e9a5-default-rtdb.firebaseio.com/recipes.json");
                const data = response.data;
              
                if (data === null) {
                  console.error("Data is null. Check Firebase database structure or data existence.");
                } else {
                  console.log(data);

                }
        
                const arr = []
                for (let key in data){
                    if(data[key] != null){
                        arr.push({id : key, ...data[key]});
                    }
                }
                commit("setRecipeData", arr)
            } catch( err) {
                console.log(err);
            }
        }
    }
}