import { PhoneInput } from "@/components/PhoneNumberInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container py-20">
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
  return (
    <div className="bg-white">
      <form className="space-y-6">
        {/* First Name and Last Name */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First name
            </label>
            <Input id="first-name" placeholder="First name" />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last name
            </label>
            <Input id="last-name" placeholder="Last name" />
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
          <Input type="email" id="email" placeholder="you@company.com" />
        </div>

        <div>
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone number
          </label>
          <PhoneInput defaultCountry="US" placeholder="+1 (555) 000-0000" />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <Textarea id="message" placeholder="Leave us a message..." />
        </div>

        {/* Submit Button */}
        <div>
          <Button className="w-full bg-[#01837F] hover:bg-teal-700">
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
}
