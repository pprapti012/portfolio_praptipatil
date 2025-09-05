import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Palette, Database, Zap, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
const Services = () => {
  const services = [{
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development using modern technologies and frameworks.',
    icon: Code,
    features: ['Custom web applications', 'Responsive design implementation', 'Database integration', 'API development and integration', 'Performance optimization'],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  }, {
    title: 'Frontend Development & UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces with exceptional user experience.',
    icon: Palette,
    features: ['React.js applications', 'UI/UX design in Figma', 'Interactive prototypes', 'Cross-browser compatibility', 'Mobile-first approach'],
    color: 'from-purple-500 to-pink-500',
    popular: false
  }, {
    title: 'Backend Development',
    description: 'Robust server-side solutions with secure APIs and efficient data management.',
    icon: Database,
    features: ['RESTful API development', 'Database design and optimization', 'Server architecture', 'Authentication systems', 'Third-party integrations'],
    color: 'from-green-500 to-emerald-500',
    popular: false
  }, {
    title: 'Real-Time Applications',
    description: 'Dynamic applications with live updates and instant communication features.',
    icon: Zap,
    features: ['WebSocket implementation', 'Live chat systems', 'Real-time notifications', 'Collaborative features', 'Event-driven architecture'],
    color: 'from-orange-500 to-red-500',
    popular: false
  }, {
    title: 'Freelancing & Project Support',
    description: 'Flexible project assistance and consultation for your development needs.',
    icon: Briefcase,
    features: ['Project consultation', 'Code review and optimization', 'Bug fixes and maintenance', 'Feature implementation', 'Technical mentoring'],
    color: 'from-indigo-500 to-purple-500',
    popular: false
  }];
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-slate-200">Services</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className={`gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group relative overflow-hidden ${service.popular ? 'ring-2 ring-primary' : ''}`}>
              {/* Popular Badge */}
              {service.popular && <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>}

              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>)}
                </div>

                {/* CTA Button */}
                <Button onClick={scrollToContact} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-button">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to start your project? Let's discuss your requirements and create something amazing together.
          </p>
          <Button size="lg" onClick={scrollToContact} className="gradient-primary hover:shadow-button transition-smooth">
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;