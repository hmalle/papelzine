
const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .get(controller.findAll)
  .post(controller.crate);

routes.route("/scrape")
  .post(controller.scrape);

routers.route("/articles")
  .get(controller.findAll);

router.route("/api/saved-articles")
  .get(controller.findSaved);

router.route("/api/marksaved/:id")
  .put(controller.saveArticle);

routes.route("/api/markUnsaved/:id")
  .put(controller.unsaveArticle);

router.route("/api/article-notes/:id")
  .get(controller.findArticleNotes)
  .post(controller.saveArticleNotes)

