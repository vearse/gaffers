'use strict'

const Post = require("../../Models/Post")

const POst = use('App/Models/Post')

class UserController {

    async index({ view }){
        // const users = [
        //     {name: 'Kabiru Wahab', email: 'vearse@gmail.com'},
        //     {name: 'Kabiru Wahab', email: 'vearse@gmail.com'},
        //     {name: 'JSamson Siasia', email: 'gmail@gmail.com'},
        // ]

        const posts = await Post.all();

        return view.render('users.index', {
            title: 'Users',
            posts: posts.toJSON()
        })
    }

    async store({ response }){
        const post = new Post();
        post.title = "Post 1";
        post.post = "This is the pain post";

        await post.save();


        return response.redirect('/users')
    }

}

module.exports = UserController
