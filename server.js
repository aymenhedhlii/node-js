
//création de serveur 

const http = require('http')

const server = http.createServer((req,res)=>{
    
    if(req.url==('/home')){
        res.statusCode=200
        res.write('welcome to my home')
    }else if (req.url==('/contact')){
        res.statusCode=200
        res.write('welcome to contact')
    }else if (req.url==('/about')){
        res.statusCode=200
        res.write('information for our society')

    }else {
        res.statusCode=404
        res.write('page not found')
    }
res.end()


})
server.listen(3000, ()=>console.log('server running'))