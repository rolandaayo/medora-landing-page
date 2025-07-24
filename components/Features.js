import { BookOpen, MessageCircle, AlertTriangle, MapPin, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Health Education",
    description:
      "Access comprehensive health resources, articles, and educational content curated by medical professionals.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description:
      "Connect instantly with certified doctors and healthcare professionals for immediate medical consultation.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: AlertTriangle,
    title: "Disease Outbreak Alerts",
    description: "Stay informed about disease outbreaks in your area with real-time notifications and prevention tips.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: MapPin,
    title: "Find Nearby Doctors",
    description:
      "Locate healthcare professionals, clinics, and hospitals near your location with detailed information.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your health data is protected with end-to-end encryption and HIPAA-compliant security measures.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access healthcare support anytime, anywhere with our round-the-clock medical assistance.",
    color: "bg-teal-100 text-teal-600",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Better Health</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Medora combines cutting-edge technology with medical expertise to provide comprehensive healthcare solutions
            at your fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
