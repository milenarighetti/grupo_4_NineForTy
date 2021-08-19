const fs = require("fs");
const path = require("path");

function findAll(){
    
  let tokensJson= fs.readFileSync(path.join(__dirname, "../data/tokens.json"))

  let data = JSON.parse(tokensJson)
  return data
}

function writeJson(array){
  //transformamos en un string
  let arrayJson = JSON.stringify(array);
  
  //procesamos la inform en el Json
  return fs.writeFileSync(path.join(__dirname, "../data/tokens.json"), arrayJson);
}


const productController = {
    create: (req,res) =>{
        res.render("products/create")
    },

    edit: (req,res) =>{
        res.render("products/edit")
    },

    list: (req,res) =>{
        let tokens = findAll();
        res.render("products/tokens", {tokens})
    },  
    detail: (req,res)=>{
        let tokens = findAll();
        
        let tokenFound = tokens.find(function(token){
            return token.id == req.params.id
        })

        res.render("detail", {token: tokenFound})
    }

}

module.exports = productController;