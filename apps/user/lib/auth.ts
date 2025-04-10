import db from "@repo/prisma/clinet"
import  CredentialsProvider  from "next-auth/providers/credentials"
import brcypt from "bcrypt"
import Email from "next-auth/providers/email";
import { pages } from "next/dist/build/templates/app-page";
import { error } from "console";
import { s } from "framer-motion/client";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                name:{label:"name", type:'text', placeholder:'Ener your name'},
                Email:{label:"Email", type:"text", placeholder:"Enter Email"},
                password:{label:"password", type:"password", placeholder:"enter your password"},
            },
            async authorize(credentials:any){
                console.log(credentials)
                const hashedsValue = await brcypt.hash(credentials.password, 10);
                const existuser = await db.user.findFirst({
                    where:{
                        email:credentials.email
                    }
                });

                if (existuser){
                    console.log("already")
                    const passwrodValidator = await brcypt.compare(credentials.password,  existuser.password);
                    if(passwrodValidator){
                        console.log('password does not match')
                        return {
                            id:existuser.id.toString(),
                            name: existuser.name,
                            email:existuser.email,
                            
                        }
                    }
                   
                }
                else{
                    console.log('user not expo')
                    return null
                }

                try{
                    
                    const user = await db.user.create({
                        data:{
                            name:credentials.name,
                            email:credentials.email,
                            password:hashedsValue
                        }
                    })
                }
                catch{
                    console.log("something went workd")
                
                }
                console.log(credentials)
                return credentials
            }
            
        }),
        
    ],
    pages:{
        signIn:"/signin",
        
    }
    
} 