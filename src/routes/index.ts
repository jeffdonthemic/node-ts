import * as express from "express";
import * as users from "./users";

export const register = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get( "/", ( req: any, res ) => {
        res.render( "index" );
    } );

    users.register( app );

};
