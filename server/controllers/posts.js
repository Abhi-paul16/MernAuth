import postMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  // res.send("this fucking works")

  try {
    const PostMessage = await postMessage.find();
    res.status(200).json(PostMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new postMessage(post);
    try{
       await  newPost.save()
        res.status(201).json(newPost);
    } catch (error){
        res.status(409).json({ message: error.message });
    }
}