import express from 'express'
import { getUserController, loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object

const router = express.Router()

//routing
//register .... method post
router.post('/register',registerController);

//LOGIN
router.post('/login',loginController);

//test 
router.get('/test',requireSignIn,isAdmin,testController);

//user 
router.get('/get-user',getUserController)
//protected route auth
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
});

////admin route
router.get('/admin-auth',requireSignIn, isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})


export default router