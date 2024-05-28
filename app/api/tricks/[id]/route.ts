import { PrismaClient } from '@prisma/client'
import {NextRequest, NextResponse} from "next/server";
import trick from "../../../Trick";


const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

export async function GET  (request: NextRequest, { params }: { params: { id: string } }) {

    const trick = await prisma.trick.findUnique({
        where: {
            id: parseInt(params.id, 10)
        }
    })

    if (!trick) {
        return NextResponse.json({error: "Trick not found"}, { status: 404 })
    }

    return NextResponse.json(trick)
}

export async function DELETE (request: NextRequest, { params }: { params: { id: string } }) {

    //check if it exists
    const trick = await prisma.trick.findUnique({
        where: {
            id: parseInt(params.id, 10)
        }
    })

    if (!trick) {
        return NextResponse.json({error: "Trick not found"}, { status: 404 })
    }

    const deleteTrick = await prisma.trick.delete({
        where: {
            id: parseInt(params.id),
        },
    })

    return NextResponse.json(deleteTrick)
}


export async function PATCH (request: NextRequest, { params }: { params: { id: string } }) {
    const body =  await request.json()

    const updatedTrick = await prisma.trick.update({
        where: {
            id: parseInt(params.id)
        },
        data: {
            title: body.title,
            description: body.description,
            category: body.category,
        }
    })

    return  NextResponse.json(updatedTrick)
}

// export async function POST (request: NextRequest){
//
//     const body =  await request.json()
//
//     const newTrick = await prisma.trick.create({
//         data: {
//             title: body.title,
//             description: body.description,
//             category: body.category,
//         }
//     })
//
//     return NextResponse.json(newTrick)
// }

// { params }: { params: { slug: string } }