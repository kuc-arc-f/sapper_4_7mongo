var ObjectID = require('mongodb').ObjectID;
import LibMongo from "../../../lib/LibMongo"

import Const from "../../../../app_config"
//
export async function post(req, res) {
  try{
    var data = req.body
    var id = data.id 
console.log("id=" , id)     
    var where = { "_id": new ObjectID( id ) };
    await LibMongo.delete_item("tasks" , where )
    var ret ={
      id: id
    }    
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(ret));
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'application/json' });
  }  
}