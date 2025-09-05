import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code2, Database, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Competitive Programming Course by Devtown',
      description: 'Gained algorithmic problem-solving and coding techniques',
      icon: Code2,
      category: 'Programming',
      certificateUrl: 'https://cert.devtown.in/verify/kqK2qEWC'
    },
    {
      title: 'Core Concepts of Java by Devtown',
      description: 'Covered Java fundamentals including OOP principles',
      icon: Code2,
      category: 'Programming',
      certificateUrl: 'https://cert.devtown.in/verify/9UjaAzcV'
    },
    {
      title: 'Self-paced Full Stack Web Development Program by Devtown',
      description: 'Built full stack web apps using HTML, CSS, JS, Node.js, and React',
      icon: BookOpen,
      category: 'Web Development',
      certificateUrl: 'https://cert.devtown.in/verify/a5jbHTuK'
    },
    {
      title: 'Core Concepts of C++ by Devtown',
      description: 'Studied C++ Basics, OOP, and Standard Template Library',
      icon: Code2,
      category: 'Programming',
      certificateUrl: 'https://cert.devtown.in/verify/rXCU2SWL'
    },
    {
      title: 'Full Stack Web Development Training by Devtown',
      description: 'Completed guided training in both frontend and backend technologies',
      icon: BookOpen,
      category: 'Web Development',
      certificateUrl: 'https://cert.devtown.in/verify/hMm4BC7t'
    },
    {
      title: 'Data Structures and Algorithms Course by Devtown',
      description: 'Gained knowledge of key data structures and algorithms for coding',
      icon: Database,
      category: 'Computer Science',
      certificateUrl: 'https://cert.devtown.in/verify/guBCpA7e'
    },
    {
      title: 'Self-paced Full Stack Web Development by Devtown',
      description: 'Independently completed hands-on modules and real-world projects',
      icon: BookOpen,
      category: 'Web Development',
      certificateUrl: 'https://cert.devtown.in/verify/8X9DePiW'
    },
  ];

  const courses = [
    {
      title: 'Data Science using Python - Livetech INDIA',
      description: 'Completed 5 Days workshop on "Data Science using Python" from 30th Jan 2023 to 3rd Feb 2023',
      duration: '01/2023 – 02/2023',
      icon: Database
    },
    {
      title: 'DIPLOMA IN SOFTWARE ENGINEERING (DSE)',
      description: 'Completed and passed the examination for Diploma in Software Engineering (DSE) 12 Months Course with 82.66% and awarded A+ grade',
      duration: '12/2021 – 12/2022',
      icon: Code2
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="bg-clip-text text-slate-200">Courses</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and completed courses that enhance my technical expertise
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {cert.category}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>

                      {/* Certificate Link */}
                      {cert.certificateUrl && (
                        <Button asChild variant="link" className="p-0 h-auto text-sm text-primary flex items-center gap-1">
                          <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                            View Certificate <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses & Workshops */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Courses & Workshops</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <course.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {course.duration}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">{course.title}</h4>
                      <p className="text-muted-foreground text-sm">{course.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
