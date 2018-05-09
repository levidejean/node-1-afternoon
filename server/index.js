const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controller')

const app = express ();

app.use( bodyParser.json() );
app.use( express.static(__dirname + '/../public/build') );

const messageBaseUrl = "/api/messages";
app.post( messageBaseUrl, mc.create );
app.get( messageBaseUrl, mc.read );
app.put( `${messageBaseUrl}/:id`, mc.update );
app.delete( `${messageBaseUrl}/:id`, mc.delete);

const port = 3000;
app.listen( port, () => {console.log(`Server is listening on port ${port}`); } );
