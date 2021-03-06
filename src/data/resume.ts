export type resumeCareerData = {
    companyName: string;
    position: string;
    duration: string;
    jobDescription: string;
}
export type resumeEducationData = {
    schoolName: string;
    mayor: string;
    duration: string;
    eduDescription?: string;
}
type SkillData = {
    skill: string;
    percentage: number;
}
export type resumeSkillData = {
    description?: string;
    skillSet: SkillData[];
}

const resumeSkillItems: resumeSkillData = {
    skillSet: [
        {
            skill: "Qt SDK",
            percentage: 80,
        },
        {
            skill: "Go-Gin",
            percentage: 30,
        },
        {
            skill: "Nestjs",
            percentage: 50,
        },
        {
            skill: "Expressjs",
            percentage: 40,
        },
        {
            skill: "Angular",
            percentage: 30,
        },
        {
            skill: "PostgreSql",
            percentage: 50,
        },
        {
            skill: "Linux",
            percentage: 60,
        },
        {
            skill: "C",
            percentage: 70,
        },
        {
            skill: "C++",
            percentage: 50,
        },
        {
            skill: "Javascript",
            percentage: 40,
        },
        {
            skill: "Typescript",
            percentage: 40,
        },
        {
            skill: "HTML",
            percentage: 40,
        },
    ]
}
const resumeEducationItems: resumeEducationData[] = [
    {
        schoolName: "Bandung Institute of Technology",
        mayor: "Bachelor of Physics",
        duration: "2007 - 2011",
    }
]
const resumeCareerItems: resumeCareerData[] = [
    {
        companyName: "SKM",
        position: "C/C++ Programmer",
        duration: "2012 - 2015",
        jobDescription: `Job description including perform coding duties within a specified timeframe, 
        perform software quality assurance, collaborate with business analysts and developers to produce software designs,
        formulate program specifications and basic prototypes, transform software designs and specifications into high functioning code in the appropriate language,
        integrate individual software solutions to higher level systems, perform system testing, implementation and modification,
        perform bug-fixing, perform upgrades to make software and systems more secure and efficient, collaborate with technical writers to create documentation for user support
        `,
    },
    {
        companyName: "SKM",
        position: "C/C++ Senior Programmer and System Designer",
        duration: "2015 - Present",
        jobDescription: `Job description including determine development strategy,
        managing the development team, assisting with team resources,
        managing the development, deployment, and integration of software solutions,
        resolving software deployment and integration errors, and documenting processes
        `,
    },
    {
        companyName: "RTI",
        position: "C/C++ Senior Programmer and System Designer",
        duration: "2015 - Present",
        jobDescription: `Project based work as freelancer to develop Radar Air Surveilance System. 
        Job description including design Radar software architect, managing the development team, 
        managing the development, deployment, and integration of Radar system,
        resolving software deployment and integration errors, and documenting processes.
        `,
    },
    {
        companyName: "ITB",
        position: "C/C++ Senior Programmer and System Designer",
        duration: "2016, 2020 - Present",
        jobDescription: `Project based work as freelancer to develop Ground Surveilance Radar System. 
        Job description including design Radar software architect, managing the development team, 
        managing the development, deployment, and integration of Radar system,
        resolving software deployment and integration errors.
        `,
    },
    {
        companyName: "Upwork",
        position: "Desktop and Web Backend Developer",
        duration: "2017 - Present",
        jobDescription: `Rarely spend much time on this freelance platform. 
        Currently only available to accept small, part time job as Desktop and Web Backend Developer.
        Available stacks are C/C++ (Qt SDK), Python (Django, Selenium), Javascript (Nodejs, Express, Reactjs)
        `,
    },
]

export {
    resumeCareerItems,
    resumeEducationItems,
    resumeSkillItems,
};
