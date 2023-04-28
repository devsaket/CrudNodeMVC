const axios = require('axios')

exports.homeRoutes = (req,res) => {
    // res.render('index', {users: "New Data"})

    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        // console.log(response)
        res.render('index',{users: response.data})
    })
    .catch(err => {
        res.send(err)
    })
}

exports.addUserRoutes = (req, res)=>{
    res.render('add_user')
}

exports.updateUserRoutes = (req, res)=>{
    // res.render('update_user')
    
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}})
    .then(function(response){
        res.render("update_user",{user: response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}