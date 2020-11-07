"use strict";
import app from '../app';
import expect from 'expect.js';
import request from 'supertest';
import FactoryGirl from './factory/index';
import User from "../model/user";

let user, factoryUser, token, email;
describe("#ODA User", () => {
    before(async () => {
        factoryUser = await FactoryGirl.attrs('User');
        await User.remove({});
    });
    describe("Add User", () => {
        it("#create a user", async ()=> {
            try {
                const res = await request(app).post('/api/register')
                .set('Accept', 'application/json')
                .send(factoryUser)
                .expect(200);
                email = res.body.data.email
                expect(res.body).have.property("success");
                expect(res.body).have.property("statusCode");
                expect(res.body).have.property("message");
                expect(res.body).have.property("data");
                expect(res.body.statusCode).to.equal(200);
                expect(res.body.message).to.equal("Admin added successfully");
                expect(res.body.data).have.property("_id");
                expect(res.body.data).have.property("inviteAccepted");
                expect(res.body.data).have.property("blocked");
                expect(res.body.data).have.property("isDeleted");
                expect(res.body.data).have.property("email");
                expect(res.body.data).have.property("role");
                expect(res.body.data).have.property("userDepartment");
                expect(res.body.data).have.property("createdAt");
                expect(res.body.data).have.property("updatedAt");
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
        // it("#create an admin with a registered email", async ()=> {
        //     try {
        //         const res = await request(app).post('/api/register')
        //         .set('Accept', 'application/json')
        //         .send(factoryAdmin)
        //         .expect(400);
        //         expect(res.body).have.property("error");
        //         expect(res.body).have.property("statusCode");
        //         expect(res.body).have.property("message");
        //         expect(res.body.message).to.equal('user already has an account');
        //         expect(res.body.error).to.equal(true);
        //         expect(res.body.statusCode).to.equal(400);
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error(error);
        //     }
        // });
        // it("#create an admin with an unauthorised email", async ()=> {
        //     try {
        //         factoryAdmin = Object.assign({}, factoryAdmin, {email: "johndoe@gmail.com"});
        //         const res = await request(app).post('/api/register')
        //         .set('Accept', 'application/json')
        //         .send(factoryAdmin)
        //         .expect(400);
        //         expect(res.body).have.property("error");
        //         expect(res.body).have.property("statusCode");
        //         expect(res.body).have.property("message");
        //         expect(res.body.message).to.equal('Only Gbnl, Ba and Moantech mails allowed');
        //         expect(res.body.error).to.equal(true);
        //         expect(res.body.statusCode).to.equal(400);
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error(error);
        //     }
        // });
        // it("#Login user", async () => {
        //     try {
        //         const loginData = { password: 'password1234!', email}
        //         const res = await request(app).post('/api/login')
        //         .set('Accept', 'application/json')
        //         .send(loginData)
        //         .expect(200);
        //         console.log(res.body)

        //         expect(res.body).have.property("success");
        //         expect(res.body).have.property("statusCode");
        //         expect(res.body).have.property("message");
        //         expect(res.body.message).to.equal('Login successful');
        //         expect(res.body.statusCode).to.equal(200); 
        //         expect(res.body.success).to.equal(true);
        //         // expect(res.body.data).have.property("admin");
        //         expect(res.body.data).have.property("token");
        //         token = res.body.data.token;
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error(error);  
        //     }
        // })
        // it("#Login admin with wrong email", async () => {
        //     try {
        //         const loginData = { password: 'password1234!', email: "johndoe@gmail.com"}
        //         const res = await request(app).post('/api/login')
        //         .set('Accept', 'application/json')
        //         .send(loginData)
        //         .expect(400);
        //         console.log(res.body)
        //         expect(res.body).have.property("error");
        //         expect(res.body).have.property("statusCode");
        //         expect(res.body).have.property("message");
        //         // expect(res.body.message).to.equal('Only Gbnl, Ba and Moantech mails allowed');
        //         expect(res.body.error).to.equal(true);
        //         expect(res.body.statusCode).to.equal(400);
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error(error);  
        //     }
        // });
        // it("#Login admin with wrong password", async () => {
        //     try {
        //         const loginData = { password: 'password1234!!!', email}
        //         const res = await request(app).post('/api/login')
        //         .set('Accept', 'application/json')
        //         .send(loginData)
        //         .expect(400);
        //         console.log(res.body)
        //         expect(res.body).have.property("error");
        //         expect(res.body).have.property("statusCode");
        //         expect(res.body).have.property("message");
        //         expect(res.body.message).to.equal('Invalid Credentials');
        //         expect(res.body.error).to.equal(true);
        //         expect(res.body.statusCode).to.equal(400);
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error(error);  
        //     }
        // });
    });
});
