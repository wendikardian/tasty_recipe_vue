import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      recipes: [],
      recipeDetail: {},
    };
  },
  getters: {},
  mutations: {
    setRecipeData(state, payload) {
      state.recipes = payload;
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload;
    },
  },
  actions: {
    async getRecipeData({ commit }) {
      try {
        const response = await axios.get(
          "https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes.json"
        );
        const data = response.data;

        if (data === null) {
          console.error(
            "Data is null. Check Firebase database structure or data existence."
          );
        } else {
          console.log(data);
        }

        const arr = [];
        for (let key in data) {
          if (data[key] != null) {
            arr.push({ id: key, ...data[key] });
          }
        }
        commit("setRecipeData", arr);
      } catch (err) {
        console.log(err);
      }
    },
    async getRecipeDetail({ commit }, payload) {
      try {
        const { data } =
          await axios.get(`https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes/${payload}.json`);
          console.log(data);
        commit("setRecipeDetail", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
