
import Post from 'App/Models/Post'
export default class PostsController {

    async index({view}){
        const posts = await Post.all()
        return view.render('posts.index',{
            title:'Latestposts',
            posts: posts
        })
    }
    
    async store({ request, response, session }) {
        const post = new Post()
    
        post.title = request.input('title')
        post.body = request.input('body')
    
        await post.save()

        return response.redirect('/posts')
      }
     
    async details({ params, view }) {
        const post = await Post.find(params.id)
    
        return view.render('posts.details', {
          post: post
        })
      }
    
    async add({ view }) {
        return view.render('posts.add')
      }

    async edit({ params, view }) {
        const post = await Post.find(params.id)
    
        return view.render('posts.edit', {
          post: post
        })
    }
    
    async destroy({ params, session, response }) {
        let post = await Post.find(params.id)
        //await post.delete()
        
        return response.redirect('/posts')
      }


}

