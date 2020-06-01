import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses' 

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by ID if ID is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1x'
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit and expense', () => {
    const amount = 1220000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state[1].amount).toEqual(amount)
})

test('should not edit an expense if ID not found', () => {
    const amount = 4870000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1x',
        updates: {
            amount
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

