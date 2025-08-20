import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, Calendar, Award, Users } from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Excel", level: 95 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Visualization", level: 85 },
    { name: "Statistics", level: 80 },
    { name: "Data Analysis", level: 90 },
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Matplotlib", level: 75 },
    { name: "Seaborn", level: 75 },
  ]

  const projects = [
    {
      title: "Covid-19 Data Dashboard",
      description:
        "Comprehensive interactive dashboard analyzing global COVID-19 trends, vaccination rates, and mortality statistics. Built with real-time data integration and responsive design for stakeholder decision-making.",
      tools: ["Streamlit", "Tableau", "Power BI", "Python", "Pandas"],
      skills: ["Data visualization", "Dashboarding", "Real-time Analytics"],
      image: "/covid-19-dashboard.png",
      duration: "3 months",
      impact: "Analyzed 500K+ data points across 195 countries",
    },
    {
      title: "Job Trends in Data Science",
      description:
        "Comprehensive LinkedIn job market analysis identifying key trends, salary patterns, and skill demands in the data science industry. Provided actionable insights for career development and market positioning.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "BeautifulSoup"],
      skills: ["Data analysis", "Web Scraping", "Market Research"],
      image: "/data-science-job-trends.png",
      duration: "2 months",
      impact: "Analyzed 10K+ job postings and identified top 15 in-demand skills",
    },
    {
      title: "Titanic Survival Prediction",
      description:
        "Advanced machine learning model achieving 84% accuracy in predicting passenger survival rates. Implemented comprehensive feature engineering and model optimization techniques.",
      tools: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn", "XGBoost"],
      skills: ["Machine Learning", "Data Preprocessing", "EDA", "Model Optimization"],
      image: "/titanic-survival-prediction.png",
      duration: "1 month",
      impact: "Achieved 84% prediction accuracy with ensemble methods",
    },
  ]

  const certificates = [
    { name: "Google Data Analytics Professional Certificate", provider: "Coursera", year: "2024" },
    { name: "Advanced Excel for Data Analysis", provider: "Udemy", year: "2024" },
    { name: "Python for Data Science", provider: "Meta", year: "2023" },
    { name: "Machine Learning in Python", provider: "IBM", year: "2024" },
  ]

  const experiences = [
    {
      title: "Data Science Intern",
      company: "Academic Research Project",
      duration: "Jan 2024 - Present",
      description:
        "Leading data analysis initiatives for academic research, focusing on statistical modeling and predictive analytics.",
      achievements: [
        "Developed automated data processing pipelines reducing analysis time by 60%",
        "Created interactive dashboards for research presentation to faculty",
        "Collaborated with cross-functional teams on data-driven research projects",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">Rachayita Bora</h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-6">
            Data Science Student & Analytics Enthusiast
          </p>
          <p className="font-sans text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate final-year B.Tech student specializing in Data Science with hands-on experience in machine
            learning, data visualization, and statistical analysis. Committed to transforming complex datasets into
            actionable business insights through innovative analytical approaches and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="font-sans">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="font-sans bg-transparent">
              View Projects
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              rachayitabora2005@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 6297425681
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Hooghly, West Bengal, India
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold mb-2">Academic Excellence</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Pursuing B.Tech in Data Science with focus on machine learning and statistical modeling
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold mb-2">Collaborative Spirit</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Strong communication skills with experience in cross-functional team collaboration
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Actively pursuing certifications and staying updated with latest data science trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Experience</h2>
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-serif text-xl">{exp.title}</CardTitle>
                    <CardDescription className="font-sans text-lg">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="font-sans">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="font-sans text-sm font-medium">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="font-sans text-sm text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-sans font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.duration}
                    </Badge>
                  </div>
                  <CardDescription className="font-sans">{project.description}</CardDescription>
                  <p className="font-sans text-xs text-primary font-medium mt-2">{project.impact}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-sans text-sm font-medium mb-2">Tools:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full font-sans">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Education</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Computer Science & Engineering (Data Science)</CardTitle>
                  <CardDescription className="font-sans">MCKV INSTITUTE OF ENGINEERING • Howrah, WB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-muted-foreground">Expected Graduation: June 2027</p>
                  <p className="font-sans text-sm text-foreground mt-2">
                    Relevant Coursework: Machine Learning, Statistics, Database Management, Data Structures & Algorithms
                  </p>
                </CardContent>
              </Card>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Higher Secondary (Science)</CardTitle>
                  <CardDescription className="font-sans">Nalikul Balika Viddyalaya</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-muted-foreground">Completed: April 2023</p>
                  <p className="font-sans text-sm text-foreground mt-2">
                    Subjects: Mathematics, Physics, Chemistry, Computer Science
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Certifications</h2>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-sans font-medium">{cert.name}</p>
                          <p className="font-sans text-sm text-muted-foreground">{cert.provider}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8">Languages</h2>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              English
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Hindi
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Bengali
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="font-sans text-lg text-muted-foreground mb-8">
            I'm always interested in discussing data science opportunities, collaborations, and innovative projects.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="font-sans" asChild>
              <a href="mailto:rachayitabora2005@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-sans bg-transparent" asChild>
              <a href="https://github.com/rachayitabora" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-sans bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/rachayita-bora/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
