import express from 'express'
import connectToDB from './connect.js'
// import requestLogger from './middlewares/requestLogger.js'
import routes from './routes/index.js';
import getUserFromAuthToken from './middleware/getUserFromAuthToken.js';

let app;

connectToDB().then(function (connectMessage) {
    console.log(connectMessage)
    app = express();
    app.use(express.json())
    app.use(getUserFromAuthToken)
    app.use(routes);
    const port = process.env.PORT || 3000||3002;
    app.listen(port, function () {
        console.log("Server running on PORT", port)
    })

    app.use( "/images/messages", express.static("/images/messages", ))
}).catch(function (err) {
    console.error(err)
})
    
export default app;