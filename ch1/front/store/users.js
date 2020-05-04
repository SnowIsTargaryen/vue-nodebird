export const state = () => ({
    me: null,
});

//동기적 작업
export const mutations = {
    setMe(state, payload){
        state.me = payload;
    },
};

//비동기적 작업
export const actions = {
    signUp({ commit , state}, payload){
        //console.log("context: ",context);
        commit('setMe', payload);
    },
    logIn({ commit }, payload){
        commit('setMe', payload);
    },
    logOut({ commit }, payload){
        commit('setMe', null);
    },
};
