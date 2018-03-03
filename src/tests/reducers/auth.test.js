import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set uid when logging in', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should unset uid when logging out', () => {
    const uid = '123abc';
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});
