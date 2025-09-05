import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink, Heart } from 'lucide-react';
const Footer = () => {
  const socialLinks = [{
    icon: Mail,
    href: 'mailto:official.praptipatil@gmail.com',
    label: 'Email'
  }, {
    icon: Linkedin,
    href: 'https://github.com/pprapti012/prapti-builds-web.git',
    label: 'LinkedIn'
  }, {
    icon: Github,
    href: 'https://github.com/pprapti012',
    label: 'GitHub'
  }, {
    icon: ExternalLink,
    href: 'https://links.cuvette.tech/student/6820da19ec8516feacfa20e7',
    label: 'Portfolio'
  }];
  const quickLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="relative bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-slate-200">
                Prapti Santosh Patil
              </h3>
              <p className="text-muted-foreground mt-2">
                Full Stack Web Developer | UI/UX Enthusiast
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about creating user-friendly digital solutions that balance 
              functionality and design. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <Button key={index} variant="outline" size="sm" onClick={() => window.open(link.href, '_blank')} className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <link.icon className="h-4 w-4" />
                </Button>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => <button key={index} onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary transition-colors text-left py-1">
                  {link.name}
                </button>)}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:official.praptipatil@gmail.com" className="text-primary hover:text-primary-glow transition-colors">
                  official.praptipatil@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Maharashtra, India</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="text-foreground">Open for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>© 2025 Prapti Santosh Patil. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button onClick={scrollToTop} className="text-muted-foreground hover:text-primary transition-colors">
                Back to Top
              </button>
              <span className="text-muted-foreground">
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
    </footer>;
};
export default Footer;