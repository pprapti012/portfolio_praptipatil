import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.E. Computer Engineering',
      institution: 'Theem College of Engineering',
      period: '2021 - 2025',
      status: 'In Progress'
    },
    {
      degree: 'HSC - Science',
      institution: 'Maharashtra State Board',
      period: '2019 - 2021',
      status: 'Completed'
    },
    {
      degree: 'SSC',
      institution: 'Maharashtra State Board',
      period: '2018 - 2019',
      status: 'Completed'
    }
  ];

  const leadership = [
    {
      role: 'General Secretary',
      organization: 'Jashn-E-Theem 2025',
      icon: Award,
      description: 'Leading event organization and coordination'
    },
    {
      role: 'Cultural Joint Secretary',
      organization: 'College Cultural Committee',
      icon: Users,
      description: 'Managing cultural activities and student engagement'
    },
    {
      role: 'NSS Leader',
      organization: 'National Service Scheme',
      icon: Target,
      description: 'Community service and social responsibility initiatives'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and leadership experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <div className="gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-primary-foreground" />
                </div>
                My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a passionate and dedicated Full Stack Web Developer with a strong foundation in frontend and backend technologies. 
                With hands-on experience in building responsive websites and real-time applications, I focus on creating user-friendly 
                digital solutions that balance functionality and design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My career goal is to leverage modern frameworks, problem-solving skills, and creativity to develop scalable web 
                applications while continuously learning and growing in the tech industry. I believe in writing clean, maintainable 
                code and creating exceptional user experiences.
              </p>
            </div>

            {/* Leadership Roles */}
            <div className="gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <Award className="h-4 w-4 text-primary-foreground" />
                </div>
                Leadership Experience
              </h3>
              <div className="space-y-4">
                {leadership.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-smooth">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.role}</h4>
                      <p className="text-primary text-sm font-medium">{item.organization}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center mr-3">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="bg-background/50 rounded-lg p-4 hover:bg-background/70 transition-smooth">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{item.degree}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === 'In Progress' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                        <p className="text-primary text-sm font-medium">{item.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;