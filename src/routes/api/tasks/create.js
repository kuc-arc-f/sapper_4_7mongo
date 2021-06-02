var ObjectID = require('mongodb').ObjectID;
import LibMongo from "../../../lib/LibMongo"
import Const from "../../../../app_config"
//
export async function post(req, res) {
  try{
    var data = req.body
    var token =data._token
 console.log(data)
/*
    if(tokens.verify(process.env.CSRF_SECRET, token) === false){
      throw new Error('Invalid Token, csrf_check');
    }    
*/
    var item = {
      title: data.title ,  
      content: data.content ,
      created_at: new Date(),
    };
    const itemOne = await LibMongo.add_item("tasks" ,item )
    var ret ={
      item: itemOne
    }
    var ret ={ item: item }    
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