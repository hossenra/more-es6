const users = [ {id: 1, name: 'Hasem', job: 'teacher'} ]

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Rahim', job: 'Doctor'},
        {id: 2, name: 'Kahim', job: 'Dancer'},
    ]
}

const firstJob = data.data[0].job;

// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Razibul Hossen',
    address: {
        street: {
            first: 'siegmunds hof 2',
            second: '7th floor',
            third: 'right',
        },
        postOffice: 'Berlin',
        city: 'Germany'
    }
}

const userFloor = user.address.street.second;

console.log(userFloor);