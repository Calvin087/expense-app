import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('Should setup RemoveExpense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should edit the object', () => {
    const action = editExpense('123abc', {note: 'testNote' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'testNote'
        }
    })
})

test('Should setup addExpense action object with Provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
            // Allows me to add in any result and continue, ID is provided by UUID which is dynamic.
        }
    })
})

test('Should setup addExpense action object with Default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }      
    })
})