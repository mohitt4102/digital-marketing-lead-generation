
import { ArrowRight, MousePointer, Settings, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      title: "Create Your Lead Magnet",
      description: "Build custom forms, checklists, or auto-generate PDFs in under 5 minutes"
    },
    {
      icon: MousePointer,
      title: "Embed & Share",
      description: "Drop your form anywhere—website, social media, or landing pages"
    },
    {
      icon: TrendingUp,
      title: "Watch Leads Pour In",
      description: "Get instant notifications and export leads to your favorite tools"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            From setup to leads in less than 10 minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 left-full w-full flex items-center justify-center md:block hidden">
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-slate-400 -translate-x-8" />
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
