import {expect} from 'chai';
import employee from '../../app/reducers/employee';

describe('Employee Reducer', () => {
    it('should have a initial state as employees array', () => {
        const result = employee(undefined, {});
        expect(result).to.deep.equal({
            employees: [],
            selectedEmployee: null
        });
    });

});