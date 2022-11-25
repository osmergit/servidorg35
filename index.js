import express from 'express'

const app = express()

app.get('/',  (req, res) => {
  res.send('🚀🤠Bienvenidos a la clase de😎 🐳Deployment en Versel🐳😎 Desarrollo de Aplicaciones Web🤠🚀 ')
})

app.listen(6000, () => {
    console.log("El Servidor esta corriendo en http://localhost:6000")
})