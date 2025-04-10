import {PrismaClient} from "@repo/prisma/clinet"
import  CredentialsProvider  from "next-auth/providers/credentials"
import brcypt from "bcrypt"
import { pages } from "next/dist/build/templates/app-page";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                phone:{label:"Phone number", type:"number", placeholder:'Enter Your Phone Number'},
                password:{label:"password", type:"password", placeholder:"enter your password"}
            },
            async authorize(credentials:any){
                console.log(credentials);
                return credentials
            }
        }),
        
    ],
    pages:{
        signIn:"/login"
    }
    
}