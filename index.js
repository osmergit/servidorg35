import express from 'express'

const app = express()

app.get('/',  (req, res) => {
  res.send('🚀Bienvenidos a la clase de😎 Desarrollo de Aplicaciones Web🚀')
})

app.listen(8000, () => {
    console.log("El Servidor esta corriendo en http://localhost:8000")
})