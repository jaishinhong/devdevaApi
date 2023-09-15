const express = require("express");
const cors = require("cors");
const app = express();

let users = [
    {
        id: 1,
        firstName: "Somsak",
        lastName: "Deemak",
        gender: "male",
        birthDate: "13/06/2000"
    },
    {
        id: 2,
        firstName: "Manee",
        lastName: "Deedee",
        gender: "female",
        birthDate: "21/01/2001"
    }
];

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200).json({ users });
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((el) => (el.id = id));
    res.status(200).json({ user });
});

app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
});

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const index = users.findIndex((el) => el.id == id);
    users[index] = { ...users[index], ...body };

    res.status(200).json({ message: "update successfully" });
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const newUsers = users.filter((el) => el.id != id);
    users = newUsers;
    console.log(users);
    res.status(200).json({ message: "delete successfully" });
});

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
