
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
export async function  createOnRampTransaction(ammoutn:number, provider:string){
    const session = await getServerSession(authOptions);

    const userId = session?.user?.name;
    console.log(userId)
}