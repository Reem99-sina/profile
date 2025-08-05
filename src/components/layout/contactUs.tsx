import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const mailto = `mailto:${formData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailto;
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
      console.error("Contact form network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background text-foreground relative overflow-hidden"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-foreground/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase whitespace-nowrap opacity-10">
        Contact
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase relative inline-block">
              Get In <span className="text-mainYellow">Touch</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase">
                Don't be shy !
              </h3>
              <p className="text-muted-foreground mb-4 font-open-sans">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>

              <div className="space-y-4 mb-8">
                <p className="flex items-start open-sans-font custom-span-contact relative">
                  <MapPin className="h-6 w-6 text-mainYellow mr-4 mt-1" />
                  <span className="d-block text-muted-foreground">
                    Address Point
                  </span>
                  <span className="text-foreground mx-2">cairo giza egypt</span>
                </p>
                <p className="flex items-start open-sans-font custom-span-contact relative">
                  <Mail className="h-6 w-6 text-mainYellow mr-4 mt-1" />
                  <span className="d-block text-muted-foreground">Mail me</span>
                  <Link
                    href="mailto:reemsina99@gmail.com"
                    className="text-foreground hover:underline mx-2"
                  >
                    reemsina99@gmail.com
                  </Link>
                </p>
                <p className="flex items-start open-sans-font custom-span-contact relative">
                  <Phone className="h-6 w-6 text-mainYellow mr-4 mt-1" />
                  <span className="d-block text-muted-foreground">Call me</span>
                  <Link
                    href="tel:+201129134700"
                    className="text-foreground hover:underline mx-2"
                  >
                    +201129134700
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800 dark:bg-green-950 dark:border-green-700 dark:text-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800 dark:bg-red-950 dark:border-red-700 dark:text-red-200">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <p>{errorMessage}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      id="name"
                      placeholder="YOUR NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-input text-foreground border-border focus:border-mainYellow focus:ring-mainYellow"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="sr-only">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="YOUR EMAIL"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-input text-foreground border-border focus:border-mainYellow focus:ring-mainYellow"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="sr-only">
                    Your Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="YOUR SUBJECT"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-input text-foreground border-border focus:border-mainYellow focus:ring-mainYellow"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="sr-only">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="YOUR MESSAGE"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="min-h-[100px] bg-input text-foreground border-border focus:border-mainYellow focus:ring-mainYellow"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-mainYellow text-mainYellow-foreground hover:bg-mainYellow/90 transition-colors duration-300 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
                  disabled={isSubmitting}
                >
                  <span className="button-text uppercase mr-3">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
