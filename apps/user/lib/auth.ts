import db from "@repo/prisma/clinet"
import  CredentialsProvider  from "next-auth/providers/credentials"
import brcypt from "bcrypt"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                phone:{label:"Phone number", type:"number", placeholder:'Enter Your Phone Number'},
                password:{label:"password", type:"password", placeholder:"enter your password"}
            },
            async authorize(credentials:any){
                const hashedsValue = await brcypt.hash(credentials.password, 10);
                const existuser = await db.user.findFirst({
                    where:{
                        number:credentials.number
                    }
                });

                if (existuser){
                    const passwrodValidator = await brcypt.compare(credentials.password,  existuser.password);
                    if(passwrodValidator){
                        return {
                            id:existuser.id.toString(),
                            name: existuser.name,
                            email:existuser.number
                        }
                    }
                    return null
                }

                try{
                    const user = await db.user.create({
                        data:{
                            email:credentials.name,
                            number:credentials.number,
                            name:credentials.name,
                            passwrod:hashedsValue
                        }
                    })
                }
                catch{
                    console.log("something went workd")
                }
                return credentials
            }
            
        }),
        
    ],
     
    
} 