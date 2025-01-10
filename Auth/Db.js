const Express = require( "express")
const jwt = require("jsonwebtoken")
const jwtpassword = 123456
const app = Express();


app.use(Express.json())


const allusers = [
    {
        name:"aman",
        password : "123"
    },
    {
        name:"kishan",
        password : "1234"
    }
]


function userexist(tname ,  tpassword){
    for (let i =0; i<3; i++){
        if (allusers[i].name == tname && allusers[i].password == tpassword){
            return true;
        }
    }
    return false;
}

app.post("/login", (req, res)=>{
    const name = req.body.name;
    const password = req.body.password;

    if (!userexist(name,password)){
        return res.status(400).send("user not found")
    }

    var token = jwt.sign({name:name}, jwtpassword);
    return res.status(200).send(token);
})

app.get("/getdata", (req, res)=>{
    const token = req.header.authorization;
    try {
        const decode = jwt.verify(token, jwtpassword);
        const username = decode.name;
        res.send(username);
    }
    catch(e){
        return res.status(400).send("invalid token")
    }
})



app.listen(3000, ()=>{
    console.log("server running")
})