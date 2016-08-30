import { expect } from 'chai';
import * as ActionCreators from './userProfileActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    id: 3,
    title: 'test',
    subtitle: 'test',
    pictureUrl: 'test',
    shortInfo: 'test',
    examples: ['test'],
  };

  it('should create an action to get unit', () => {
    const expected = {
      type: ActionTypes.GET_UNIT_PAGE_INFO_SUCCESS,
      userProfile: appState,
    };

    expect(ActionCreators.getUnitPageSuccess(appState)).to.deep.equal(expected);
  });
});
