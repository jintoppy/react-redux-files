const initialState = {
    employees: [],
    selectedEmployee: null
};

const employee = (state = initialState, action) => {
    switch(action.type){
        case 'EMPLOYEE_LIST_RECEIVED':
            state = Object.assign({}, state, {
                employees: action.payload
            });
        break;
    }
    return state;
};

export default employee;