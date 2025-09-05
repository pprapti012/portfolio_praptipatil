import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Smartphone, Palette, GitBranch, Users, Lightbulb, MessageCircle, Clock, Target, Brain } from 'lucide-react';
const Skills = () => {
  const technicalSkills = [{
    category: 'Frontend Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-500'
  }, {
    category: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Java', 'Express.js', 'WebSockets', 'RESTful APIs', 'Server Architecture'],
    color: 'from-green-500 to-emerald-500'
  }, {
    category: 'Database & Tools',
    icon: Code2,
    skills: ['MongoDB', 'MySQL', 'GitHub', 'Postman', 'Version Control'],
    color: 'from-purple-500 to-pink-500'
  }, {
    category: 'Design & UX',
    icon: Palette,
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Experience', 'Design Systems'],
    color: 'from-orange-500 to-red-500'
  }];
  const softSkills = [{
    name: 'Leadership',
    icon: Users,
    description: 'Leading teams and organizing events',
    level: 90
  }, {
    name: 'Problem Solving',
    icon: Lightbulb,
    description: 'Analytical thinking and creative solutions',
    level: 85
  }, {
    name: 'Communication',
    icon: MessageCircle,
    description: 'Clear and effective communication',
    level: 88
  }, {
    name: 'Time Management',
    icon: Clock,
    description: 'Efficient project and deadline management',
    level: 82
  }, {
    name: 'Goal-Oriented',
    icon: Target,
    description: 'Focused on achieving objectives',
    level: 92
  }, {
    name: 'Adaptability',
    icon: Brain,
    description: 'Quick learning and adaptation to new technologies',
    level: 87
  }];
  return <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-slate-200">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">{category.category}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        {skill}
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-foreground">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Proficiency</span>
                          <span className="text-xs font-medium text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="h-2 gradient-primary rounded-full transition-all duration-1000 ease-out" style={{
                        width: `${skill.level}%`
                      }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;