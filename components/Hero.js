import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Complete
                <span className="text-emerald-600"> Health</span>
                <br />
                Companion
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access health education, connect with doctors instantly, stay informed about disease outbreaks, and find
                healthcare professionals near you - all in one powerful app.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold">
                <span>Download Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.8★</div>
                <div className="text-gray-600">App Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Medora App Interface"
                width={400}
                height={600}
                className="mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
