import { Briefcase, GraduationCap, Award, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
 {
    title: "Freelance web or design",
    company: "Freelance",
    period: "Jul-2025 - Present",
    description: "Build fullstack web application",
    jobDescs: [],
  },
 {
    title: "Cashier, Bartender",
    company: "Steak Holic",
    period: "Feb -2025 - Jul-2025",
    description: "The experience is not displayed because I consider it less relevant.",
    jobDescs: [],
  },
  {
    title: "Mobile Developer Intern",
    company: "PT Qtera Mandiri",
    period: "Oct-2023 - Jan-2024",
    description: "",
    jobDescs: [
      "Implementation of Figma designs into a mobile application",
      "Developed user interface components",
      "Integrated API connections using the MVVM architecture",
      "Conducted API testing with Postman",
      "Performed unit testing to avoid undetected bugs from manual testing",
      "Collaborated with other developers using GitHub for structured and collaborative work",
      "Utilized workflow management tools like Trello for validation and review",
    ],
  },
 
  {
    title: "Technician Project",
    company: "PT Heinz ABC Indonesia",
    period: "Jun-2021 - Aug-2022",
    description: "The experience is not displayed because I consider it less relevant.",
    jobDescs: [],
  },
  {
    title: "Maintenance Support",
    company: "PT Funworld Prima",
    period: "Nov-2018 - Mar-2020",
    description: "The experience is not displayed because I consider it less relevant.",
    jobDescs: [],
  },
]

const formalEducation = [
  {
    degree: "S1 Information Systems",
    institution: "Bina Insany University, Bekasi, Indonesia",
    period: "2022 - Present",
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
                  <p className="text-muted-foreground mb-4">{exp?.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Job Desc:</p>
                    <ul className="space-y-1">
                      {exp.jobDescs.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Formal Education */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Formal Education</h2>
          </div>

          <div className="space-y-6">
            {formalEducation.map((edu, index) => (
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
