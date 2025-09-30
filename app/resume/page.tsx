import { Briefcase, GraduationCap, Award, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications using Next.js, TypeScript, and Node.js. Mentoring junior developers and establishing best practices.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led migration from legacy system to modern tech stack",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects including e-commerce platforms, corporate websites, and web applications.",
    achievements: [
      "Successfully delivered 15+ client projects on time",
      "Improved code quality through implementation of testing practices",
      "Collaborated with design team to create pixel-perfect implementations",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description: "Built responsive and interactive user interfaces using React and modern CSS frameworks.",
    achievements: [
      "Developed reusable component library used across multiple projects",
      "Improved mobile user experience resulting in 25% increase in engagement",
      "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University Name",
    period: "2014 - 2018",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
]

const certifications = [
  "AWS Certified Developer - Associate",
  "Google Cloud Professional Developer",
  "Meta Front-End Developer Professional Certificate",
]

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  Tools: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  Other: ["Agile", "Testing", "UI/UX Design", "Team Leadership"],
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Resume</h1>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="mr-2" size={20} />
              Download PDF
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">My professional experience and qualifications</p>
        </div>

        {/* Experience */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-lg">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
