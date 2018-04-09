
const axios = require("axios");
const db = require("../../models/");

module.exports ={

  findAll:function(req,res){
    axious.get("https://arxiv.org/find/grp_cs/1/ti:+Encryption/0/1/0/2009,2010/0/1?per_page=10").then(response=>{
      console.log(response);
    }
  },

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
    const newEprint={
      _id:req.body._id,
      title: req.body.headline.main,
      url:req.body.link,
    };
    db.eprint
      .create(newEprint)
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

