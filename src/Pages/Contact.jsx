import React, { useState , useEffect } from "react";
import { SendEmail } from "../integrations/Core";
import { Button } from "../Components/ui/Button";
import { Input } from "../Components/ui/Input";
import { Textarea } from "../Components/ui/TextArea";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/Card";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "../Components/ui/Alert";
import emailjs from "@emailjs/browser";


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = "service_9196not";
        const templateID = "template_mfv9yzl";
        const publicKey = "_TE3Ydd9n0rtb2cJ1";
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: "Jatin Dohale",
            message: formData.message,
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((Response) => {
                setSubmitStatus("success", Response);
                setFormData({ name: "", email: "", subject: "", message: "" });
            }).catch((error) => {
                setSubmitStatus("error", error);
            })
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
    };

     useEffect(() => {
            document.title = "Contacts | Jatin Dohale Portfolio";
        }, []);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 pt-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Ready to collaborate or have a question? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-white">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 text-white/80">
                                    <Mail className="w-5 h-5 text-purple-300" />
                                    <span>jatindohale2004@gmail.com</span>
                                </div>
                                {/* for conatact id */}
                                {/* <div className="flex items-center gap-3 text-white/80">
                                    <Phone className="w-5 h-5 text-purple-300" />
                                    <span></span>
                                </div> */}
                                <div className="flex items-center gap-3 text-white/80">
                                    <MapPin className="w-5 h-5 text-purple-300" />
                                    <span>Mumbai, India</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                            <CardHeader>
                                <CardTitle >Let's Build Something Great</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/70 leading-relaxed text-justify">
                                    I'm always open to discussing new opportunities,
                                    collaborating on interesting projects, or just having
                                    a chat about technology and development.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                            <CardHeader>
                                <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {submitStatus === "success" && (
                                    <Alert className="mb-6 border-green-500/50 bg-green-500/10">
                                        <CheckCircle className="h-4 w-4 text-green-400" />
                                        <AlertDescription className="text-green-300">
                                            Message sent successfully! I'll get back to you soon.
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {submitStatus === "error" && (
                                    <Alert className="mb-6 border-red-500/50 bg-red-500/10">
                                        <AlertDescription className="text-red-300">
                                            Error sending message. Please try again or email me directly.
                                        </AlertDescription>
                                    </Alert>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <Input
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                required
                                                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                required
                                                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                                            />
                                        </div>
                                    </div>

                                    <Textarea
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        required
                                        rows={6}
                                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 resize-none"
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl text-lg font-medium"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </div>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}