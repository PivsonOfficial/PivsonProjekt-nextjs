import React from "react";

const { PrismaClient } = require('@prisma/client');




export default async function VypisUzivatelu(){

    const prisma = new PrismaClient()
    const users = await prisma.user.findMany();
    console.log(users)

    return (
        <main>
            <h1>Users</h1>
            <br></br>
            <div>
                {
                    // eslint-disable-next-line react/jsx-key
                    users.map((user: { name: string; email: string; })=><Card title={user.name} description={user.email} checked={true}></Card>)
                }
            </div>
        </main>
    );
}

function Card ({title, description, checked}:TodoItemProps){
    return <div>
        <h2>Jméno: {title} / Email: {description}</h2>

    </div>

}

class TodoItemProps{
    title:string | undefined;
    description: string | undefined;
    checked:boolean | undefined;
}
