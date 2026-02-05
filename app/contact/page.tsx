import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-b from-emerald-50/50 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about our products or need help with your order? 
              We're here to help you on your wellness journey.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-6"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900 mb-6">Contact Information</h2>
                  <p className="text-stone-600 mb-8">
                    Our team is available Monday through Friday, 9am to 6pm CST. 
                    We typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      content: "hello@phoinix.com",
                      description: "For general inquiries and support",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "1-800-PHOINIX",
                      description: "Mon-Fri, 9am-6pm CST",
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "123 Wellness Way, Austin, TX 78701",
                      description: "Our headquarters",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday: 9AM - 6PM CST",
                      description: "Weekend support via email",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900">{item.title}</h3>
                        <p className="text-stone-900">{item.content}</p>
                        <p className="text-sm text-stone-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ Link */}
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-2">Looking for quick answers?</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Check our FAQ page for answers to common questions about shipping, returns, and products.
                  </p>
                  <Button variant="outline" className="w-full">
                    Visit FAQ Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
