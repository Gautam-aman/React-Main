const express = require("express");
const z = require("zod")


const app = express();
app.use(express.json());
function usermiddleware(req, res, next){
    if (req.body.username != "aman" && req.body.password != "123"){
        res.json({
            msg : "You are not authorized to access this route"
        })
}
else{
    next();
}
}

const schema = zod.object({
    email : zod.email(),
    name : zod.string(),
    age : zod.number(), 
    password : zod.string().min(8)
})


app.get('/main',usermiddleware, function(req, res){
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    if (!response.success){
        res.json({
            msg : "Invalid data"
        })
    }else{
        res.send({
            msg : "Hello World"
        })
    }
    
})

//global catches for errors
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})