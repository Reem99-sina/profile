
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const CONTACT_EMAIL = "reemsina99@gmail.com";
const CONTACT_PHONE = "+201129134700";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE}`,
  },
];

export function ContactUs() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isOpeningEmail, setIsOpeningEmail] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const emailSubject = encodeURIComponent(subject.trim());

    const emailBody = encodeURIComponent(
      `Hello Reem,

${message.trim()}

-------------------------
Name: ${name.trim()}
Email: ${email.trim()}
`
    );

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    setIsOpeningEmail(true);
    window.location.href = mailtoUrl;

    // Reset the button state if the visitor stays on the page.
    window.setTimeout(() => setIsOpeningEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-28 text-foreground"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-mainColor/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-mainColor/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4  text-sm font-semibold uppercase tracking-[0.3em] text-mainColor">
            Let's connect
          </p>

          <h2 className="relative inline-block text-4xl font-bold uppercase md:text-5xl">
            Get In <span className="text-mainColor">Touch</span>

            <span className="absolute -bottom-3 left-0 h-1 w-full rounded-full bg-mainColor" />
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
            Have a project in mind or looking for a developer?
            I'd love to hear from you. Let's build something great together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Let's work <span className="text-mainColor">together!</span>
              </h3>

              <p className="mb-8 leading-7 text-muted-foreground">
                I'm open to discussing new opportunities, freelance projects,
                collaborations, and interesting ideas. Feel free to reach out.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 rounded-xl  p-4 transition-all duration-300 hover:-translate-y-1 hover:border-mainColor/60 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mainColor/10 text-mainColor transition-colors group-hover:bg-mainColor group-hover:text-black">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="break-all text-sm font-medium transition-colors hover:text-mainColor"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>

                      {item.href && (
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-muted-foreground transition-colors group-hover:text-mainColor"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Find me on
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Reem99-sina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-all hover:border-mainColor hover:bg-mainColor hover:text-mainColor-foreground"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/reem-ebrahim-801bb21b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-all hover:border-mainColor hover:bg-mainColor hover:text-mainColor-foreground"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl  p-6 shadow-lg md:p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>

                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="h-12 bg-background focus-visible:ring-mainColor"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="h-12 bg-background focus-visible:ring-mainColor"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>

                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry / Job opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  className="h-12 bg-background focus-visible:ring-mainColor"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="message">Your Message</Label>

                  <span className="text-xs text-muted-foreground">
                    {formData.message.length}/1000
                  </span>
                </div>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  rows={6}
                  className="min-h-36 resize-none bg-background focus-visible:ring-mainColor"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isOpeningEmail}
                className="group h-12 w-full rounded-xl bg-mainColor text-mainColor-foreground transition-all duration-300 hover:bg-mainColor/90 hover:shadow-lg"
              >
                {isOpeningEmail ? "Opening email app..." : "Send Message"}

                <Send
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                This form opens your default email application.
                Your message is not sent automatically.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
