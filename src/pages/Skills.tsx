
import { 
  Monitor, 
  Terminal, 
  GitBranch, 
  Network, 
  Cloud, 
  Settings, 
  Container, 
  Activity, 
  Code 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Windows", "Linux"],
      color: "blue"
    },
    {
      title: "Scripting",
      icon: Terminal,
      skills: ["Bash", "Python"],
      color: "green"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git"],
      color: "orange"
    },
    {
      title: "Networking",
      icon: Network,
      skills: ["Fundamental networking concepts"],
      color: "purple"
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      skills: ["AWS Certified Cloud Practitioner", "AWS Services"],
      color: "blue"
    },
    {
      title: "Infrastructure as Code",
      icon: Settings,
      skills: ["Ansible", "Terraform", "CloudFormation"],
      color: "red"
    },
    {
      title: "Containerization",
      icon: Container,
      skills: ["Docker", "Kubernetes", "Microservices"],
      color: "cyan"
    },
    {
      title: "CI/CD & Monitoring",
      icon: Activity,
      skills: ["CI/CD Pipelines", "Prometheus, Grafana, CloudWatch", "Jenkins, Github Actions"],
      color: "yellow"
    },
    {
      title: "Web Technologies",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600/20 text-blue-400 border-blue-400/30",
      green: "bg-green-600/20 text-green-400 border-green-400/30",
      orange: "bg-orange-600/20 text-orange-400 border-orange-400/30",
      purple: "bg-purple-600/20 text-purple-400 border-purple-400/30",
      red: "bg-red-600/20 text-red-400 border-red-400/30",
      cyan: "bg-cyan-600/20 text-cyan-400 border-cyan-400/30",
      yellow: "bg-yellow-600/20 text-yellow-400 border-yellow-400/30",
      pink: "bg-pink-600/20 text-pink-400 border-pink-400/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h1>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise in cloud computing, DevOps, and automation technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full ${category.color === 'blue' ? 'bg-blue-400' : 
                        category.color === 'green' ? 'bg-green-400' :
                        category.color === 'orange' ? 'bg-orange-400' :
                        category.color === 'purple' ? 'bg-purple-400' :
                        category.color === 'red' ? 'bg-red-400' :
                        category.color === 'cyan' ? 'bg-cyan-400' :
                        category.color === 'yellow' ? 'bg-yellow-400' :
                        'bg-pink-400'}`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Always <span className="text-blue-400">Learning</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest developments 
                in cloud computing, DevOps practices, and automation tools. I regularly engage with online 
                courses, documentation, and hands-on projects to expand my skillset and deepen my understanding 
                of emerging technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
