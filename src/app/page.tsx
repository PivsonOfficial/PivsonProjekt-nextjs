
import React from "react";
import TodoList from "@/app/TodoList";
export default function Home() {
  return (
      <main className="float-left">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
              <div className="md:flex-shrink-0">
              </div>
              <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Subscription</div>
                  <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  <div className="mt-4">
                      <span className="text-gray-700 font-bold">$10</span>
                      <span className="text-gray-600">/ month</span>
                  </div>
                  <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">Subscribe</button>
              </div>
          </div>
      </div>
      </main>

  );
}

const Page: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My Todo List</h1>
            <TodoList />
        </div>
    );
}
