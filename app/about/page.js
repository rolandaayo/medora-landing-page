import { Heart, Award, Globe, Target, Eye, Shield } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "We put patients at the center of everything we do, ensuring accessible and compassionate healthcare for all.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Your health data is sacred to us. We maintain the highest standards of privacy and security protection.",
  },
  {
    icon: Award,
    title: "Medical Excellence",
    description:
      "We work only with certified, licensed healthcare professionals to ensure the highest quality of care.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Making quality healthcare accessible to everyone, regardless of location or economic status.",
  },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Board-certified physician with 15+ years of experience in emergency medicine and telemedicine.",
  },
  {
    name: "James Rodriguez",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Healthcare technology entrepreneur passionate about democratizing access to quality medical care.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Technology",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former Google Health engineer with expertise in AI-powered healthcare solutions and medical informatics.",
  },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionizing
                <span className="text-emerald-600"> Healthcare</span>
                <br />
                Access
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Medora, we believe that quality healthcare should be accessible to everyone, everywhere. Our mission
                is to bridge the gap between patients and healthcare providers through innovative technology.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medora Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Target className="h-12 w-12 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize healthcare by providing instant access to medical professionals, comprehensive health
                education, and real-time health information through cutting-edge technology. We strive to make quality
                healthcare accessible, affordable, and available to everyone, regardless of their location or
                circumstances.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Eye className="h-12 w-12 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a world where healthcare barriers no longer exist, where every person has immediate access to
                medical expertise, and where technology empowers both patients and healthcare providers to achieve
                better health outcomes together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do at Medora</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to transforming healthcare</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-emerald-100">Making a difference in healthcare accessibility worldwide</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-emerald-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1,000+</div>
              <div className="text-emerald-100">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100,000+</div>
              <div className="text-emerald-100">Consultations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-emerald-100">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
