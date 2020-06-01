import uuid from 'uuid'

export const addExpense = ( // This is being added each time, i confuse expenses with expense, expenses no longer exists.
    {
        description = '', // Destructuring user inputs and setting defaults
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({ // Then attach them to the object
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})