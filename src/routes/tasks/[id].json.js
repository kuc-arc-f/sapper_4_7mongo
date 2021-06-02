var ObjectID = require('mongodb').ObjectID;
import LibMongo from "../../lib/LibMongo"

import Const from "../../../app_config"
//
export async function get(req, res, next) {
  try{
    const { id } = req.params;
    var where = { _id: new ObjectID(id) }
    var item = await LibMongo.get_item("tasks" , where ) 
    var ret ={
      item: item
    }
//console.log(item)
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(ret));
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'application/json' });
  }   
}
