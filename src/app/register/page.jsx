"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    website: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
    mobile: "",
    invoiceCompany: "",
    invoiceAddress: "",
    invoicePostalCode: "",
    invoiceCity: "",
    invoiceCountry: "",
    vatNumber: "",
    membershipCategory: "",
    declaration: false,
  });

  const { toast } = useToast();
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      formData.company &&
      formData.firstName &&
      formData.email &&
      formData.declaration
    ) {
      setIsSendingOrder(true);

      const currentForm = form.current;
      if (!currentForm) return;

      await emailjs
        .sendForm("service_tmrerxv", "template_g8yp0dq", currentForm, {
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
            company: "",
            address: "",
            postalCode: "",
            city: "",
            country: "",
            website: "",
            firstName: "",
            lastName: "",
            position: "",
            email: "",
            phone: "",
            mobile: "",
            invoiceCompany: "",
            invoiceAddress: "",
            invoicePostalCode: "",
            invoiceCity: "",
            invoiceCountry: "",
            vatNumber: "",
            membershipCategory: "",
            declaration: false,
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
    <div className="container py-20">
      <h1 className="text-center font-bold text-xl mb-6">
        Request your Membership/Membership Application Form
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-1/2 mx-auto space-y-6"
      >
        {/* Applicant Section */}
        <div>
          <h2 className="font-bold mb-4">APPLICANT</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">*Company</Label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="address">*Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Company Representative Section */}
        <div>
          <h2 className="font-bold mb-4">COMPANY REPRESENTATIVE</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">*First Name</Label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">*Last Name</Label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="position">Position</Label>
              <Input
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email">*Email</Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile</Label>
              <Input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Invoicing Address Section */}
        <div>
          <h2 className="font-bold mb-4">
            INVOICING ADDRESS (if different than company address)
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="invoiceCompany">Company</Label>
              <Input
                name="invoiceCompany"
                value={formData.invoiceCompany}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="invoiceAddress">Address</Label>
              <Input
                name="invoiceAddress"
                value={formData.invoiceAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="invoicePostalCode">Postal Code</Label>
              <Input
                name="invoicePostalCode"
                value={formData.invoicePostalCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="invoiceCity">City</Label>
              <Input
                name="invoiceCity"
                value={formData.invoiceCity}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="invoiceCountry">Country</Label>
              <Input
                name="invoiceCountry"
                value={formData.invoiceCountry}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="vatNumber">VAT Number</Label>
              <Input
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Membership Category Section */}
        <div>
          <h2 className="font-bold mb-4">MEMBERSHIP CATEGORY</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="radio"
                id="national"
                name="membershipCategory"
                value="National Association"
                checked={formData.membershipCategory === "National Association"}
                onChange={handleChange}
              />
              <Label htmlFor="national" className="ml-2">
                National Association
              </Label>
            </div>
            <div>
              <input
                type="radio"
                id="company"
                name="membershipCategory"
                value="Company"
                checked={formData.membershipCategory === "Company"}
                onChange={handleChange}
              />
              <Label htmlFor="company" className="ml-2">
                Company
              </Label>
            </div>
            <div>
              <input
                type="radio"
                id="associate"
                name="membershipCategory"
                value="Associate Member"
                checked={formData.membershipCategory === "Associate Member"}
                onChange={handleChange}
              />
              <Label htmlFor="associate" className="ml-2">
                Associate Member
              </Label>
            </div>
          </div>
        </div>

        {/* Declaration */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="declaration"
            name="declaration"
            checked={formData.declaration}
            onChange={handleChange}
            required
          />
          <Label htmlFor="declaration">
            I understand that the application will be subject to approval of the
            General Assembly
          </Label>
        </div>

        <button
          className="rounded block mx-auto text-white cursor-pointer border-[1px] border-solid py-[7px] pl-12 pr-[46px] bg-[#008481] relative hover:opacity-90"
          type="submit"
          disabled={isSendingOrder}
        >
          {isSendingOrder ? (
            <LoaderCircle className="animate-spin text-white" />
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </div>
  );
}
