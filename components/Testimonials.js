import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    image:
      "https://picsum.photos/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    content:
      "Medora has been a game-changer for my family's healthcare. The instant chat with doctors saved us multiple emergency room visits.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Cardiologist",
    image:
      "https://picsum.photos/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    content:
      "As a healthcare provider, I appreciate how Medora connects me with patients efficiently while maintaining the highest standards of care.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Mother of 2",
    image:
      "https://picsum.photos/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content:
      "The disease outbreak alerts helped us stay safe during the flu season. The health education resources are incredibly valuable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied users who trust Medora for their
            healthcare needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <Image
                  src={
                    testimonial.image ||
                    "https://picsum.photos/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
                  }
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
