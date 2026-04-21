"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2, Github, Linkedin, Instagram, Facebook } from "lucide-react";
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
  name: z.string().min(2, "Please tell me your name"),
  email: z.string().email("I need a valid email to get back to you"),
  subject: z.string().min(5, "A short subject helps me prioritize"),
  message: z.string().min(10, "Tell me a bit more about your project"),
});

const SocialLogos = {
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    </svg>
  ),
};

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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Contact form payload:", values);
      setIsSuccess(true);
      toast({
        title: "Message Received!",
        description: "I'll get back to you as soon as I can.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-40 items-start">
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
            <h2 className="text-5xl md:text-8xl font-black mb-10 text-slate-900">Let&apos;s build something <span className="text-primary">amazing.</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-20 leading-relaxed max-w-4xl">
              Have an idea or a project in mind? I&apos;d love to hear about it. Whether you need a custom mobile app or a modern website, I&apos;m here to help.
            </p>

            <div className="space-y-12 mb-20">
              {[
                { icon: <Mail className="w-7 h-7" />, label: "Email Me", value: "kushwahaanish25@gmail.com", href: "mailto:kushwahaanish25@gmail.com" },
                { icon: <Phone className="w-7 h-7" />, label: "Call / WhatsApp", value: "+91 910 617 8432", href: "tel:+919106178432" },
                { icon: <MapPin className="w-7 h-7" />, label: "Based in", value: "Gujarat, India", href: "#" },
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{contact.label}</p>
                    <a href={contact.href} className="text-2xl md:text-3xl font-black text-slate-900 hover:text-primary transition-colors">{contact.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: <SocialLogos.LinkedIn />, href: "https://www.linkedin.com/in/anish-kushwaha-1a6aa0277", color: "hover:bg-[#0077B5] hover:border-[#0077B5]" },
                { icon: <SocialLogos.Instagram />, href: "https://www.instagram.com/ak_anish.02", color: "hover:bg-[#E4405F] hover:border-[#E4405F]" },
                { icon: <SocialLogos.GitHub />, href: "https://github.com/Anish-002", color: "hover:bg-[#333] hover:border-[#333]" },
                { icon: <SocialLogos.Facebook />, href: "https://www.facebook.com/share/1FBinqSsoP/", color: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 bg-white border border-slate-200 rounded-3xl text-slate-600 hover:text-white transition-all shadow-md ${social.color}`}
                >
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
            className="bg-white p-12 md:p-16 rounded-[4rem] relative shadow-2xl border border-slate-100"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-10">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-4xl font-black text-slate-900">Talk soon!</h3>
                <p className="text-slate-500 text-lg max-w-md">
                  Thanks for reaching out. I&apos;ll check my inbox and get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full px-10 h-14 font-bold">
                  Send another message
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
                          <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" className="rounded-2xl h-14 bg-slate-50 border-slate-100 focus:border-primary transition-all text-lg" {...field} />
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
                          <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email Address" className="rounded-2xl h-14 bg-slate-50 border-slate-100 focus:border-primary transition-all text-lg" {...field} />
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
                        <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" className="rounded-2xl h-14 bg-slate-50 border-slate-100 focus:border-primary transition-all text-lg" {...field} />
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
                        <FormLabel className="font-bold text-xs uppercase tracking-widest text-slate-400">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your idea..." 
                            className="rounded-[2rem] min-h-[180px] bg-slate-50 border-slate-100 focus:border-primary transition-all resize-none text-lg p-6" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-16 rounded-2xl font-black text-xl bg-slate-900 hover:bg-primary hover:shadow-2xl transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
