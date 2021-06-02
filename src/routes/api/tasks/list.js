//import axios from 'axios'
var ObjectID = require('mongodb').ObjectID;
import LibMongo from "../../../lib/LibMongo"
import Const from "../../../../app_config"
//
export async function get(req, res) {
  try{
    var items = await LibMongo.get_array("tasks" )
    var ret ={
      items: items
    }
//console.log(items)    
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(ret));
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'application/json' });
  }  
}