'use strict';
import app from "./app"
import "./database"

app.listen(app.get("port"), () => {
    console.log(`\n Servidor Listo en el puerto: ${app.get("port")}`);
});
