import {
  takeLatest,
  take,
  takeEvery,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import { loadPostsSuccess, loadPostsError, createposterr } from "./actions";
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

const postSagas = [fork(onLoadPosts), fork(onCreatePost)];

export default function* rootSaga() {
  // yield all([...postSagas]);
  yield all(postSagas);
}
