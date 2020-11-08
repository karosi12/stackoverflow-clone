import Question from '../model/question';
import logger from '../utils/logger';
import Responses from "../helper/responses";

const create = async (req, res) => {
  try {
    const {id} = req.decoded
    if(!req.body.question) return res.status(400).send(400, 'question is required')
    const question = await Question.create({ question: req.body.question, userId: id })
    if(!question) return res.status(400).send(Responses.error(400, "unable to create question"));
    return res.status(201).send(Responses.success(201, "question created successfully", question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}

const view = async (req, res) => {
  try {
    const {id} = req.params
    const question = await Question.findById(id)
    if(!question) return res.status(400).send(Responses.error('question not found'))
    return res.status(200).send(Responses.success(200, 'question retrieved successfully', question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}

const list = async (req, res) => {
  try {
    const question = await Question.find({})
    if(!question) return res.status(400).send(Responses.error(400, 'question not found'))
    if(question.length === 0) return res.status(200).send(Responses.success(200, 'Record not found', question))
    return res.status(200).send(Responses.success(200, 'Record retrieved', question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}

const upVote = async (req, res) => {
  try {
    const {id} = req.params
    const question = await Question.findOne({_id: id})
    question.upvote += 1
    await question.save()
    return res.status(200).send(Responses.success(200, 'upvoted', question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}
const downVote = async (req, res) => {
  try {
    const {id} = req.params
    const question = await Question.findOne({_id: id})
    question.downvote += 1
    await question.save()
    return res.status(200).send(Responses.success(200, 'downvoted', question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}

const answer = async (req, res) => {
  try {
    const {id} = req.decoded
    const {answer, questionId} = req.body
    const question = await Question.findOne({_id: questionId})
    question.answers.push({userId: id, answer})
    await question.save()
    return res.status(200).send(Responses.success(200, 'user answer was successful', question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}

const subscribe = async (req, res) => {
  try {
    const { id } = req.decoded
    const { questionId } = req.body
    const question = await Question.findOne({_id: questionId})
    question.subscribe.push(id)
    await question.save()
    return res.status(200).send(Responses.success(200, 'user subscribed to this question', question));
  } catch (error) {
    logger.info(`Internal server error => ${error}`)
    return res.status(500).send(Responses.error(500, "Internal server error"));
  }
}

export default { create, view, list, upVote, downVote, subscribe, answer }