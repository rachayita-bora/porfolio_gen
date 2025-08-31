import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, Calendar, Award, Users } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
      title: "Machine Learning Intern",
      company: "Prodigy Infotech",
      duration: "Internship",
      description:
        "Worked on supervised learning problems from data ingestion to model evaluation with a focus on reproducible workflows.",
      achievements: [
        "Developed and evaluated ML models (Logistic Regression, Random Forest, XGBoost) using scikit-learn",
        "Performed EDA, feature engineering, and cross-validation in Jupyter to improve model robustness",
        "Created reproducible training/evaluation pipelines with clear documentation for model comparisons",
      ],
    },
    {
      title: "Data Visualization Associate",
      company: "Excelerate",
      duration: "Associate",
      description:
        "Built business-ready dashboards and reports to communicate insights and support data-informed decisions.",
      achievements: [
        "Designed interactive dashboards in Power BI/Tableau to track KPIs and trends",
        "Prepared reliable datasets using SQL/Python and established refresh processes",
        "Collaborated with stakeholders to translate requirements into clear visual narratives",
      ],
    },
  ]

  // Compute compact pie chart data (top 5 skills + "Other") and define slice colors (max 5)
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level)
  const topFive = sortedSkills.slice(0, 5)
  const othersTotal = sortedSkills.slice(5).reduce((sum, s) => sum + s.level, 0)
  const skillsPieData = othersTotal > 0 ? [...topFive, { name: "Other", level: othersTotal }] : topFive
  const pieColors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="relative bg-muted py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="md:grid md:grid-cols-[120px_1fr] md:items-center md:gap-8">
            <div className="flex justify-center md:justify-start mb-6 md:mb-0">
              <img
                src="/profile.png"
                alt="Portrait of Rachayita Bora"
                className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-4 ring-primary/20 shadow-sm object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-3 text-balance">
                Rachayita Bora
              </h1>
              <div className="h-1 w-16 bg-primary mx-auto md:mx-0 rounded-full mb-5" />
              <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-6">
                Data Science Student & Analytics Enthusiast
              </p>
              <p className="font-sans text-lg text-foreground/80 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed text-pretty">
                Passionate final-year B.Tech student specializing in Data Science with hands-on experience in machine
                learning, data visualization, and statistical analysis. Committed to transforming complex datasets into
                actionable business insights through innovative analytical approaches and cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
                <Button size="lg" className="font-sans" asChild>
                  <a href="/Rachayita_Bora_Resume.pdf" download aria-label="Download resume">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="font-sans bg-transparent" asChild>
                  <a href="#projects" aria-label="Jump to projects">
                    View Projects
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
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
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-3">About Me</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-10" />
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-t-4 border-primary">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold mb-2">Academic Excellence</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Pursuing B.Tech in Data Science with focus on machine learning and statistical modeling
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-primary">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold mb-2">Collaborative Spirit</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Strong communication skills with experience in cross-functional team collaboration
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-primary">
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
      <section id="experience" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-3">Experience</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-10" />
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
      <section id="skills" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-3">Technical Skills</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-10" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-72 md:h-80">
              <ChartContainer
                config={{
                  skills: {
                    label: "Skill Level",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie
                      data={skillsPieData}
                      dataKey="level"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      strokeWidth={2}
                    >
                      {skillsPieData.map((entry, i) => (
                        <Cell key={`slice-${entry.name}`} fill={pieColors[i % pieColors.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold">Breakdown</h3>
              <ul className="font-sans text-sm text-muted-foreground space-y-1" aria-label="Skill breakdown list">
                {skillsPieData.map((s) => (
                  <li key={s.name} className="flex items-center justify-between">
                    <span className="text-foreground">{s.name}</span>
                    <span>{s.level}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-3">Featured Projects</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-10" />
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
                    <Badge variant="outline" className="text-xs border-accent text-accent">
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
            <div id="education">
              <h2 className="font-serif text-3xl font-bold mb-3">Education</h2>
              <div className="h-1 w-12 bg-accent rounded-full mb-7" />
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
            <div id="certifications">
              <h2 className="font-serif text-3xl font-bold mb-3">Certifications</h2>
              <div className="h-1 w-12 bg-accent rounded-full mb-7" />
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
      <section id="languages" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-3">Languages</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-7" />
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
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-3">Let's Connect</h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-7" />
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
              <a href="https://github.com/rachayita-bora" target="_blank" rel="noopener noreferrer">
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
