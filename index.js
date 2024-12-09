const express = require("express");

const app = express();

const port = 3000

// console.dir(app);

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
});

// app.use((req, res)=>{
//     console.log(`request is catched`);
//     res.send('this is a basic response');
//     res.send({
//         name: "apple",
//         color: "red"
//     });
//     const code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// })

// app.get("/apple", (req, res) => {
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

app.get("/", (req, res)=>{
    res.send("this is a root path");
});

app.get("/apple", (req, res)=>{
    res.send("this is a apple path");
});

app.get("/orange", (req, res)=>{
    res.send("this is a orange path");
});

app.get("/banana", (req, res)=>{
    res.send("this is a banana path");
});

app.get("/lichi", (req, res)=>{
    res.send("this is a lichi path");
});

// app.get("*", (req, res)=>{
//     res.send("this is a this page does not exit");
// });


// path parameter

app.get("/user/:username/:age", (req, res)=>{
    console.log(req.params);
    let html = `<h1>This account belongs to: @${req.params.username} and age is ${req.params.age}</h1>`
    res.send(html);
});


app.get("/search", (req,res)=>{
    console.log(req.query);
    let { q } = req.query;
    let html = `<h1>Search for ${q}</h1>`;
    if(!q){
        res.send("<h1>Nothing search..</h1>");
    }
    res.send(html);
});

app.get("*", (req, res)=>{
    res.send("this is a this page does not exit");
});

// app.get('/users/:id', (req, res) => {
//     console.log('Route hit'); // Debug log
//     console.log('Params:', req.params); // Debug log for params
//     res.send(`User ID is: ${req.params.id}`);
// });


