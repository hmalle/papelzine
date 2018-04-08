
const axios = require("axios");
const db = require("../../models/");

module.exports ={
  findAll:function(req,res){
    db.eprint
      .find(req.query)
      .sort({date:-1})
      .then(dbEprint=>res.json(dbEprint))
      .catch(err=>res.status(422).json(err));
  },
  findById:function(req,res){
    db.eprint
      .findById(req.params.id)
      .then(dbEprint=>res.json(dbEprint))
      .catch(err=>res.status(422).json(err));
  },
  create:function(req,res){
    .sort({date:-1})
    .then(dbEprint=>res.json(dbEprint))
    .catch(err=>res.status(422).json(err));
  },
  update:function(req,res){
    .sort({date:-1})
    .then(dbEprint=>res.json(dbEprint))
    .catch(err=>res.status(422).json(err));
  },
  remove:function(req,res){
    .sort({date:-1})
    .then(dbEprint=>res.json(dbEprint))
    .catch(err=>res.status(422).json(err));
  },
}
