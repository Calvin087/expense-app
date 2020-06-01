import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => ( // This component can now access the store as a prop
    // Exporting this twice because the one above
    // is being used in the test area while being unconnected
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No Expenses</p>     
    ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })
    )
}
    </div>

)

// Higher Order Component (HOC)

const mapStateToProps = (state) => { // Saving access to the store as a const and using this inside connect function
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList) // This connects to store to the chosen component as a prop

// Higher Order Component (HOC)

