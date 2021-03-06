import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpenseSummary = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div>
            <p>Viewing {expenseCount} {expenseWord} with the total of {formattedExpenseTotal}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)