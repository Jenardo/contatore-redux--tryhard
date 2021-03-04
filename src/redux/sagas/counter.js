import { PLUS_ONE, MINUS_ONE } from '../actions/actions';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { act } from 'react-dom/test-utils';
import { take } from 'redux-saga/effects';

function* plusOne(action) {
  try {
    console.log('PlusOneSagaStart', action);
    // yield delay(200);
    yield put({ type: 'PLUS_ONE.SUCCESS' });
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
    console.log('ERROR: ', e);
  } finally {
    console.log('Plus one saga ended');
  }
}

function* minusOne(action) {
  try {
    console.log('MinusOneSagaStart', action);
    // yield delay(200);
    yield put({ type: 'MINUS_ONE.SUCCESS' });
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
    console.log('ERROR: ', e);
  } finally {
    console.log('Minus one saga ended');
  }
}

function* changeV(action) {
  try {
    console.log('Change value saga: ', action);
    // yield delay(2000);
    yield put({ type: 'changeValue.SUCCESS', value: action.value });
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
    console.log('ERROR: ', e);
  } finally {
    console.log('Change Value saga close');
  }
}

function* multy(action) {
  try {
    console.log('Multiply value: ', action);
    yield put({ type: 'MULTY_VAL.SUCCESS', ...action });
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
    console.log('ERROR: ', e);
  } finally {
    console.log('Change Value saga close');
  }
}

//Definisco il watcher
function* counterWatch() {
  yield takeLatest('changeValue', changeV);
  yield takeLatest(PLUS_ONE, plusOne);
  yield takeLatest(MINUS_ONE, minusOne);
  yield takeLatest('multyVal', multy);
}

export default counterWatch;
