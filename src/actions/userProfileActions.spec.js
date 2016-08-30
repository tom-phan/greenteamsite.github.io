import { expect } from 'chai';
import * as ActionCreators from './userProfileActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    nickname: 'Mark',
    level: '1',
    score: '0',
    roles: ['Front-end', 'Back-end'],
  };

  it('should create an action to get user Profile', () => {
    const expected = {
      type: ActionTypes.GET_USER_PROFILE_SUCCESS,
      userProfile: appState,
    };

    expect(ActionCreators.getUserProfileSuccess(appState)).to.deep.equal(expected);
  });
});
