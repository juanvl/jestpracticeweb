import { runSaga } from 'redux-saga';
import { getTechs } from '~/store/modules/techs/sagas';
import { getTechsSuccess } from '~/store/modules/techs/actions';

describe('Tech sagas', () => {
  it('getTechs', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']));
  });
});
