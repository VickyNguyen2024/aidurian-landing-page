"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LoaderCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="container py-10">
      <h1 className="text-center text-2xl text-[#468448] font-semibold">
        Contact us
      </h1>
      <h1 className="text-center text-xl md:text-4xl text-black font-medium mb-10">
        We'd love to hear from you
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
        <div className="lg:col-span-2 mb-5 lg:mb-0">
          <h1 className="hidden md:block text-4xl text-black font-medium mb-10">
            Contact us
          </h1>
          <ContactForm />
        </div>
        <div className="lg:col-span-4">
          <img
            className="block mx-auto"
            src={"/images/contact-bg.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    ) {
      setIsSendingOrder(true);

      const currentForm = form.current;
      if (!currentForm) return;

      await emailjs
        .sendForm("service_tmrerxv", "template_0gyod8j", currentForm, {
          publicKey: "ZBUHx31tLPl2qQRFc",
        })
        .then(
          () => {
            toast({ title: "Registration successfully !" });
          },
          (error) => {
            console.error("Failed...", error.text);
            toast({
              title: "Something went wrong.",
              description: "Please try again later.",
            });
          }
        )
        .finally(() => {
          setIsSendingOrder(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        });
    } else {
      toast({
        title: "Error!",
        description: "Please fill in all required fields.",
      });
    }
  };

  return (
    <div className="bg-white">
      <form className="space-y-6" ref={form} onSubmit={sendEmail}>
        {/* First Name and Last Name */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First name
            </label>
            <Input
              required
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last name
            </label>
            <Input
              required
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <Input
            required
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone number
          </label>
          <Input
            required
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            defaultCountry="US"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Leave us a message..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            disabled={isSendingOrder}
            className="w-full bg-[#01837F] hover:bg-teal-700"
          >
            {isSendingOrder ? (
              <LoaderCircle className="animate-spin text-white" />
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
