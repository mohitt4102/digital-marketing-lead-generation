
import { AlertTriangle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-slate-900">The Lead Gen Struggle is Real</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Visitors bounce without leaving contact info</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Complex forms kill conversion rates</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Tech setup takes forever (and breaks constantly)</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Missing leads because notifications arrive too late</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-slate-900">Finally, Lead Gen That Actually Works</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p className="flex items-start space-x-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Custom forms that convert like crazy</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Auto-generated lead magnets in minutes</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Instant notifications the moment someone signs up</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Direct export to Google Sheets & Slack</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
