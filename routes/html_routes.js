
var express = require("express");
var router = express.Router();

router.get("/scrape", function(req, res) {
  axios.get("http://www.sciencemag.org/").then(function(response) {
    var $ = cheerio.load(response.data);
    $("h2.media__headline").each(function(i, element) {
      var result = {};
      result.title = $(this).children("a").text();
      result.link = $(this).children("a").attr("href");
      //dont add links not containing sciencemag
      if(result.link && result.link.indexOf("sciencemag")!== -1){
        db.Article.create(result).then(function(articles){
        }).catch(function(err) {
          return res.json(err);
        });
      }
    });
    res.redirect("/articles");
  });
});

router.get("/", function(req, res){
  res.redirect("/articles");
});

router.get("/articles", function(req, res) {
  db.Article.find({}).then(function(articles){
    res.json(articles);
  }).catch(function(err) {
    res.json(err);
  });
});


