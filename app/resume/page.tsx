import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animations";
import { portfolioSkills } from "@/lib/skills";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "PT Herca Cipta Dermal Perdana",
    period: "December 2025 - Present",
    description: "Fullstack web application development.",
    jobDescs: [
      "Developed ERP applications using Yii2, Laravel, and Next.js.",
      "Developed a clinic application using Laravel.",
      "Developed company profile websites using Laravel and Next.js.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company: "PT Glori Investama Berjangka",
    period: "October 2025 - December 2025",
    description: "Fullstack web application development.",
    jobDescs: [
      "Developed an attendance application.",
      "Built and developed a task management application.",
      "Built and developed an advance and expense tracker application.",
      "Developed a CRM application.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self Employed",
    period: "January 2024 - September 2025",
    description: "Freelance web application development.",
    jobDescs: [
      "Built an expedition application for PT Irka Express.",
      "Built an Umrah travel application for PT Muhsinin ID.",
    ],
  },
  {
    title: "Mobile Developer Intern",
    company: "PT Qtera Mandiri",
    period: "October 2023 - January 2024",
    description: "Mobile application development internship.",
    jobDescs: [
      "Implemented Figma designs into a mobile application.",
      "Built UI components using Kotlin (XML and Jetpack Compose).",
      "Integrated APIs using MVVM architecture.",
      "Tested APIs using Postman and Swagger.",
      "Performed unit testing to prevent bugs.",
      "Collaborated using GitHub for branching, pull requests, and merges.",
      "Used Trello for workflow and task management.",
    ],
  },
];

const formalEducation = [
  {
    degree: "S1 Information Systems",
    institution: "Bina Insany University, Bekasi, Indonesia",
    period: "2022 - Present",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
];

const nonFormalEducation = [
  {
    degree: "Mobile Developer Technical",
    institution: "Kemnaker Bekasi, Indonesia",
    period: "Feb-2023 - Sep-2023",
    description:
      "Here, I learned Kotlin from basics to advanced levels and successfully developed a modular app project, which led to my graduation.",
  },
];

const certifications = ["Mobile Application And Technology", "Membuat aplikasi web dengan React"];

const skills = portfolioSkills;

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <ScrollAnimation direction="up">
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold">Resume</h1>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2" size={20} />
                Download PDF
              </Button>
            </div>
            <p className="text-lg text-muted-foreground">
              My professional experience and qualifications
            </p>
          </div>
        </ScrollAnimation>

        {/* Experience */}
        <section className="mb-16">
          <ScrollAnimation direction="up">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp?.description}</p>
                    {exp.jobDescs.length > 0 && (
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Job Desc:</p>
                        <ul className="space-y-1">
                          {exp.jobDescs.map((desc, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Formal Education */}
        <section className="mb-16">
          <ScrollAnimation direction="up">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Formal Education</h2>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {formalEducation.map((edu, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                <Card className="border-l-4 border-l-primary">
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
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Non Formal Education */}
        <section className="mb-16">
          <ScrollAnimation direction="up">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Non Formal Education</h2>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {nonFormalEducation.map((edu, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                <Card className="border-l-4 border-l-primary">
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
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <ScrollAnimation direction="up">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up">
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
          </ScrollAnimation>
        </section>

        {/* Skills */}
        <section>
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <ScrollAnimation key={category} direction="up" delay={index * 0.1}>
                <Card>
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
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
