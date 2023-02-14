function getUsers(req, res) {
    res.json({message: "api/users GET"});
}

function registration(req, res) {
    res.json({message: "/api/users/register POST"});
}

function login(req, res) {
    res.json({message: "/api/users/login POST"});
}

export default {
    getUsers,
    registration,
    login
};