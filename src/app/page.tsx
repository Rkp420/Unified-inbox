"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Phone, MessageCircle } from "lucide-react";

export default function InboxPage() {
  const [activeChannel, setActiveChannel] = useState("all");

  const channels = [
    { key: "sms", label: "SMS", icon: <Phone className="h-4 w-4" /> },
    { key: "whatsapp", label: "WhatsApp", icon: <MessageCircle className="h-4 w-4" /> },
    { key: "all", label: "All", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Unified Inbox</h1>
      </div>

      <Tabs value={activeChannel} onValueChange={setActiveChannel} className="w-full">
        <TabsList className="grid grid-cols-3 w-full sm:w-1/2 md:w-1/3">
          {channels.map((ch) => (
            <TabsTrigger key={ch.key} value={ch.key} className="flex items-center gap-2">
              {ch.icon}
              {ch.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                This view shows all messages across SMS and WhatsApp channels.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms">
          <Card>
            <CardHeader>
              <CardTitle>SMS Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">All SMS conversations fetched via Twilio SMS API.</p>
              <Button className="mt-4">Fetch SMS Messages</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">All WhatsApp conversations fetched via Twilio WhatsApp API.</p>
              <Button className="mt-4">Fetch WhatsApp Messages</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}