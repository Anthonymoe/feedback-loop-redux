//require express and create our router
const express = require( 'express' );
const { Pool } = require('pg');
const router = express.Router();
const pool = require( '../pool' );

//routes
router.post( '/', ( req, res ) =>{
    console.log( 'in feedback_route.js', req.body );
    let queryString = 'INSERT INTO "feedback"( "feeling", "understanding", "support", "comments") VALUES ( $1, $2, $3, $4 );'
    pool.query( queryString, [req.body.feelingRating, req.body.understandingRating, req.body.supportRating, req.body.newComment]).then((results)=>{
        res.sendStatus( 200 );
    }).catch( (err) =>{
        console.log(err);
        res.sendStatus(500);
    } )
})//end router.post 

module.exports = router;