import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Zap } from 'lucide-react';
const Portfolio = () => {
  const projects = [{
    title: 'Theem College Website',
    description: 'A modern, responsive website for Theem College of Engineering with enhanced UI/UX design, featuring improved navigation, mobile optimization, and user-friendly interface.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Web Development',
    features: ['Responsive design for all devices', 'Enhanced user experience', 'Modern UI/UX principles', 'Optimized performance', 'Cross-browser compatibility'],
    githubUrl: '#',
    liveUrl: '#',
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'ChitChat Real-Time Chat App',
    description: 'A real-time chat application built with Java and WebSockets, featuring group chat functionality, instant messaging, and seamless communication between users.',
    image: '/api/placeholder/600/400',
    technologies: ['Java', 'WebSockets', 'Real-time Communication', 'Group Chat'],
    category: 'Real-time Application',
    features: ['Real-time messaging', 'Group chat functionality', 'WebSocket implementation', 'User authentication', 'Message history'],
    githubUrl: '#',
    liveUrl: '#',
    icon: Zap,
    color: 'from-purple-500 to-pink-500'
  }];
  return <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-slate-200">Portfolio</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my recent projects and technical achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 bg-muted">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-20 w-20 text-primary opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Overlay with buttons on hover */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="gradient-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        {tech}
                      </Badge>)}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1 gradient-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center">
          <div className="gradient-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and expanding my portfolio. 
              Check back regularly for updates or connect with me to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://github.com/yourusername', '_blank')}>
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </Button>
              <Button className="gradient-primary" onClick={() => window.open('https://links.cuvette.tech/student/6820da19ec8516feacfa20e7', '_blank')}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Portfolio Links
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;