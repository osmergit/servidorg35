import express from 'express'

const app = express()

app.get('/',  (req, res) => {
  res.send('🚀🤠Bienvenidos a la clase de😎 🐳Deployment en Versel🐳😎 Desarrollo de Aplicaciones Web🤠🚀 ')
})
const puerto = 8000;
app.listen(puerto, () => {
    console.log("El Servidor esta corriendo en http://localhost:",puerto)
})