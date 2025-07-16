
import { Link } from "react-router-dom";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Lourd Vincent</span>
                  <br />
                  <span className="text-blue-400">Tapispisan</span>
                </h1>
                <div className="h-1 w-20 bg-blue-400"></div>
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  Aspiring Cloud & DevOps Professional
                </p>
              </div>

              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Recent Computer Engineering graduate focused on launching a career in cloud computing 
                and automation. Passionate about DevOps, process optimization, and efficiency in 
                technical environments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  <Link to="/portfolio">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                >
                  <a
                    href="https://mypersonal-porfolio-vincent.s3.ap-southeast-1.amazonaws.com/updated_resume.pdf?X-Amz-
                    Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA23SN34APDS4HNY5W%2F20250625%2Fap-southeast-1%2Fs3%2Faws4_
                    request&X-Amz-Date=20250625T060359Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=777bd91
                    af2a144c2aae583e9fa1e787163087d8cf0841c7283569d55b70c08e4"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 pt-4">
                <a
                  href="https://linkedin.com/in/tapispisan-lourd-vincent-m-060871278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/ceeeentd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400/20 shadow-2xl">
                  <img
                    src="https://i.postimg.cc/hhFR2xXg/gradpic.jpg"
                    alt="Lourd Vincent Tapispisan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row text-center">
            <div className="flex-1 space-y-2">
              <div className="text-3xl font-bold text-blue-400">2024</div>
              <div className="text-gray-400">Graduate</div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="text-3xl font-bold text-blue-400">AWS</div>
              <div className="text-gray-400">Certified</div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="text-3xl font-bold text-blue-400">Cloud</div>
              <div className="text-gray-400">Focused</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
