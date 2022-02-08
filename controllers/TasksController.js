const asyncHandler = require('express-async-handler');
const getTasks = asyncHandler (async (areq, res) => {
    res.status(200).json({
        tasks: [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            status: "open"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            status: "open"
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            status: "open"
        }
        ]
    });
})

const addTask = asyncHandler (async (areq, res) => {

    if(!req.body.text){
        res.status(400);
        throw new Error("Bad Request");

    }
    res.status(200).json({
        tasks: [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            status: "open"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            status: "open"
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            status: "open"
        }
        ]
    });
})

const updateTask = asyncHandler ( async (areq, res) => {
    res.status(200).json({
        tasks: [
        {
            id: req.params.id,
            title: "Task 1",
            description: "Description 1",
            status: "open"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            status: "open"
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            status: "open"
        }
        ]
    });
})

const deleteTask = asyncHandler (async (areq, res) => {
    res.status(200).json({
        tasks: [
        {
            id: req.params.id,
            title: "Task 1",
            description: "Description 1",
            status: "open"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            status: "open"
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            status: "open"
        }
        ]
    });
})

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}