import { useState, useEffect, KeyboardEvent } from "react";
import { callOpenAI } from "../api/chat";
import { Message } from "../../types";

const LeafletChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() !== "") {
      const newMessage = { role: "User", content: input };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
      const chatMessages = await callOpenAI(input);
      if (chatMessages) {
        setMessages((prevResponse) => [...prevResponse, chatMessages]);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-b from-blue-200 to-blue-400 p-4 sm:p-24 h-screen">
      <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 h-full bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">
          Leaflet Chat
        </h1>
        <p className="mb-4 text-gray-600">
          This is a chat interface for discussing leaflet information. Type your
          message below and press Enter to send.
        </p>
        <div className="overflow-y-auto w-full flex-grow mb-4 p-4 border rounded-xl">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.role === "User" ? "text-left pr-8" : "text-right pl-8"
              }`}
            >
              <div
                className={`mb-4 inline-block p-2 rounded-lg text-justify ${
                  msg.role === "User" ? "bg-blue-200" : "bg-green-200"
                }`}
              >
                <strong className="font-bold uppercase">{msg.role}</strong>:{" "}
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
          className="mb-4 p-2 border-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleSend}
          >
            Send
          </button>
          <button
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
            onClick={() => setMessages([])}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeafletChat;
