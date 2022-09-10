// express application
const express = require("express")
const app = express()
const port = 4000

// cors
// const cors = require("cors")
// app.use(cors())

//disable cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})

app.use(express.json())

// start server
app.listen(port, () => {
	console.log(`Servidor iniciado na porta ${port}`)
})

app.get("/", (req, res) => {
	console.log(req)
	res.send("Hello World!")
})

//POST request body
// interface RequestBody {
//     nome?: string,
//     dataNascimento?: Date,
//     email?:string,
//     senha?:string,
//     sexo?: string,
//     telefoneResidencial?: string,
//     fumante?: boolean,
//     municipioOrigem?: string,
// }

app.post("/", (req, res) => {
	console.log(req.body)
	res.send({ usuario: req.body })
})

// // routes
// router.get("/get", controller.get)
// router.post("/post", controller.post)

// // controller
// const controller = {
// 	get: (req, res) => {
// 		res.send("GET")
// 	},
// 	post: (req, res) => {
// 		res.send("POST")
// 	},
// }
