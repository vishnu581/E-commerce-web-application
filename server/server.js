const cookieParser = require('cookie-parser')

const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')


//mongoose

mongoose.connect('mongodb+srv://vishnuvenugopal581_db_user:vishnuvenugopal581_db_user@cluster0.omywtwv.mongodb.net/')
.then(()=>console.log('MongoDB connected'))
.catch((error)=> console.log(error))






const app = express()
const PORT =process.env.PORT || 5000

app.use(cors({
        origin: 'http://localhost:5173/',
        methods: ['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            "Pragma"
        ],
        Credential : true
    })
)

app.use(cookieParser())
app.use(express.json())
app.listen(PORT,()=> console.log(`Server is running port${PORT}`))
app.use('/api/auth',authRouter)