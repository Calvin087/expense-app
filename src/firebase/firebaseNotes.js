// Child Removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// Child Changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
}) 

// Child Added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
}) 

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = []

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            }) 
        })
    console.log(expenses)
})

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = []

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log(expenses)
})

database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: 18986900
})

database.ref('expenses').push({ // sends a new item to the database each time it's called, even with the same data
    title: 'Rent',
    amount: 750,
    location: 'Calle Sambara 7, 1 A'
})

database.ref('Accounts').push({
    paypal: 3000,
    lloyds: 1750,
    sabadell: 2000
})

database.ref().on('value', (snapshot) => { // ON subsribes, ONCE pulls it once
    const val = snapshot.val()
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})

setTimeout(() => {
    database.ref().update({
        'job/company': 'Calderon de la barca'
    })
}, 6000)

// -------------

const onValueChange = database.ref().on('value', (snapshot) => { // this turns ON subscribe
    console.log(snapshot.val())
}, (e) => { // 3rd argument is the error catch
    console.log('Error with data fetching', e)
})

setTimeout(() => {
    database.ref().off(onValueChange) // this turns OFF subscribe that was saved to a variable.
}, 60000)

// -------------

database.ref()
.once('value') // Grabs the data once, as it says. Should be ON to subscribe
.then((snapshot) => { //data received from database is called snapshot
    const val = snapshot.val()
    console.log(val)
})
.catch((e) => {
    console.log('Error ', e)
})

database.ref().set({
    // basically initialises the object inside the database.
    // I guess this counts as setting the fields to start with.
    // SET is a promise - so i can add .then()
    name: 'Calvin Torra',
    age: 33,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Madrid',
        country: 'Spain'
    },
}).then(() => {
    console.log('data is saved')
}).catch((e) => {
    console.log('Object Set Failed', e)
})


database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Barcelona'
})


database.ref('isSingle')
    .remove()
    .then(() => {
        console.log('Data has been deleted')
    })
    .catch((e) => {
        console.log('Data not deleted ', e)
    })

database.ref('attributes').set({
    //ref can signal an object line to change or add a whole new one.
    // above i have no attributes, not until it's set with this call.
    weight: 89,
    height: 177.5
}).then(() => {
    console.log('Attributes were saved')
}).catch((e) => {
    console.log('Error occurred', e)
})