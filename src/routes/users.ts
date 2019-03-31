import * as express from "express";

export const register = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get( "/users", ( req: any, res ) => {
        res.render( "users" );
    } );

};
