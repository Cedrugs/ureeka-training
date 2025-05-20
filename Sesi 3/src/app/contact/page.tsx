import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    return (
        <>
            <section id="Contact" className="flex justify-center items-center h-[100vh]">
                <Card className="w-[30rem]">
                    <CardHeader>
                        <CardTitle>Contact Me</CardTitle>
                        <CardDescription>I will get in touch with you soon!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name" className="text-base">Name</Label>
                                    <Input id="name" placeholder="John Doe" className="border-white/[0.2] hover:border-white focus:border-2 text-base"/>
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email" className="text-base">Email</Label>
                                    <Input id="email" placeholder="me@example.com" className="border-white/[0.2] hover:hover:border-white text-xl"/>
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email" className="text-base">Message</Label>
                                    <Textarea placeholder="Type your message here." className="flex border-white/[0.2] hover:hover:border-white text-base"/>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button variant="outline" className="border-white/[0.2] hover:border-white text-base">Send</Button>
                    </CardFooter>
                </Card>
            </section>
        </>
    )
}