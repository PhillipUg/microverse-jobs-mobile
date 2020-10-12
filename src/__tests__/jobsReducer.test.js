import jobsReducer from '../reducers/jobsReducer';

describe('jobs reducer', () => {
  it('should return the initial state', () => {
    expect(jobsReducer(undefined, {})).toEqual(
      {
        jobs: [],
        loading: false,
        error: null,
      },
    );
  });

  it('should handle FETCH_JOBS_BEGIN', () => {
    expect(
      jobsReducer([], {
        type: 'FETCH_JOBS_BEGIN',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle FETCH_JOBS_SUCCESS', () => {
    expect(
      jobsReducer([], {
        type: 'FETCH_JOBS_SUCCESS',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
