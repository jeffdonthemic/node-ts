import dotenv from "dotenv";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

import * as routes from "./routes";

// initialize configuration
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Configure Express to use hbs
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "hbs" );

// Configure Express to serve static files in the public folder
app.use( express.static( path.join( __dirname, "public" ) ) );

app.use(bodyParser.urlencoded({'extended':true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// register routes
routes.register( app );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
