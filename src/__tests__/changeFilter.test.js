import { changeFilter } from '../actions/index';

describe('actions', () => {
  it('should create an action to change filter', () => {
    const jobType = 'Full Time';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      jobType,
    };
    expect(changeFilter(jobType)).toEqual(expectedAction);
  });
});
