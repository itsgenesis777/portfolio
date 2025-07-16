import { Github, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: `A sleek portfolio site backed by a serverless AWS architecture, featuring a dynamic contact form powered by API Gateway, Lambda, and SES for secure messaging and email notifications. The site is hosted on S3, distributed globally via CloudFront, and mapped to a custom domain using Route 53 for DNS management.`,
      github: "https://github.com/ceeeentd/personal-portfolio",
      type: "project"
    },
    {
      title: "CI/CD Pipeline for Portfolio",
      description:
        "Implemented continuous deployment for this website using GitHub Actions. On each push to main, the app is automatically built, synced to S3, and invalidated in CloudFront — enabling zero-downtime updates and fast iteration.",
      type: "project",
      github: "https://github.com/ceeeentd/personal-portfolio"
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Portfolio</span>
          </h1>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my cloud engineering and DevOps projects, demonstrating practical applications of modern technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col justify-between ${
                project.type === 'placeholder' ? 'border-dashed' : ''
              }`}
            >
              <CardContent className="p-5 flex flex-col justify-between h-full">
                {project.type === 'placeholder' ? (
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Plus className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  </div>
                ) : (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    </div>
                    <div className="flex">
                      <Button
                        size="sm"
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub Repo
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Placeholder cards */}
          {[1, 2].map((index) => (
            <Card key={`placeholder-${index}`} className="bg-gray-800 border-gray-700 border-dashed">
              <CardContent className="p-6 text-center">
                <div className="py-6">
                  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Plus className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Future Project</h3>
                  <p className="text-gray-400 text-sm">
                    More cloud and DevOps projects coming soon
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 font-semibold">☁️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Architecture</h3>
              <p className="text-gray-400 text-sm">
                AWS-based infrastructure projects showcasing scalable and secure cloud solutions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 font-semibold">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">DevOps Automation</h3>
              <p className="text-gray-400 text-sm">
                CI/CD pipelines, infrastructure as code, and process automation solutions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-semibold">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Containerization</h3>
              <p className="text-gray-400 text-sm">
                Docker and Kubernetes implementations for scalable application deployment
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
