import {
  takeLatest,
  take,
  takeEvery,
  put,
  all,
  fork,
  call,
} from "redux-saga/effects";

import { loadPostsSuccess, loadPostsError, createposterr, deletepostsuccess, deleteposterr, updateposterr } from "./actions";
import * as types from "./actionTypes";
import { Loadpostapi } from "./api";
function* onLoadPostsStartAsync() {
  try {
    const response = yield call(Loadpostapi);
    if (response.status === 200) {
      yield put(loadPostsSuccess(response.data));
      // console.log(response.data)
    }
  } catch (error) {
    yield put(loadPostsError(error.response.data));
  }
}
export function* onLoadPosts() {
  yield takeEvery(types.LOAD_POSTS_START, onLoadPostsStartAsync);
}

function* onCreatePostStartAsync({ payload }) {
  try {
    const data = { ...payload, action: "Create", date: new Date() };
    yield put({ type: types.CREATE_POSTS_START, payload });
    yield put({ type: types.POST_HISTORY_SUCCESS, data });
  } catch (error) {
    yield put(createposterr(error.response.data));
  }
}

export function* onCreatePost() {
  yield takeLatest(types.ADD_POST, onCreatePostStartAsync);
}
function* onDeletePostStartAsync(posts){
  try{
    const data ={...posts,action:"Delete",date:new Date()};
    yield put ({type:types.DELETE_POSTS_START,posts});
    yield put ({type:types.POST_HISTORY_SUCCESS,data});
    yield put(deletepostsuccess(posts));
  }
  catch(error){
      
    yield put(deleteposterr(error.response.data))
  }
}
export function* onDeletepost(){
  while(true){
    const {payload:posts}= yield take(types.DELETE_POSTS_START);
    yield call(onDeletePostStartAsync,posts);
  }
}

function* onUpdatePostStartAsync({ payload }) {
  try {
    console.log("Update",payload);
    const data = { ...payload, action:"Update", date: new Date() };
    yield put({type:types.UPDATE_POSTS_START,payload});
    yield put({ type: types.POST_HISTORY_SUCCESS, data });
  } catch (error) {
    yield put(updateposterr(error.response.data));
  }
}

export function* onUpdatepost() {
  yield takeLatest(types.UPDATE_POST, onUpdatePostStartAsync);
}
const postSagas = [fork(onLoadPosts),fork(onCreatePost),fork(onDeletepost),fork(onUpdatepost),];

export default function* rootSaga() {
  // yield all([...postSagas]);
  yield all(postSagas);
}
