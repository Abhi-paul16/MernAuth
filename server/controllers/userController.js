//  @desc  Auth user/set  Token
// route POST api/user/auth
// @access Public
import asyncHandler from "express-async-handler"
const authUser = asyncHandler( async (req,res) =>{
    res.status(200).json({message:"Auth user"})
});

export{authUser};