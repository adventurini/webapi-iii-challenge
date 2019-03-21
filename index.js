// code away!
const server= require('./server.js')

const port = process.env.PORT || 4445

server.listen(port, ()=> {
    console.log(`Server Running on ${port}`)
})