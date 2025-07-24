export default function Stats() {
  const stats = [
    { number: "50,000+", label: "Happy Users" },
    { number: "1,000+", label: "Certified Doctors" },
    { number: "24/7", label: "Support Available" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ]

  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-emerald-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
