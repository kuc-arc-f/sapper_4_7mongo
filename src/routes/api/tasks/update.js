var ObjectID = require('mongodb').ObjectID;
import LibMongo from "../../../lib/LibMongo"

import Const from "../../../../app_config"
//
export async function post(req, res) {
  try{
    var data = req.body
    var id = data.id   
console.log(data)
    var item = {
      title: data.title ,  
      content: data.content ,
    };
    //console.log(item);
    var where = {"_id": new ObjectID( id )};
    await LibMongo.update_item("tasks" , where, item )
    var ret ={ item:data }    
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