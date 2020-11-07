import express from "express";
import authenticate from "../services/authenticate";
import questionCtrl from "../controller/question";
const questionRouter = express.Router();

questionRouter.post("/api/question", authenticate, questionCtrl.create);
questionRouter.get("/api/questions", authenticate, questionCtrl.list);
questionRouter.get("/api/question/:id", authenticate, questionCtrl.view);
questionRouter.get("/api/question/up-vote", authenticate, questionCtrl.upVote);
questionRouter.get("/api/question/down-vote", authenticate, questionCtrl.downVote);
questionRouter.patch("/api/question/answer", authenticate, questionCtrl.answer);
questionRouter.patch("/api/question/subscribe", authenticate, questionCtrl.subscribe);

export default questionRouter;
