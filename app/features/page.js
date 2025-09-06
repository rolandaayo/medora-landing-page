import {
  BookOpen,
  MessageCircle,
  AlertTriangle,
  MapPin,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
} from "lucide-react";
import Image from "next/image";

const mainFeatures = [
  {
    icon: BookOpen,
    title: "Comprehensive Health Education",
    description:
      "Access a vast library of medical articles, health guides, and educational content curated by certified medical professionals.",
    features: [
      "Medical articles & guides",
      "Video tutorials",
      "Interactive health assessments",
      "Personalized recommendations",
    ],
    image:
      "https://picsum.photos/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: MessageCircle,
    title: "Real-time Medical Chat",
    description:
      "Connect instantly with licensed doctors and healthcare professionals for immediate medical consultation and advice.",
    features: [
      "24/7 doctor availability",
      "Secure messaging",
      "Video consultations",
      "Prescription management",
    ],
    image:
      "https://picsum.photos/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: AlertTriangle,
    title: "Disease Outbreak Monitoring",
    description:
      "Stay informed about disease outbreaks and health emergencies in your area with real-time alerts and prevention guidelines.",
    features: [
      "Real-time outbreak alerts",
      "Location-based notifications",
      "Prevention guidelines",
      "Health authority updates",
    ],
    image:
      "https://picsum.photos/photo-1576091160550-2173dba0efed?w=600&h=400&fit=crop&crop=center",
  },
  {
    icon: MapPin,
    title: "Healthcare Provider Locator",
    description:
      "Find and connect with healthcare professionals, clinics, and hospitals near your location with detailed information and reviews.",
    features: [
      "GPS-based search",
      "Provider profiles & reviews",
      "Appointment booking",
      "Insurance verification",
    ],
    image:
      "https://picsum.photos/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "HIPAA Compliant Security",
    description:
      "Your health data is protected with military-grade encryption and HIPAA-compliant security measures.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Access healthcare support anytime, anywhere with our round-the-clock medical assistance.",
  },
  {
    icon: Users,
    title: "Family Health Management",
    description:
      "Manage health records and appointments for your entire family from a single account.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "All healthcare providers on our platform are verified and licensed medical professionals.",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description:
      "Get personalized health insights and recommendations powered by advanced AI technology.",
  },
];

export default function Features() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-emerald-600"> Better Health</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Medora's comprehensive suite of features can transform
            your healthcare experience and keep you connected to the care you
            need.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={
                    feature.image ||
                    "https://picsum.photos/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center"
                  }
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Features You'll Love
            </h2>
            <p className="text-xl text-gray-600">
              Additional capabilities that make Medora your complete health
              companion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of users who trust Medora for their health and
            wellness needs.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold">
            Download Medora Now
          </button>
        </div>
      </section>
    </main>
  );
}
