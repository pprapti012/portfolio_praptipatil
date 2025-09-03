import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="gradient-primary bg-clip-text text-transparent">
                  Prapti Santosh
                </span>
                <br />
                <span className="text-foreground">Patil</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Full Stack Web Developer | UI/UX Enthusiast | Problem Solver
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating user-friendly digital solutions that balance functionality and design. 
              I focus on building scalable web applications with modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="gradient-primary hover:shadow-button transition-smooth group"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full gradient-primary opacity-20 blur-2xl scale-110 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden gradient-card p-2 shadow-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={`${profilePicture}?v=${Date.now()}`}
                    alt="Prapti Santosh Patil"
                    className="w-full h-full object-cover scale-[1.6] transition-transform duration-500 hover:scale-[1.75]"
                    key={Date.now()}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 gradient-primary rounded-full flex items-center justify-center animate-float">
                <span className="text-primary-foreground font-bold text-sm">Full Stack</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-primary text-xs font-bold">UI/UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;