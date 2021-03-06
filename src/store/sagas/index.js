import { all, takeLatest } from 'redux-saga/effects';

import { PodcastTypes } from '~/store/ducks/podcasts';
import { PlayerTypes } from '~/store/ducks/player';
import { load } from './podcasts';
import {
  init, setPodcast, play, pause, reset, prev, next,
} from './player';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(PodcastTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.RESET, reset),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.NEXT, next),
  ]);
}
