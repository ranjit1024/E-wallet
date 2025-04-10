import { PrismaClient } from "@prisma/client"


const PrismaSingleTon = () =>{
    return  new PrismaClient();
}

declare global {
    var prismaGlobal : undefined | ReturnType <typeof PrismaSingleTon>
}

const prisma : ReturnType <typeof PrismaSingleTon> = globalThis.prismaGlobal ?? PrismaSingleTon();

export default prisma;

if( process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;