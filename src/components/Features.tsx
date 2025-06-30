
import { Zap, Bell, Download, FileText, Share2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Custom Lead Capture Forms",
      description: "Build beautiful forms and checklists that actually convert visitors into leads"
    },
    {
      icon: Zap,
      title: "Auto-Generated Lead Magnets",
      description: "Create PDFs, templates, and resources instantly—no design skills needed"
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Get pinged the moment a new lead signs up, so you never miss an opportunity"
    },
    {
      icon: Download,
      title: "Smart Lead Export",
      description: "Send leads directly to Google Sheets, CSV, or your favorite CRM"
    },
    {
      icon: Share2,
      title: "Seamless Integrations",
      description: "Connect with Slack, Zapier, and 100+ marketing tools you already use"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Capture More Leads
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stop losing potential customers. Start converting them with tools that actually work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
