import moment from 'moment'

const expenses = [{ // This is an array of objects to use in this test
    id: '1',
    description: 'Gum',
    note: '',
    amount: 20,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 19500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses