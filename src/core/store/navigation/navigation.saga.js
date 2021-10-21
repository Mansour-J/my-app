import { call, put, putResolve, takeLatest } from 'redux-saga/effects'
import {fetchNavigationFailed, fetchNavigationList, fetchNavigationSuccess} from './navigation.slice'
import {fetchData} from './../../../assets/data/data'

function* fetchNavigation() {
    try {
        const navigationData = yield fetchData()
        yield putResolve(fetchNavigationSuccess(navigationData))
    } catch (e) {
        yield putResolve(fetchNavigationFailed())
    }
}

function* watchFetchNavigation() {
    yield takeLatest(fetchNavigationList().type, fetchNavigation);
}

export default watchFetchNavigation;
