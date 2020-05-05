export const state = () => ({
    mainPosts: [],
});

export const mutations ={
    addMainPost(state,payload){
       state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload){
       const index = state.mainPosts.findIndex( v => v.id ===payload.id);
       state.mainPosts.splice(index, 1);
    },
    addComment(state, payload) {
        const index = state.mainPosts.findIndex( v => v.id === payload.postId);
        console.log('state',state);
        state.mainPosts[index].Comments.unshift(payload);
    }

};

export const actions ={
    add({commit},payload){
        //index store를 불러올때 사용
        //commit('addMainPost',payload,{root:true});
        console.log('post add payload',payload);

        commit('addMainPost',payload);
    },
    remove({commit}, payload){
        commit('removeMainPost',payload);
    },
    addComment({commit},payload){
        commit('addComment',payload)
    }

};
