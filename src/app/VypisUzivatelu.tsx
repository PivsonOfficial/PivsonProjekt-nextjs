
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
                    users.map((user)=><Card title ={user.name} description={user.email} checked={true}/>
                )
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
    title: string;
    description: string;
    checked: boolean;
}
