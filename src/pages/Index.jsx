import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [messages, setMessages] = useState([
    { id: 1, user: "John Doe", content: "Hello!", timestamp: "10:00 AM" },
    { id: 2, user: "Jane Smith", content: "Hi there!", timestamp: "10:05 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, user: "You", content: newMessage, timestamp: "Now" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">#{selectedChannel}</h1>
        <div>Channel details</div>
      </header>
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <Card key={message.id} className="mb-4">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User avatar" className="mx-auto object-cover w-10 h-10" />
                <AvatarFallback>{message.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{message.user}</CardTitle>
                <div className="text-sm text-muted-foreground">{message.timestamp}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{message.content}</p>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
      <footer className="p-4 border-t">
        <div className="flex items-center space-x-4">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;