"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";

export default function Register() {
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const form = useRef(null);

  const sendEmail = () => {
    // e.preventDefault();
    console.log("sent!");

    // if (user.user_name && user.user_email && user.user_phone) {
    // 	setIsSendingOrder(true);

    // 	const currentForm = form.current;

    // 	if (currentForm == null) return;

    // await emailjs
    // 	.sendForm("service_lml1ego", "template_l9n65a9", currentForm, {
    // 		publicKey: "nEemcZNM5Z9qkA2gd",
    // 	})
    // 	.then(
    // 		() => {
    // 			toast({
    // 				title: "Đơn hàng đã được gửi đi !",
    // 				description:
    // 					"Nisara Sport sẽ liên hệ để xác nhận với bạn trong thời gian sớm nhất. Xin cảm ơn.",
    // 			});
    // 		},
    // 		(error) => {
    // 			console.log("FAILED...", error.text);
    // 			toast({
    // 				title: "Đã xảy ra lỗi !",
    // 				description:
    // 					"Hệ thống của Nisara Sport đang gặp lỗi, vui lòng thử lại sau hoặc liên hệ ngay qua hotline.",
    // 			});
    // 		}
    // 	)
    // 	.finally(() => {
    // 		setIsSendingOrder(false);
    // 		setUser({
    // 			user_name: "",
    // 			user_email: "",
    // 			user_phone: "",
    // 			message: "",
    // 		});
    // 	});
    // }
    // else {
    // 	toast({
    // 		title: "Lỗi !",
    // 		description: "Vui lòng nhập đầy đủ thông tin.",
    // 	});
    // }
  };

  return (
    <div className="container py-20">
      <h1 className="text-center uppercase font-bold text-3xl mb-6">
        Register
      </h1>
      <form ref={form} onSubmit={sendEmail} className="md:w-1/3 mx-auto">
        <div className="grid w-full items-center gap-1.5 mb-5">
          <Label htmlFor="name">Your Name</Label>
          <Input
            placeholder="Type in your name..."
            type="name"
            id="name"
            name="user_name"
            value={user.user_name}
            onChange={handleChange}
            className="focus:border-[#03837E] border-2 hover:border-[#03837E] transition-all"
          />
        </div>
        {/* <div className="grid w-full items-center gap-1.5 mb-2">
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input
            placeholder="Nhập số điện thoại..."
            type="phone"
            id="phone"
            name="user_phone"
            value={user.user_phone}
            onChange={handleChange}
            className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
          />
        </div> */}
        <div className="grid w-full items-center gap-1.5 mb-5">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Type in your email..."
            type="email"
            id="email"
            name="user_email"
            value={user.user_email}
            onChange={handleChange}
            className="focus:border-[#03837E] border-2 hover:border-[#03837E] transition-all"
          />
        </div>
        {/* <div className="grid w-full items-center gap-1.5 mb-5">
          <Label htmlFor="message">Note (optional)</Label>
          <Textarea
            placeholder="Type in your note..."
            id="message"
            name="message"
            value={user.message}
            onChange={handleChange}
            className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
          />
        </div> */}
        <input type="hidden" name="products" value="" />
        <button
          className="block mx-auto text-white cursor-pointer border-[1px] border-solid py-[7px] pl-12 pr-[46px] bg-[#008481] shadow-md rounded whitespace-nowrap hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border"
          type="submit"
          value="Send"
          disabled={isSendingOrder}
        >
          {isSendingOrder ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}
