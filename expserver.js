/*importing EXPRESS.JS*/
const express = require("express");

/*initialising the express*/
const app = express();

/*application only uses JSON format data*/
app.use(express.json());

/*initialising the port number*/
const PORT = 8081;      

/*initialising the array*/
const toDoList = ["hello everyone!!!", "good evening all"];

/*current API: http://localhost:8081/todos*/
/*GET method*/
app.get("/todos", (req,res)=>{
    /*calling the application*/
    res.status(200).send(toDoList);
})

/*POST method*/
app.post("/todos", (req,res)=>{
    /*calling the application*/
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "task added succesfully"
    })
})

/*DELETE method*/
app.delete("/todos", (req,res)=>{
    /*calling the application*/
    const itemToDelete = req.body.item;
    toDoList.find((each, i)=>{
        if(each === itemToDelete)
            toDoList.splice(i,1)
    })
    /*204 for DELETION*/
    res.status(204).send({
        message: "item deleted"
    })
})


/*it's not possible to mention each and every method in the code so for that we generalise these methods*/
/*GENERALISED method*/
app.all("/todos", (req,res)=>{
    /*calling the application*/
    /*501 for not implemented*/
    res.status(501).send({
        message: "not implemented"
    })
})
/*LISTENING OF SERVER*/
app.listen(PORT, ()=>{
    console.log(`node express server started running succesfully on port ${PORT}`)
})