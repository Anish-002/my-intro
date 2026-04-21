"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Logic for Firebase integration would go here
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Contact form payload:", values);
      setIsSuccess(true);
      toast({
        title: "Message Transmitted!",
        description: "Your message has been received by my systems.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: "Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
              <Mail className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Connect</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900">Ready to <span className="text-primary">Innovate?</span></h2>
            <p className="text-xl text-slate-500 mb-16 leading-relaxed">
              Whether you have a groundbreaking idea or a complex business challenge, 
              I am here to help you build the future. Reach out and let's start something big.
            </p>

            <div className="space-y-10 mb-16">
              {[
                { icon: <Mail className="w-6 h-6" />, label: "Direct Email", value: "anish@dev.folio", href: "mailto:anish@dev.folio" },
                { icon: <Phone className="w-6 h-6" />, label: "WhatsApp / Call", value: "+91 910 617 8432", href: "tel:+919106178432" },
                { icon: <MapPin className="w-6 h-6" />, label: "Base Location", value: "Gujarat, India", href: "#" },
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{contact.label}</p>
                    <a href={contact.href} className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">{contact.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-[3.5rem] relative shadow-xl border border-slate-100"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900">Inquiry Sent!</h3>
                <p className="text-slate-500 text-lg">
                  System confirmation received. I will analyze your request and respond within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full px-10 h-14 font-bold">
                  Send New Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Identity</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" className="rounded-2xl h-14 bg-slate-50 border-slate-100 focus:border-primary transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Digital Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Email Address" className="rounded-2xl h-14 bg-slate-50 border-slate-100 focus:border-primary transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Objective</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry" className="rounded-2xl h-14 bg-slate-50 border-slate-100 focus:border-primary transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Detailed Vision</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your vision..." 
                            className="rounded-3xl min-h-[180px] bg-slate-50 border-slate-100 focus:border-primary transition-all resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-16 rounded-full font-bold text-xl bg-slate-900 hover:bg-primary hover:shadow-xl transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Initialize Connection
                        <Send className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Mail className="w-64 h-64 text-slate-900" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};