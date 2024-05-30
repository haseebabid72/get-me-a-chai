import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import  mongoose  from "mongoose";
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

export const authoptions =  NextAuth({
  providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account.provider == 'github') {
          await connectDB();
          const client = await mongoose.connect("mongodb://localhost:27017/chai")
          const currentUser = await User.findOne({email:email});
          if (!currentUser){
            const newUser = new User({
              email : user.email,
              username : user.email.split("@")[0],

            })
          }
          return true;
        }
      },
      async session({ session, user, token }) {
        const dbUser = await User.findOne({email:session.user.email})
        session.user.name = dbUser.username;
        return session
      },
    }
    });
export {authoptions as GET, authoptions as POST}