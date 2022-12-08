import * as types from './actionTypes';

export const loadPostsStart=()=>({
    type:types.LOAD_POSTS_START,
});

export const loadPostsSuccess=(posts)=>({
    type:types.LOAD_POSTS_SUCCESS,
    payload:posts
});
export const loadPostsError=()=>({
    type:types.LOAD_POSTS_ERROR,
});

export const createpoststart=(post)=>({
    type:types.CREATE_POSTS_START,
    payload:post,
})
export const addpost=(post)=>({
    type:types.ADD_POST,
    payload:post
})

export const createpostsuccess=()=>({
    type:types.CREATE_POSTS_SUCCESS
})
export const createposterr=(error)=>({
    type:types.CREATE_POSTS_ERROR,
    payload:error
})


export const updatepoststart=(payload)=>({
    type:types.UPDATE_POSTS_START,
    payload
})
export const updatepost =(payload)=>({
    type:types.UPDATE_POST,
    payload
})
 export const updatepostsucces=()=>({
    type:types.UPDATE_POSTS_SUCCESS,

 })
 export const updateposterr=(error)=>({
    type:types.UPDATE_POSTS_ERROR,
    payload:error,
 })
 export const postHistoryStart=()=>({
    type:types.POST_HISTORY_START
 })
 export const postHistorySuccess=(historyposts)=>({
    type:types.LOAD_POSTS_SUCCESS,
    payload:historyposts
 })