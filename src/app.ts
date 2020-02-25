import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from  './routes'
class App {
    public express: express.Application
   
    constructor(){
        console.log("constructor");
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    private middleware(): void{
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        mongoose.connect('mongodb://localhost:27017/typescript', { useNewUrlParser: true, useUnifiedTopology: true })
    }

    private routes(): void{
        // this.express.get('/', (req, res)=>{
        //     return res.send('<h1>hello wordl</h1>');
        // })
        this.express.use(routes)
    }
}

module.exports = new App().express
