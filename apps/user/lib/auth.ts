import db from "@repo/prisma/clinet";
import CredentialsProvider from "next-auth/providers/credentials";
import brcypt from "bcrypt";
import { error } from "console";
import { Session } from "inspector";
import { SessionStrategy } from "next-auth";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text", placeholder: "Ener your name" },
        Email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      authorize : async(credentials: any, req)=>{
        // findig user in db;
        const callbackUrl = String(req.query?.callbackUrl || req.headers?.referer);
        
       
    
        const callbackArray =callbackUrl.split('?');
        console.log(callbackArray[0])
        
        const hashPassword = await brcypt.hash(credentials.password, 10);

        const exixstUser = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if(callbackArray[0] === "http://localhost:3000/signup"){
            if(credentials.name == "" || credentials.email == "" || credentials.password == ""){
                console.log("blank")
                throw new Error("blank");
                
            }
            else if(exixstUser){
                throw new Error("email")
            }
            else{
                try{
                  const newUser = await db.user.create({
                    
                      data:{
                          name:credentials.name,
                          email:credentials.email,
                          password:hashPassword
                      }
                      
                      
                  });
                  const setBalance = await db.balance.create({
                    data:{
                      userId:newUser.id,
                      amount:0,
                      locked:0
                    }
                  })
                  return newUser;
                }
                catch(e){
                  return null;
                }
                  
            }
        }

        else if(callbackArray[0] === "http://localhost:3000/signin"){
            console.log("sign in")
          
            if(!exixstUser){
                throw new Error("not match");
                
            }
            else {
              if(exixstUser){
                console.log('dada');

                const matchpassword = await brcypt.compare(credentials.password, exixstUser.password);
                console.log(matchpassword);
                
                if(!matchpassword){
                  throw new Error("password mismatch")
                }
                else if(exixstUser && matchpassword){
                  
                  console.log(exixstUser)
                  return exixstUser
                }


              }
              
            }

            
        }
        
       

        
       return credentials;
      },
    }),

 

  ],

  callbacks: {
    async jwt({ token, user }:{
      token:any,
      user:any
    }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  
    async session({ session, token }:{session:any, token:any}) {
      if (session?.user) {
        session.user.id = token.id as string;
      }
      return session;
    },

  },


  secret:process.env.JWT_SECTET,
  
  pages: {
    signIn: "/signin",
    singOut:"/"
  },

};
