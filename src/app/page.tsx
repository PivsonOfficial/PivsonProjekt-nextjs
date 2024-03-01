
import React from "react";
import TodoList from "@/app/TodoList";
import VypisUzivatelu from "@/app/VypisUzivatelu";



export default function Home() {

  return (
      <main>
          <div>
              <VypisUzivatelu />
          </div>
          <div>
              <TodoList />
          </div>
      </main>

  );
}

