"use strict";
import app from '../app';
import expect from 'expect.js';
import request from 'supertest';
import JWT from "jsonwebtoken";
import FactoryGirl from './factory/index';
import Question from "../model/question";
import User from "../model/user";
import UserService from "../services/userServices";
const SECRET = process.env.JWT_SECRET;
let user, questionId, factoryUser, factoryQuestion, token;
describe("#ODA Question", () => {
  before(async () => {
    factoryUser = await FactoryGirl.attrs('User');
    factoryQuestion = await FactoryGirl.attrs('Question');
    await User.remove({});
    await Question.remove({});
    user = await createUser(factoryUser);
    const loginData = await login(factoryUser, factoryUser.password);
    if(!loginData.data) return { message: loginData.message}
    token = loginData.data.token;
    factoryQuestion = Object.assign({}, {userId: user._id},factoryQuestion)
  });
  describe("Add question", () => {
    it("#create question", async ()=> {
      try {
        const res = await request(app).post('/api/question')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .send(factoryQuestion)
        .expect(201);
        expect(res.body.statusCode).to.equal(201);
        expect(res.body.message).to.equal("question created successfully");
        expect(res.body.data.isDeleted).to.equal(false);
        expect(res.body).have.property("success");
        expect(res.body).have.property("statusCode");
        expect(res.body).have.property("message");
        expect(res.body).have.property("data");
        expect(res.body.data).have.property("_id");
        expect(res.body.data).have.property("userId");
        expect(res.body.data).have.property("subscribe");
        expect(res.body.data).have.property("upvote");
        expect(res.body.data).have.property("downvote");
        expect(res.body.data).have.property("answers");
        expect(res.body.data).have.property("question");
        expect(res.body.data).have.property("isDeleted");
        expect(res.body.data).have.property("createdAt");
        expect(res.body.data).have.property("updatedAt");
        questionId = res.body.data._id
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
    });
  });

  describe("Fetch question", () => {
    it("#get all question", async ()=> {
      try {
        const res = await request(app).get('/api/questions')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200);
        expect(res.body.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal("Record retrieved");
        expect(res.body).have.property("success");
        expect(res.body).have.property("statusCode");
        expect(res.body).have.property("message");
        expect(res.body).have.property("data");
        expect(res.body.data[0]).have.property("_id");
        expect(res.body.data[0]).have.property("userId");
        expect(res.body.data[0]).have.property("subscribe");
        expect(res.body.data[0]).have.property("upvote");
        expect(res.body.data[0]).have.property("downvote");
        expect(res.body.data[0]).have.property("answers");
        expect(res.body.data[0]).have.property("question");
        expect(res.body.data[0]).have.property("isDeleted");
        expect(res.body.data[0]).have.property("createdAt");
        expect(res.body.data[0]).have.property("updatedAt");
      } catch (error) {
          console.error(error);
          throw new Error(error);
      }
    });

    it("#get question", async ()=> {
      try {
        const res = await request(app).get(`/api/question/${questionId}`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200);
        expect(res.body.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal("question retrieved successfully");
        expect(res.body).have.property("success");
        expect(res.body).have.property("statusCode");
        expect(res.body).have.property("message");
        expect(res.body).have.property("data");
        expect(res.body.data).have.property("_id");
        expect(res.body.data).have.property("userId");
        expect(res.body.data).have.property("subscribe");
        expect(res.body.data).have.property("upvote");
        expect(res.body.data).have.property("downvote");
        expect(res.body.data).have.property("answers");
        expect(res.body.data).have.property("question");
        expect(res.body.data).have.property("isDeleted");
        expect(res.body.data).have.property("createdAt");
        expect(res.body.data).have.property("updatedAt");
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
    });

    it("#get question", async ()=> {
      try {
        const res = await request(app).get(`/api/question/${questionId}`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200);
        expect(res.body.statusCode).to.equal(200);
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal("question retrieved successfully");
        expect(res.body).have.property("success");
        expect(res.body).have.property("statusCode");
        expect(res.body).have.property("message");
        expect(res.body).have.property("data");
        expect(res.body.data).have.property("_id");
        expect(res.body.data).have.property("userId");
        expect(res.body.data).have.property("subscribe");
        expect(res.body.data).have.property("upvote");
        expect(res.body.data).have.property("downvote");
        expect(res.body.data).have.property("answers");
        expect(res.body.data).have.property("question");
        expect(res.body.data).have.property("isDeleted");
        expect(res.body.data).have.property("createdAt");
        expect(res.body.data).have.property("updatedAt");
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
    });
  });

  describe("Vote question", () => {
      it("#upvote question", async ()=> {
        try {
          const res = await request(app).get(`/api/question/up-vote/${questionId}`)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect(200);
          expect(res.body.statusCode).to.equal(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal("upvoted");
          expect(res.body.data.upvote).to.greaterThan(0)
          expect(res.body).have.property("success");
          expect(res.body).have.property("statusCode");
          expect(res.body).have.property("message");
          expect(res.body).have.property("data");
          expect(res.body.data).have.property("_id");
          expect(res.body.data).have.property("userId");
          expect(res.body.data).have.property("subscribe");
          expect(res.body.data).have.property("upvote");
          expect(res.body.data).have.property("downvote");
          expect(res.body.data).have.property("answers");
          expect(res.body.data).have.property("question");
          expect(res.body.data).have.property("isDeleted");
          expect(res.body.data).have.property("createdAt");
          expect(res.body.data).have.property("updatedAt");
        } catch (error) {
          console.error(error);
          throw new Error(error);
        }
      });

      it("#downvote a question", async ()=> {
        try {
          const res = await request(app).get(`/api/question/down-vote/${questionId}`)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .expect(200);
          expect(res.body.statusCode).to.equal(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal("downvoted");
          expect(res.body).have.property("success");
          expect(res.body).have.property("statusCode");
          expect(res.body).have.property("message");
          expect(res.body).have.property("data");
          expect(res.body.data).have.property("_id");
          expect(res.body.data).have.property("userId");
          expect(res.body.data).have.property("subscribe");
          expect(res.body.data).have.property("upvote");
          expect(res.body.data).have.property("downvote");
          expect(res.body.data).have.property("answers");
          expect(res.body.data).have.property("question");
          expect(res.body.data).have.property("isDeleted");
          expect(res.body.data).have.property("createdAt");
          expect(res.body.data).have.property("updatedAt");
        } catch (error) {
          console.error(error);
          throw new Error(error);
        }
      });
  });

  describe("Answer and subscribe to a question", () => {
      it("#answer a question", async ()=> {
        try {
          const data = {questionId, answer: 'lorem ipsum'}
          const res = await request(app).patch(`/api/question/answer`)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(data)
          .expect(200);
          expect(res.body.statusCode).to.equal(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal("user answer was successful");
          expect(res.body.data.answers.length).to.greaterThan(0)
          expect(res.body).have.property("success");
          expect(res.body).have.property("statusCode");
          expect(res.body).have.property("message");
          expect(res.body).have.property("data");
          expect(res.body.data).have.property("_id");
          expect(res.body.data).have.property("userId");
          expect(res.body.data).have.property("subscribe");
          expect(res.body.data).have.property("upvote");
          expect(res.body.data).have.property("downvote");
          expect(res.body.data).have.property("answers");
          expect(res.body.data).have.property("question");
          expect(res.body.data).have.property("isDeleted");
          expect(res.body.data).have.property("createdAt");
          expect(res.body.data).have.property("updatedAt");
        } catch (error) {
          console.error(error);
          throw new Error(error);
        }
      });

      it("#subscribe to a question", async ()=> {
        try {
          const data = {questionId}
          const res = await request(app).patch(`/api/question/subscribe`)
          .set('Accept', 'application/json')
          .set('Authorization', token)
          .send(data)
          .expect(200);
          expect(res.body.statusCode).to.equal(200);
          expect(res.body.success).to.equal(true);
          expect(res.body.message).to.equal("user subscribed to this question");
          expect(res.body.data.subscribe.length).to.greaterThan(0)
          expect(res.body).have.property("success");
          expect(res.body).have.property("statusCode");
          expect(res.body).have.property("message");
          expect(res.body).have.property("data");
          expect(res.body.data).have.property("_id");
          expect(res.body.data).have.property("userId");
          expect(res.body.data).have.property("subscribe");
          expect(res.body.data).have.property("upvote");
          expect(res.body.data).have.property("downvote");
          expect(res.body.data).have.property("answers");
          expect(res.body.data).have.property("question");
          expect(res.body.data).have.property("isDeleted");
          expect(res.body.data).have.property("createdAt");
          expect(res.body.data).have.property("updatedAt");
        } catch (error) {
          console.error(error);
          throw new Error(error);
        }
      });
  });
});

const login = async (data, password) => {
  const user = await UserService.getUser({email: data.email});
  if(!user.data) return {message: user.message, data: null};
  const loginData = user.data;
  const validPassword =  loginData.validatePassword(password)
  if (!validPassword) return {message: 'Invalid Credentials', data: null};
  const tokenData = { id: user.data._id, fullName: user.data.fullName };
  const token = await JWT.sign(tokenData, SECRET, { expiresIn: process.env.tokenExpiresIn });
  const result = { user: user.data, token };
  return {message: "Login successful", data: result};
}

const createUser = async (data) => {
  const user = new User();
  user.fullName = data.fullName; 
  user.email = data.email; 
  user.generateHash(data.password); 
  return await user.save();
}
