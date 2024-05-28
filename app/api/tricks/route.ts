import { PrismaClient } from '@prisma/client'
import {NextRequest, NextResponse} from "next/server";


const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

 export async function GET  (request: NextRequest) {

    const tricks = await prisma.trick.findMany()
    console.log(tricks)

    // const users = await prisma.user.findMany()

    return NextResponse.json(tricks)
}


export async function POST (request: NextRequest){

    const body =  await request.json()

    const newTrick = await prisma.trick.create({
        data: {
            title: body.title,
            description: body.description,
            category: body.category,
        }
    })

    return NextResponse.json(newTrick)
}