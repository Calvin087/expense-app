const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                // state.filter(expense) OR { id } expense is an obeject inside an array,
                // so we can destructure the expense object, pull the ID of each object by
                // naming it this way.
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
            case 'SET_EXPENSES': // sets expenses array completely inside database
                return action.expenses
        default:
            return state
    }
}

export default expenseReducer