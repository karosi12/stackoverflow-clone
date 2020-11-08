import FactoryGirl from 'factory-girl';
import User from '../../model/user';
import Question from '../../model/question';
import faker from 'faker';


FactoryGirl.define('User', User, {
    fullName: faker.name.findName(),
    email: 'adeyemi@example.com',
    password: 'password1234!'
});

FactoryGirl.define('Question', Question, {
    question: faker.lorem.sentences()
});

export default FactoryGirl