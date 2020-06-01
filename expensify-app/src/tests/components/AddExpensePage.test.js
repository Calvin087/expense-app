import React from 'react'
import { shallow } from 'enzyme'
import AddExpensePage from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
    onSubmit = just.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should render addExpense page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('expenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenCalledWith(expenses[1])
})