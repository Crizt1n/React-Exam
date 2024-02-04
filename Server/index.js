const jsonServer = require('json-server')

const employeeServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const PORT = 4000 || process.env.PORT

employeeServer.use(middleware)
employeeServer.use(router)

employeeServer.listen(PORT,()=>{
    console.log(`Employee server started at ${PORT} and waiting for client request`);
})