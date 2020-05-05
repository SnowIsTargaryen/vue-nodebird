export const state = () => ({
    me: null,

    followerList: [{
        id:1,
        nickname: 'sjcho',
    },{
        id:2,
        nickname: '네로'
    },{
        id:3,
        nickname: '히어로'
    },
    ],

    followingList:  [{
        id:1,
        nickname: 'sjcho',
    },{
        id:2,
        nickname: '네로'
    },{
        id:3,
        nickname: '히어로'
    },
    ]
});

//동기적 작업
export const mutations = {
    setMe(state, payload){
        console.log('user payload',payload);
        state.me = payload;
    },
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname;
    },
    addFollowing(state, payload) {
        state.followingList.push(payload);
    },
    addFollower(state, payload){
        state.followerList.push(payload);
    },
    removeFollowing(state, payload) {
        const index = state.followingList.findIndex( v => v.id ===payload.id);
        state.followingList.splice(index,1);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex( v => v.id ===payload.id);
        state.followerList.splice(index,1);
    }
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
    changeNickname({commit},payload){
        commit('changeNickname',payload);
    },
    addFollowing({commit},payload){
        commit('addFollowing',payload)
    },
    addFollower({commit},payload){
        commit('addFollower',payload)
    },
    removeFollowing({commit},payload){
        commit('removeFollowing',payload)
    },
    removeFollower({commit},payload){
        commit('removeFollower',payload);
    },
};
