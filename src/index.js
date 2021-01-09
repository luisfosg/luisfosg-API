import app from "./app"

app.listen(app.get("port"), () => {
    console.log(`\n Servidor Listo en el puerto http://localhost:${app.get("port")}/  \n`);
});
