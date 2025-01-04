import React, { useState, useRef, useEffect } from "react";
import { generateChatResponse } from "../services/aiService";

const ChatModal = ({ isOpen, onClose, destination }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const initializeChat = () => {
      if (isOpen && messages.length === 0) {
        setMessages([
          {
            role: "assistant",
            content: `Hello! I would be happy to help you plan your trip to ${
              destination || "a new place"
            }. What kind of experience are you looking for?`,
          },
        ]);
      }
    };

    initializeChat();
  }, [isOpen, destination, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: "user",
      content: inputMessage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await generateChatResponse([...messages, userMessage]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl h-[600px] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Travel Planning Assistant</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === "assistant"
                    ? "bg-gray-100"
                    : "bg-purple-100 ml-auto"
                } p-3 rounded-lg max-w-[80%]`}
              >
                <p>{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                <p>Yazıyor...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="input-primary flex-1"
              disabled={isLoading}
            />
            <button type="submit" className="btn-primary" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
