import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '~/services/api';

import { getTechs } from '~/store/modules/techs/sagas';
import {
  getTechsSuccess,
  getTechsFailure,
} from '~/store/modules/techs/actions';

const apiMock = new MockAdapter(api);

describe('Tech sagas', () => {
  it('should be able to get Techs', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('techs').reply(200, ['Node.js']);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']));
  });

  it('should fail to get Techs if api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('techs').reply(500);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure());
  });
});
