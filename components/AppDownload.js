import { Smartphone } from "lucide-react";
import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Download Medora Today
              </h2>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Take control of your health with our comprehensive mobile app.
                Available on iOS and Android.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-3">
                <Image
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=24&h=24&fit=crop&crop=center"
                  alt="Apple"
                  width={24}
                  height={24}
                />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>

              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-3">
                <Image
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=24&h=24&fit=crop&crop=center"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Smartphone className="h-6 w-6 text-emerald-200" />
              <span className="text-emerald-100">Available on all devices</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=500&fit=crop&crop=center"
              alt="Download Medora App"
              width={300}
              height={500}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
