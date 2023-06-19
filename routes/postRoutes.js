const express=require("express")
const {getPosts,getPost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get('/',getPosts)
router.get('/details/:id',getPost)
router.get('/edit',editPost)
router.get('/edit/:id',editPost)
router.post('/store', addPost)
router.put('/update/:id',updatePost)
router.delete('/delete/:id',deletePost)


module.exports=router