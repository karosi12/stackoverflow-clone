import express from "express";
import authenticate from "../middlewares/authenticate";
import questionCtrl from "../controller/question";
const questionRouter = express.Router();

questionRouter.post("/api/question", authenticate, questionCtrl.create);
questionRouter.get("/api/questions", questionCtrl.list);
questionRouter.get("/api/question/:id", questionCtrl.view);
questionRouter.get("/api/question/up-vote/:id", authenticate, questionCtrl.upVote);
questionRouter.get("/api/question/down-vote/:id", authenticate, questionCtrl.downVote);
questionRouter.patch("/api/question/answer", authenticate, questionCtrl.answer);
questionRouter.patch("/api/question/subscribe", authenticate, questionCtrl.subscribe);

export default questionRouter;
