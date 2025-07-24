export const metadata = {
  title: "Medora - Your Complete Health Companion",
  description:
    "Access health education, real-time chat with doctors, disease outbreak alerts, and find nearby healthcare professionals with Medora.",
}

import Hero from "@/components/Hero"
import Features from "@/components/Features"
import AppDownload from "@/components/AppDownload"
import Testimonials from "@/components/Testimonials"
import Stats from "@/components/Stats"

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <AppDownload />
    </main>
  )
}
