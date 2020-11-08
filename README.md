# Stackoverflow clone

This is the implementation of a simple stackoverflow clone restful api backend functionalities. It enables users to register, login, ask question, search for questions, search for users, answer question, subscribe, upvote and/or downvote a question

##

API Endpoint: https://stack-over-flow-api.herokuapp.com

# Technologies Used

- Backend: Node/Express
- MongoDB
- Mongoose
- Libaries: Es6, Babel-CLI, eslint, supertest, express

# Features

- User can create an account and log in
- Authenticated User create question.
- Authenticated User upvote question.
- Authenticated User downvote question.
- Authenticated User answer question.
- Authenticated User subscribe to a question.
- Unauthenticated/Authenticated User should be able get all questions.
- Unauthenticated/Authenticated User should be able search for questions.
- Unauthenticated/Authenticated User should be able search for users.
- Unauthenticated/Authenticated User should be able view question.

## API Endpoints

| Endpoint                                          | Functionality                       |
| ------------------------------------------------- | ----------------------------------- |
| POST /api/signup                                  | Register a user                     |
| POST /api/login                                   | Login a user                        |
| GET /api/users                                    | List all user                       |
| GET /api/users?q=elizabeth                        | search for a user                   |
| POST /api/question                       | Create question                   |
| GET /api/questions                       | List all questions                  |
| GET /api/questions?q=lorem                       | Search for questions                  |
| GET /api/question/\<question_id>                      | View a question                  |
| GET /api/question/up-vote/\<question_id>             | upvote a question                  |
| GET /api/question/down-vote/\<question_id>             | downvote a question                  |
| PATCH /api/question/answer            | answer question                  |
| PATCH /api/question/subscribe            | subscribe to a question                  |

[Stackoverflow clone](https://documenter.getpostman.com/view/10646382/TVeiDqke)

# To Install

- Download or clone
- Open terminal inside the root directory of clone folder
- Type `npm install` to install all dependencies
- `npm start` to run the app
- npm run `start:dev` to run development environment
- `npm test` to run the test suits on the app

##

API Endpoint: https://stack-over-flow-api.herokuapp.com

## AUTHOR

[Kayode Adeyemi](https://github.com/karosi12)
