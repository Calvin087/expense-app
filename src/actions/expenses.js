import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense) => ({ // Then attach them to the object
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => { // dispatch object only works because of THUNK
        const uid = getState().auth.uid
        const {
                description = '', // Destructuring user inputs and setting defaults
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData
        
        const expense = { description, note, amount, createdAt } // setting defaults for object
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => { // pushing to database
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => { // dispatch gets passed from redux lib
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => { // return promise, then remove from database
            dispatch(removeExpense({ id })) // once done, remove from redux STORE
        })
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

// set expenses

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// SOMETHING THAT NEEDS TO BE LEARNED
// connecting REDUX To a database, api calls etc.

export const startSetExpenses = () => { // fetching and parsing data.
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        return database.ref(`users/${uid}/expenses`) // calling the database coloum
            .once('value') // one time
            .then((snapshot) => { // then taking the snapshot received
                const expenses = [] // creating an array to fill later

                snapshot.forEach((childSnapshot) => { // looping over returned data
                    expenses.push({ // filling the premade array with
                        id: childSnapshot.key, // the keys returned by Firebase
                        ...childSnapshot.val() // spreading all the data inside those database keys
                    })
                })
                dispatch(setExpenses(expenses))
            })
    }
}