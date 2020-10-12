import filterReducer from '../reducers/filterReducer';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual('All');
  });

  it('should handle CHANGE_FILTER', () => {
    const jobType = 'Contract';
    expect(
      filterReducer([], {
        type: 'CHANGE_FILTER',
        jobType,
      }),
    ).toEqual('Contract');
  });
});
