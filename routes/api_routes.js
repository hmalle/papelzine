
var express = require("express");
var router = express.Router();

router.get("/api/saved-articles", function(req, res) {
  db.Article.find({saved:true}).then(function(articles){
    res.json(articles);
  }).catch(function(err) {
    res.json(err);
  });
});

//change the saved status of the article 
router.put("/api/marksaved/:id/", function(req, res) {
  db.Article.findOneAndUpdate({_id:req.params.id},{$set:{"saved":true}}
  ).then(function(articles) {
    res.json(articles);
  }).catch(function(err) {
    res.json(err);
  });
});

//change the saved status of the article 
router.put("/api/markunsaved/:id/", function(req, res) {
  db.Article.findOneAndUpdate({_id:req.params.id},{$set:{"saved":false}
  }).then(function(articles) {
    res.json(articles);
  }).catch(function(err) {
    res.json(err);
  });
});

// Route for grabbing a specific Article by id, populate it with it's note
router.get("/api/article-notes/:id", function(req, res) {
  db.Article.findOne({ _id: req.params.id }).populate("note").then(function(articles){
    res.json(articles);
  }).catch(function(err) {
    res.json(err);
  });
});

//save notes
router.post("/api/save-note/:id/:note", function(req, res) {
  db.Note.create({body:req.params.note}).then(function(dbNote) {
    return db.Article.findOneAndUpdate({_id: req.params.id},{note:dbNote._id }, { new: true });
  }).then(function(articles) {
    res.json(articles);
  }).catch(function(err) {
    res.json(err);
  });
});


