import { expect } from 'chai';
import * as ActionCreators from './homePageActions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
  const appState = {
    roles: [{ id: 1, title: 'Front-End Developer' }, { id: 1, title: 'Web-API Developer' }],
    modules: [{ id: 1, title: 'HTML 5 Beginner' }],
    currentModule: {
      id: 1,
      title: 'HTML 5 Beginner',
      roleIds: [1],
      units: [
        {
          id: 1,
          title: 'Overview',
          pictureUrl: '',
          shortInfo: 'Overview HTML5',
          example: '',
          tests: [
            {
              question: { text: '', score: 0 },
              answers: [{ text: '', isCorrect: false }],
            },
          ],
        },
      ],
    },
  };

  it('should create an action to get Home page Info', () => {
    const expected = {
      type: ActionTypes.GET_HOME_PAGE_INFO_SUCCESS,
      homePageInfo: appState,
    };

    expect(ActionCreators.getHomePageInfoSuccess(appState)).to.deep.equal(expected);
  });
});
