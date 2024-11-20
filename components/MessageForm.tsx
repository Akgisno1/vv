"use client";

import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMessage } from "@/lib/message.action";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Validation schema
const MessageSchema = z.object({
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});

// Type for form values
type MessageFormValues = z.infer<typeof MessageSchema>;

const MessageForm: React.FC = () => {
  const { toast } = useToast();

  // Initialize react-hook-form
  const form = useForm<MessageFormValues>({
    resolver: zodResolver(MessageSchema),
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submission
  const onSubmit: SubmitHandler<MessageFormValues> = async (values) => {
    await createMessage({ message: values.message });
    toast({
      title: "Message sent successfully!",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
        ref={formRef}
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Apne pyaare se fan ke liye koi message"
                  {...field}
                  className="text-lg min-h-32 text-amber-500 placeholder-teal-500 bg-transparent hover:bg-white border-amber-500 border-2 focus:text-white focus:bg-amber-500 focus:ring-2 focus:ring-white focus:border-white focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 font-semibold resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-amber-500 font-semibold text-lg py-2 text-white hover:bg-amber-600 focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:scale-110 transition-transform"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default MessageForm;
