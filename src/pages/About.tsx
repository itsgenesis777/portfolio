
import { GraduationCap, Briefcase, Heart, Target, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about technology, continuous learning, and making a meaningful impact in the cloud computing landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">My Journey</h2>
              <p className="text-gray-400 leading-relaxed">
                As a recent Computer Engineering graduate, I'm driven by a passion for cloud computing 
                and automation technologies. My journey began with a fascination for how technology can 
                streamline processes and create efficient solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in the power of continuous learning and staying current with emerging technologies. 
                My focus on DevOps practices and cloud infrastructure stems from a desire to bridge the gap 
                between development and operations, creating seamless, automated workflows.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm committed to contributing to teams that embrace innovation and utilize cutting-edge 
                cloud and automation technologies to solve real-world problems.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Core Values</h3>
              <div className="grid gap-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Continuous Learning & Growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Process Optimization & Efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Collaborative Team Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-300">Bachelor of Science in Computer Engineering</h4>
                        <p className="text-sm text-gray-400">Graduated October 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <Briefcase className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-300">Freelance Cloud Support Engineer</h4>
                        <p className="text-sm text-blue-400">CAMPF Cloud Consulting Services Inc.</p>
                        <p className="text-sm text-gray-400">June 2023 - Present</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Providing cloud consulting services and technical solutions for various projects.
                        </p>
                        <h4 className="font-medium text-gray-300">CSR/TSR</h4>
                        <p className="text-sm text-blue-400">Foundever</p>
                        <p className="text-sm text-gray-400">Oct 2024 - May 2025</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Providing technical support over the phone to customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-600/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Certifications</h3>
                    <div className="space-y-3">
                      <div>
                        <a 
                          href="https://cp.certmetrics.com/amazon/en/public/verify/credential/facce69c0bff4fb3b415993bd5dea47a"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center space-x-2 hover:text-blue-400 transition-colors"
                        >
                          <h4 className="font-medium text-gray-300 group-hover:text-blue-400">
                            AWS Certified Cloud Practitioner
                          </h4>
                          <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-400" />
                        </a>
                        <p className="text-sm text-gray-400">Amazon Web Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
