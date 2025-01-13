if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}

const express=require('express');
const cors=require('cors')


const app=express();
const userRouter=require('./routes/user.route.js')
const productRouter=require('./routes/product.route.js')

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.use('/user',userRouter)
app.use('/product',productRouter)
//connecting db and running server 
module.exports=app;