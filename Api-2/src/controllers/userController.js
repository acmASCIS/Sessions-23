let users = [
    {
        id: 1,
        name: 'abanoub',
        age: 21,
        committee: 'Technical'
    },
    {
        id: 2,
        name: 'abanoub2',
        age: 21,
        committee: 'Training'
    },
    {
        id: 3,
        name: 'ahmed',
        age: 21,
        committee: 'EA'
    },
]


const getAllUsers = (req, res) => {
    const { committee } = req.query;
    if (committee) {
        const usersByCommittee = users.filter(user => user.committee == committee);
        res.json(usersByCommittee);
    }
    res.json(users);
}

const getUserById = (req, res) => {
    const { id } = req.query;
    const user = users.find(user => user.id == id);
    res.json(user);
}


const addUser = (req, res) => {
    const { id, name, age, committee } = req.body;
    const newUser = { id, name, age, committee };
    users.push(newUser);
    res.json(newUser);
}


const updateUser = (req, res) => {
    const { name, age, committee } = req.body;
    const { id } = req.params;
    let user = users.find(user => user.id == id);
    if (!user) {
        res.json({
            message: 'not found'
        })
    } else {
        user = {
            id: user.id,
            name: name || user.name,
            age: age || user.age,
            committee: committee || user.committee
        }

        res.json(user);
    }
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if (!user) {
        res.json({
            message: 'not found'
        })
    } else {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.json({
            message: 'deleted',
            users
        })
    }
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser }