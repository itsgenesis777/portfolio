import { Link } from "react-router-dom";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import myPhoto from "@/images/profpic.png";

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
                  <span className="text-white">John Genesis</span>
                  <br />
                  <span className="text-blue-400">Pamintuan </span>
                </h1>
                <div className="h-1 w-20 bg-blue-400"></div>
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  Cloud Consultant • Cat Dad🐾 • Anime Lover	
                </p>
              </div>

              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                I'm a freelance Cloud Consultant, Electronics Engineer by degree, and a cloud enthusiast at heart.
                I spend my time balancing serverless setups with cat cuddles, watering too many plants, and catching up on anime when life allows it.
                Whether it's AWS, automation, or just figuring things out as I go — I’m here for it.
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
                    href="https://genesis27cv.s3.ap-southeast-1.amazonaws.com/JGMPamintuanCV_2025_061125.pdf"
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
                  href="https://www.linkedin.com/in/johngenesispamintuan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/itsgenesis777"
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
                <div className="transition-transform duration-300 hover:scale-105 w-80 h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-xl bg-white">
                  <img
                    src={myPhoto}
                    alt="John Genesis Pamintuan"
                    className="w-full h-full object-contain"
                  />
                </div>
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
              <div className="text-3xl font-bold text-blue-400">Made by Gen</div>
              <div className="text-gray-400">Built with cats 🐾💻🐈‍⬛</div>
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
