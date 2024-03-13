import { PrismaClient } from "@prisma/client";

import AddTodo from "@/components/shared/AddTodo";

import Todo from "@/components/shared/Todo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen flex justify-center flex-col items-center bg-black h-[1000px] pb-80">
      <h1 className=" text-3xl font-extrabold uppercase mb-5">
        <span className="text-green-600 ml-2">
          Pivson Vydra Todo list
        </span>
      </h1>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
        <div className=" flex flex-col gap-6 items-center justify-center mt-10 w-full ">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
