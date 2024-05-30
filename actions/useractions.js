"use server"
import connectDB from "@/db/connectDb"
import User from "@/models/User";

export const fetchUser = async(username) => {
  await connectDB();
  let u = await User.findOne({username:username});
  let user = u.toObject({flattenObjectIds:true})
  return user;
}
export const UpdateProfile=async(data,oldusername) => {
    await connectDB();
    // Check if username is available
    let nData = Object.fromEntries(data);
    if(oldusername!==nData.username)
    {
        let u = await User.findOne({username:NData.username});  
        if (u){
            return({error:"Username already exists"})
        };

    }
    await User.updateOne({email: nData.email},nData);

    
}