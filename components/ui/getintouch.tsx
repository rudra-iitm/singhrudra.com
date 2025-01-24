"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.send("service_mu0td4s", "template_pkiftva", formData, 'k2xStAY3_FILFj76h').then(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (response) => {
        setStatus("Message sent successfully!")
        setIsSuccess(true)
        setTimeout(() => {
          setIsDialogOpen(false)
          setIsSuccess(false)
          setFormData({ name: "", email: "", message: "" })
        }, 2000)
        setIsSubmitting(false)
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (error) => {
        setStatus("Failed to send message. Please try again.")
        setIsSubmitting(false)
      },
    )
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="relative mt-10 bg-violet-600 text-white group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get in touch
            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
          </span>
          <motion.div
            className="absolute inset-0 bg-violet-600"
            initial={false}
            animate={{
              scale: isDialogOpen ? 1.5 : 1,
              opacity: isDialogOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] sm:max-w-[425px] bg-gradient-to-br from-slate-900 to-slate-800 border-violet-500/20 text-white">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center justify-center p-6 space-y-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
              </motion.div>
              <p className="text-xl font-bold text-white">Message Sent!</p>
              <p className="text-sm text-gray-300 text-center">
                Thank you for reaching out. I’ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative space-y-6"
            >
              <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                Get in Touch with Me
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-violet-500/20 text-white placeholder:text-gray-400 focus:border-violet-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-violet-500/20 text-white placeholder:text-gray-400 focus:border-violet-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-violet-500/20 text-white placeholder:text-gray-400 focus:border-violet-500 transition-colors min-h-[100px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 text-white relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-violet-600"
                    initial={false}
                    animate={{
                      scale: isSubmitting ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </form>
              {status && !isSuccess && <p className="text-center mt-4 text-sm text-red-400">{status}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
