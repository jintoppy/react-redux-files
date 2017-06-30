export const onEmployeeListReceived = (employees) => {
    return {
                type: 'EMPLOYEE_LIST_RECEIVED',
                payload: employees
            };
};

export const onEmployeeListRequest = () => {
    return {
                type: 'EMPLOYEE_LIST_REQUESTED'
            };
};

export const getEmployees = () => {
    return (dispatch) => {
        dispatch(onEmployeeListRequest());
        fetch('http://5955445c2374e400111e47e7.mockapi.io/api/users')
            .then(res => res.json())
            .then(res => {
                dispatch(onEmployeeListReceived(res));
            });
    };
};

export const addUser = (employee) => {
    return (dispatch) => {
        fetch('http://5955445c2374e400111e47e7.mockapi.io/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(employee)
        })
        .then(dispatch(getEmployees()))
        .catch(() => {
            
        });
    };
};