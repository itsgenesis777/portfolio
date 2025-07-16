import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  // NEW handleSubmit function:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://98z0asefie.execute-api.ap-southeast-1.amazonaws.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Oops! Something went wrong.",
          description: "Please try again or contact me directly.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network error!",
        description: "Please check your internet connection.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tapispisan21@gmail.com",
      href: "mailto:tapispisan21@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 906-369-5732",
      href: "tel:09063695732"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tapispisan-lourd-vincent-m-060871278",
      href: "https://linkedin.com/in/tapispisan-lourd-vincent-m-060871278"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ceeeentd",
      href: "https://github.com/ceeeentd"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors duration-200">
                    <CardContent className="p-4">
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <div className="p-3 bg-blue-600/20 rounded-lg">
                          <item.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Response</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn for faster communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
