export const site = {
  name: "Simamkele Yawa",
  title: "Aspiring ICT Academic & Software Professional",
  tagline:
    "I love sharing what I am passionate about with others. I love the teaching. Tutoring gave me the best experience.",
  email: "yawasimamkel@gmail.com",
  portrait: ["/portrait.jpg", "/portrait.svg"],
  socials: [
    ["GitHub", "https://github.com/SIMAMKELE2001", "Github"],
    ["LinkedIn", "https://www.linkedin.com/in/simamkele-yawa", "Linkedin"],
    ["Email", "mailto:yawasimamkel@gmail.com", "Mail"],
    ["WhatsApp", "https://wa.me/27838615468", "MessageCircle"],
  ] as [string, string, string][],
  cv: "/Simamkele-Yawa-CV.pdf",
  github: "https://github.com/SIMAMKELE2001",
};
export const stats = [
  ["Years of tutoring", "3"],
  ["Students per session", "[±20]"],
  ["Weekly hours", "[3+]"],
  ["Estimated impact", "[75%]"],
];
export type Item = {
  h: string;
  rows: [string, string][];
  text?: string[];
  list?: string[];
  after?: string[];
  table?: { head: [string, string]; rows: [string, number][] };
  parts?: { h: string; text: string[] }[];
};
export type Page = {
  slug: string;
  label: string;
  title: string;
  lead: string;
  intro: string[];
  callout?: string;
  items?: Item[];
};
const A = (s: string): [string, string] => [s, `[Add: ${s.toLowerCase()}]`];

export const pages: Page[] = [
  {
    slug: "home",
    label: "Welcome",
    title: "Hello there!",
    lead: "Development Software III tutor at Iyunivesithi Walter Sisulu",
    intro: [
      "I am an Advanced Diploma in ICT in Applications Development student, Development Software III tutor, and aspiring academic and software professional who is passionate about technology, education, new knowledge, and teaching. Over the past three years, I have supported students in programming, database systems, software development, and project-based work.",
    ],
    callout:
      "I believe education has the power to transform lives, and I am committed to continuously developing myself as both a technology professional and an educator who makes a positive difference in the lives of others.",
  },

  {
    slug: "profile",
    label: "Personal Statement",
    title: "Personal statement",
    lead: "Who I am and what I do",
    intro: [
      "New here?, My name is Simamkele Yawa. I am an Advanced Diploma in ICT in Applications Development student, a Development Software III Tutor, and an aspiring educator and software professional who is passionate about technology, teaching, mentoring, continuous learning, and creating engaging learning environments.",
      "Over the past three years, I have supported students in programming, databases, software development, and project-based work. Along this journey, I have discovered that my greatest satisfaction comes not from solving problems myself, but from helping others gain the confidence and skills to solve them independently.",
      "I believe that becoming a competent computing professional requires more than learning programming languages or completing academic assignments. It requires strong problem-solving abilities, sound engineering principles, critical thinking, research literacy, effective communication, ethical responsibility, and a commitment to lifelong learning.",
      "As I continue to deepen my knowledge of software engineering, databases, algorithms and data structures, and application development, I am equally committed to becoming a better educator, researcher, and communicator. I aspire to bridge the gap between technical knowledge and practical impact by developing meaningful solutions, empowering others through education, and contributing to the advancement of technology and society.",
    ],
    items: [
      {
        h: "My tutoring journey",
        rows: [],
        text: [
          "My tutoring journey began in my second year. I was inspired by my then tutor, and I found myself assisting classmates who I thought they were struggling with programming. This challenged me to build the confidence to apply for the professional tutoring programme in the following year. Credit to my then tutor, Noxolo (Noxie).",
          "What started as informal peer support gradually evolved into formal tutoring opportunities. Since then, I have had the privilege of working with students from different academic levels, helping them grasp concepts, work on their practical assignments, and succeed in project-based learning experiences.",
          "Through tutoring, I learned that helping students is not only about giving them solutions. It is about guiding them toward understanding, building confidence and trust in their own work, developing their problem-solving skills, and encouraging independent work where necessary.",
          "One of the most transformative lessons tutoring has taught me is that knowing something and helping someone else understand it are fundamentally different skills. Working with students has challenged me to understand concepts more deeply, communicate more clearly, and continuously improve my own learning process. It has made me more patient, more curious, more reflective, and more intentional about my development as both a computing professional and an educator.",
          "One challenge I have faced is resistance from a small group of students, because of the level of professionalism I set when it comes to respecting academic standards and for the fact that I sometimes think I am at the level of lecturers in terms of enforcing academic integrity and high professionalism.",
        ],
      },
      {
        h: "What I believe about learning",
        rows: [],
        text: [
          "I believe that learning is most effective when students are active participants in the learning process rather than passive recipients of information. This approach is supported by Bavishi et al. (2022), who contend that active learning not only improves students' understanding of academic content but also develops communication skills and encourages self-directed learning, ultimately leading to deeper engagement with the learning material. ",
          "Every student enters the classroom with unique strengths, experiences, challenges, and expectations of how they want to be taught. For this reason, I believe that effective tutoring should be:",
        ],
        list: [
          "Student-centred",
          "Collaborative",
          "Inclusive",
          "Reflective",
          "Practical",
          "Supportive",
          "Fun",
          "Extended beyond the classroom",
        ],
      },
      {
        h: "The roots of my passion for teaching",
        rows: [],
        text: [
          "My passion for teaching originates from my own experiences as a student.",
          "I was initially admitted into ICT in Business Analysis, where I failed one of the major modules, Development Software I (DS1). Looking back, it was not because I lacked the ability to succeed. The reality is that I was not taking my academics seriously enough at the time, and there was limited support to help me remain focused and understand the importance of that stage of my academic journey.",
          "As a result, I had to repeat the module. Before the start of that year, I made a promise to myself that things would be different. I knew that people back home were disappointed because they knew the student I had been in high school. I had always performed well academically, enjoyed learning, and was often trusted by teachers to explain concepts to other learners because I grasped ideas quickly and enjoyed helping others understand them.",
          "Returning to the classroom was not easy. Most of the students were unfamiliar faces because many of my former classmates had progressed to the next level. However, from the first day, I committed myself to giving my best effort. Day by day, my confidence returned, and my work ethic improved. By the end of the year, I had successfully completed the module with a final mark of 94%.",
          "There are people whose contribution to that journey I will never forget. Mr Sizani recognised my achievement and presented me with a cap and a pen as a gesture of congratulations. My Development Software I tutor, Noxolo (Noxie), my favourite lecturer, Mr S. Twetwa Dube, and my fellow classmates all played an important role in creating an environment where I could regain confidence in myself and realise my potential.",
          "The following year, I made the decision to transfer from ICT in Business Analysis to Applications Development so that I could continue along the software development pathway from Development Software I to Development Software II and eventually Development Software III. Before making this decision, I received messages of encouragement from classmates and my tutor, who believed I had potential and encouraged me to apply. They often highlighted two qualities they saw in me: my ability to learn quickly and my willingness to share knowledge with others.",
          "Those words stayed with me.",
          "Throughout my academic journey, I experienced both the challenges and rewards of learning difficult technical concepts. There were moments when guidance from tutors, lecturers, and peers helped me overcome obstacles that initially seemed impossible. These experiences taught me the value of academic support and inspired me to provide the same support to others.",
          "As I continued tutoring, I became increasingly motivated by the impact that meaningful support can have on a student's confidence, academic performance, and overall learning experience. Seeing students move from confusion to understanding, from self-doubt to confidence, remains one of the most rewarding aspects of my work.",
          "In many ways, tutoring allowed me to become the kind of support that I once needed myself.",
          "For this reason, I always strive to create learning environments where students feel comfortable asking questions, making mistakes, expressing themselves freely, and believing in their own ability to succeed. My goal is not simply to help students pass a module, but to help them discover the confidence and independence needed to continue learning long after the tutorial session has ended.",
        ],
      },
      {
        h: "My values",
        rows: [
          [
            "Lifelong learning",
            "I believe that lasting skills are developed through continuous study, deliberate practice, curiosity, and the willingness to revisit foundational concepts.",
          ],
          [
            "Intellectual independence and critical thinking",
            "I value the ability to reason independently, challenge assumptions, evaluate evidence, and defend conclusions logically. Whether I am designing a database, solving an algorithmic problem, or reviewing research, I want my decisions to be grounded in understanding.",
          ],
          [
            "Integrity, honesty and ethical responsibility",
            "I value academic honesty and I believe that technology and research should be developed responsibly. This means being honest about evidence, acknowledging limitations, respecting people and their data, and considering the consequences of the systems and decisions I contribute to.",
          ],
          [
            "Service and community impact",
            "I want my knowledge to extend beyond personal achievement. I value using education and technology to address practical challenges, contribute to my community, and encourage others to explore opportunities they might not otherwise imagine.",
          ],
          [
            "Evidence-based thinking",
            "As a developing researcher, I value asking meaningful questions, examining different perspectives, engaging critically with literature, and distinguishing what the evidence supports from what I merely assume.",
          ],
          [
            "Discipline and excellence",
            "I aspire to produce work that reflects careful thinking, technical competence, and attention to detail. I value steady progress, constructive feedback, and the discipline required to turn ambitious goals into demonstrable skills.",
          ],
          [
            "Clear communication and collaboration",
            "I believe that knowledge becomes more valuable when it can be explained clearly and shared effectively. I want to communicate technical and academic ideas with confidence, listen to different perspectives, and work productively with others.",
          ],
        ],
      },
      {
        h: "Technical skills",
        rows: [],
        list: [
          "Java",
          "Python",
          "SQL",
          "Algorithms and Data Structures",
          "Software Design and Modelling",
          "Web and Mobile Application Development",
          "Git and GitHub",
          "Database Systems and Data Management",
        ],
      },
      {
        h: "Tutoring skills",
        rows: [],
        table: {
          head: ["Skill", "Proficiency"],
          rows: [
            ["Tutorial Facilitation", 95],
            ["Mentoring", 90],
            ["Student Support", 90],
            ["Presentation", 78],
            ["Academic Advising", 85],
            ["Constructive Feedback", 90],
            ["Educational Technology Integration", 80],
            ["Academic Integrity", 99],
            ["Active Listening", 90],
            ["Professional Communication", 90],
            ["Empathy", 93],
          ],
        },
      },
      {
        h: "Professional skills",
        rows: [],
        list: [
          "Leadership",
          "Communication",
          "Teamwork",
          "Problem Solving",
          "Critical Thinking",
          "Time Management",
          "Adaptability",
          "Professionalism",
          "Research Skills",
          "Creativity",
          "Ethical use of AI",
        ],
      },
      {
        h: "Academic interests",
        rows: [
          [
            "Computer science foundations",
            "Programming, algorithms, data structures, computational thinking, and problem-solving.",
          ],
          [
            "Software and data engineering",
            "Software architecture, database systems, backend development, APIs, and mobile applications.",
          ],
          ["Tutoring and teaching", "Tutoring and teaching practices."],
        ],
      },
    ],
  },

  {
    slug: "education",
    label: "Education",
    title: "Academic education",
    lead: "Current studies",
    intro: [],
    items: [
      {
        h: "Advanced Diploma in ICT Applications Development",
        rows: [
          ["Institution", "Iyunivesithi Walter Sisulu, Potsdam, East London"],
          ["Year", "4th"],
          [
            "Major subjects",
            "Development Software IV, Advanced Development Software IV, Software Engineering IV, Research Methodology",
          ],
          ["Research area", "Inclusive education (mini-dissertation)"],
        ],
      },
    ],
  },

  {
    slug: "training",
    label: "Training & Development",
    title: "Training and development",
    lead: "How I prepared to tutor and continue to grow",
    intro: [],
    items: [
      {
        h: "Overall Tutor Development and Training",
        rows: [["Provider and date", "FEBEIT tutoring programme, 2024 - 2026"]],
        parts: [
          {
            h: "What I learned",
            text: [
              "The training programme introduced me to the expectations and responsibilities of being a tutor. One of the most important lessons was that tutoring should always put the interests of students first. Students should not be passive listeners but active participants in the learning process.",
              "I learned that tutors should not simply teach in the same way lecturers do. Instead, tutors should create a learning environment that is more relaxed, interactive, and approachable than the traditional classroom environment. The training also covered student-centred learning, facilitation strategies, collaborative learning, tutorial planning, group activities, guiding discussions, redirecting questions back to students, guided practice, fostering independent learning, using previous question papers effectively, creating additional practice activities with AI tools, and allowing students enough time to think before providing solutions.",
              "The programme also highlighted the importance of maintaining communication with lecturers through brief meetings and updates to ensure tutoring remains aligned with the module objectives and student needs.",
            ],
          },
          {
            h: "How I applied it",
            text: [
              "The training changed how I approached tutoring sessions. Instead of focusing on providing answers immediately, I increasingly tried to guide students towards discovering solutions themselves. During tutorials, I encouraged students to discuss problems with one another, explain their reasoning, and participate actively in finding solutions.",
              "I often used previous question papers and practical examples to expose students to the type of thinking required in assessments. Where appropriate, I also used AI tools to generate additional practice questions and discussion activities that could challenge students beyond the examples already provided by the lecturer.",
              "The training also helped me become more intentional about planning tutorial sessions rather than approaching them as informal help sessions. I became more aware of creating opportunities for collaboration, guided practice, and student participation so that students could build confidence and independence in their learning.",
            ],
          },
        ],
      },
      {
        h: "Learning Styles and Personality Tutor Training Programme (FMPAS)",
        rows: [["Provider and date", "FMPAS, 11 August 2026"]],
        parts: [
          {
            h: "What I learned",
            text: [
              "Although this training programme was not originally intended for me, I joined out of curiosity and because I wanted to improve my confidence through active participation and discussions with other participants.",
              "One lesson that remained with me was the idea of asking students to write down their challenges on small pieces of paper before a tutorial session begins. This approach allows students to express concerns they may feel uncomfortable sharing publicly and helps the tutor understand student needs before the session starts.",
              "The programme also encouraged tutors to arrive prepared with different activities designed to increase participation and engagement. Another lesson involved understanding student personalities and learning preferences. Students engage differently in learning environments, and understanding these differences can help tutors create spaces where students feel more comfortable contributing and asking questions.",
              "The training further emphasized the importance of consultation opportunities, continuous communication, and informing students about upcoming activities so they can prepare themselves both academically and mentally for future sessions.",
            ],
          },
          {
            h: "How I applied it",
            text: [
              "The training made me think differently about student participation and engagement. Although I did not always manage to implement every strategy due to time limitations and transport constraints affecting both students and myself, I became more conscious of the need to create supportive learning environments.",
              "One strategy I currently use is individual consultations. I usually send a message through the WhatsApp group and ask students to indicate suitable times, often prioritising weekends when there is greater flexibility. This allows students to receive individual support when they need it most.",
              "I also try to inform students about the focus of upcoming tutorial sessions so that they can prepare beforehand and identify areas where they need assistance.",
              "The discussion around student personalities was particularly valuable because it helped me realise that not every student feels comfortable participating in the same way. Some students require more encouragement, while others benefit from smaller group discussions before sharing ideas publicly. Understanding this has helped me become more patient and adaptable when supporting students.",
              "However, implementing multiple activities consistently remains challenging. Tutorial time is often limited, student attendance can be unpredictable, and transport schedules sometimes affect how long students can remain on campus. Despite these constraints, the training encouraged me to continue thinking about new ways to increase participation and engagement during tutorial sessions.",
            ],
          },
        ],
      },
      {
        h: "Institutional Webinar on the Impact of Tutoring: Student Voices",
        rows: [["Provider and date", "Walter Sisulu, 22 September 2025"]],
        parts: [
          {
            h: "What I learned",
            text: [
              "This webinar was particularly valuable because it allowed me to hear directly from students about what tutoring means to them and how tutors influence their academic journeys. One of the strongest messages was that students often remember how a tutor made them feel just as much as what the tutor taught them.",
              "The discussions highlighted the importance of being approachable, accessible, patient, and genuinely interested in student success. Students spoke about how a tutor's encouragement can improve confidence, motivation, engagement, and willingness to seek help. The webinar also reinforced the idea that every student experiences challenges differently and that academic support should recognise those differences rather than assume all students need the same type of assistance.",
            ],
          },
          {
            h: "How I applied it",
            text: [
              "The webinar encouraged me to focus more intentionally on creating a supportive learning environment where students feel comfortable asking questions and seeking assistance. I became more conscious of how I communicate with students and how my responses can either encourage or discourage participation.",
              "It also reinforced my practice of remaining available through communication channels such as WhatsApp and consultation opportunities. I realised that students sometimes need reassurance as much as they need academic guidance, and I have tried to be more understanding of the different circumstances that influence student performance and engagement.",
              "The webinar reminded me that tutoring is not only about helping students understand content but also about contributing positively to their overall learning experience.",
            ],
          },
        ],
      },
      {
        h: "FameLab: Talking Science Training",
        rows: [["Provider and date", "Walter Sisulu, June 2026"]],
        parts: [
          {
            h: "What I learned",
            text: [
              "I joined this training because I wanted to improve my confidence when speaking in front of others and communicating complex ideas more effectively. The programme focused on how to explain scientific and technical concepts in ways that are clear, engaging, and easy to understand without losing accuracy.",
              "One lesson that stood out for me was that simply knowing a subject well does not automatically make someone an effective communicator. The audience must always be considered. The training encouraged participants to think carefully about their choice of words, examples, storytelling techniques, body language, and presentation style.",
              "Another important lesson was the importance of simplifying concepts without oversimplifying them. A complex idea should be made understandable, but its meaning should not be lost in the process.",
            ],
          },
          {
            h: "How I applied it",
            text: [
              "The training strengthened my ability to explain programming, software development, and database concepts in ways that are more accessible to students. I became more aware of using familiar examples, simpler language where appropriate, and practical demonstrations to support understanding.",
              "It also improved my confidence when presenting in front of groups and conducting tutorial sessions. Rather than focusing only on the technical content, I became more conscious of how I communicate that content and whether students are following the explanation.",
              "The programme also helped me appreciate the value of asking questions throughout an explanation to check understanding instead of waiting until the end of a session. This has made my tutorial sessions more interactive and has encouraged greater student participation.",
            ],
          },
        ],
      },
      {
        h: "Reflection on my tutoring practice",
        rows: [],
        text: [
          "One lesson I continue to reflect on is the importance of asking students how they would like to be assisted.",
          "As tutors, we often assume we know the best way to explain concepts because it worked for us. However, students learn differently and may require different forms of support. Over time, I have realised that it is important to ask students directly how they would prefer concepts to be explained, what challenges they are facing, and what type of assistance they find most useful.",
          "By listening to students and adapting my support where possible, I believe tutoring becomes more student-centred, more meaningful, and ultimately more effective. My goal is not only to help students understand the content but also to help create an environment where they feel comfortable participating, asking questions, making mistakes, and developing confidence in their own abilities.",
        ],
      },
    ],
  },

  {
    slug: "delivery",
    label: "Tutorial Delivery",
    title: "Tutorial delivery",
    lead: "Three years of tutoring, year by year",
    intro: ["Choose a year to see the full detail of that role."],
  },

  {
    slug: "technology",
    label: "Technology",
    title: "Technology integration",
    lead: "Why technology tools were integrated into my tutoring",
    intro: [
      "The integration of digital technology tools in my tutoring was recommended by the tutoring programme and was also guided by the requirements of the modules I supported. These tools allowed me to extend support beyond the classroom, communicate efficiently with students, create interactive class activities, and give practical, timely feedback.",
      "The growing adoption of digital technologies in Higher Education has redefined traditional boundaries related to learning spaces, learning time, and educational environments. The distinction between formal and informal learning, as well as between educational and personal uses of technology, has become increasingly blurred. As a result, digital learning environments have transformed learning from an activity confined to specific times and places into a continuous process that can occur anytime and anywhere (Pinto and Leite, 2020). In my tutoring, each tool was chosen for a specific learning purpose rather than for its own sake.",
    ],
  },

  {
    slug: "reflection",
    label: "Reflections and Lessons Learnt",
    title: "Reflections and lessons learnt",
    lead: "Continuous improvement",
    intro: [
      "Over the past three years, tutoring has been one of the most transformative experiences of my academic journey. What began as an interest in helping classmates gradually developed into a passion for teaching, mentoring, and supporting student success. Tutoring challenged me to grow not only technically but also personally. It strengthened my communication, leadership, patience, critical thinking, and problem-solving skills while constantly reminding me that learning is a lifelong process.",
      "Each year brought new challenges, new students, and new opportunities to reflect on my practice. Through continuous training, student interactions, and self-reflection, I learned that effective tutoring is not about how much knowledge a tutor possesses but about how effectively that knowledge can be shared in ways that help students learn independently.",
    ],
    items: [
      {
        h: "Lessons learned",
        rows: [],
        text: [
          "One of the most significant lessons I learned is that understanding a concept and explaining it are completely different skills. Early in my tutoring journey, I assumed that if I understood a topic well, explaining it to others would be easy. However, working with students showed me that effective tutoring requires empathy, active listening, patience, adaptability, and the ability to view concepts from different perspectives.",
          "I also learned that students do not all learn in the same way. Some students learn by doing, others through discussion, examples, repetition, or one-on-one support. This taught me the importance of being flexible and student-centred in my tutoring approach.",
          "Another lesson was the importance of academic integrity and independent learning. While students often seek immediate answers, long-term learning occurs when students are guided towards understanding and are encouraged to think critically for themselves.",
          "Most importantly, I learned that students often need confidence before they need content. When students believe they are capable of succeeding, they become more willing to engage, ask questions, and persist through challenges.",
        ],
      },

      {
        h: "Challenges",
        rows: [],
        text: [
          "One recurring challenge was limited tutorial time relative to the number of students requiring support. This became particularly evident during my Development Software III tutoring experience, where I was the only tutor supporting multiple project groups working on different problems at different stages of development.",
          "I also encountered situations where students prioritised obtaining solutions rather than understanding concepts, in cases like that, students would expect me to stand in front and teach.",
          "Another challenge was student attendance and engagement. Some students attended tutorial sessions consistently, while others only sought assistance when deadlines approached or problems became difficult to manage. ",
        ],

        after: [
          "In response to these challenges, I adopted more flexible support strategies such as one-on-one consultations, weekend Microsoft Teams sessions, WhatsApp communication, and online support channels. These experiences taught me that effective tutoring often requires adaptability and creativity rather than relying solely on traditional approaches.",
        ],
      },
      {
        h: "What I would do differently",
        rows: [],
        text: [
          "Looking back on my tutoring journey, there are several things I would strengthen if I were starting again.",
        ],
        list: [
          "I would implement more structured mechanisms for collecting student feedback after each and every session rather than checking it occasionally.",
          "I would also place greater emphasis on understanding students' preferred learning approaches at the beginning of each module topic. This would enable me to tailor support strategies more effectively.",
          "Another area I would improve is the consistent incorporation of interactive learning activities.",
          "I would also communicate with the lecturer more often to try to find ways in which we can assist students efficiently.",
          "I would create small groups where the session will focus on only one group at a time rather than the minimum of 20 students. This approach would also help in terms of understanding the students.",
          "I would continue exploring the ethical integration of technology and AI tools into tutoring.",
          "Finally, I would like to be given a role to teach programming. I love Java.",
        ],
      },
    ],
  },

  {
    slug: "evidence",
    label: "Evidence",
    title: "Evidence repository",
    lead: "Documents behind every claim",
    intro: [],
  },

  {
    slug: "feedback",
    label: "Student Feedback",
    title: "Student feedback",
    lead: "What students told me",
    intro: [
      "Student feedback tells me whether what I believe I am doing in tutorials matches what students actually experience. Across three years and four surveys, it has shaped what I teach, how I pace sessions and how I make support available.",
    ],
    items: [
      {
        h: "How I collect feedback",
        rows: [],
        text: ["I gathered feedback through:"],
        list: [
          "Microsoft Forms surveys on clarity, engagement, availability, confidence and open-ended suggestions.",
          "Informal verbal feedback and questions during tutorial sessions.",
          "WhatsApp messages, Microsoft Teams sessions and one-on-one consultations, where students raised difficulties privately.",
        ],
        after: [
          "Feedback was collected:",
          "Once per year or semester through Microsoft Forms (August 2024, May 2025, October 2025 and October 2026), supported by informal feedback during sessions and consultations.",
          "Across four formal surveys that were taken through Microsoft Forms, 50 students responded: 25 in August-September 2024, 11 in May 2025 and 8 in October 2025 (Technical Programming I), and a total of six students completed the Development Software III tutoring feedback survey. Feedback was consistently positive about clarity, patience, approachability and availability. Students asked for more practice and past papers in Technical Programming I and raised project ownership and attendance in Development Software III.",
          "The feedback further indicated that students generally found the guidance and feedback useful, although one respondent rated the usefulness of feedback as neutral. Attendance patterns showed that most students attended only some of the available tutoring sessions rather than all sessions, suggesting that while support was available, attendance varied across the cohort.",
          "Only one student reported leaving a tutoring session without receiving the support they needed due to time limitations, while the remaining respondents indicated that they received adequate support during the sessions they attended.",
        ],
      },
      {
        h: "Key findings",
        rows: [],
        text: [
          "Technical Programming I: 84% helpful (2024), 100% clear or very clear (May 2025), 10 of 11 'always' approachable, 7 of 8 satisfied (Oct 2025). Development Software III (2026): 100% said sessions helped them address challenges and that I was available.",
        ],
        list: [
          "All respondents agreed that tutoring sessions helped them identify and address challenges within the module.",
          "Students generally viewed tutor availability positively, with three respondents selecting 'Strongly Agree.'",
          "Most students found the feedback useful and supportive to their project development.",
          "Student attendance varied considerably, with many students attending only a few sessions during the year.",
          "Time constraints occasionally affected the ability to support every student within scheduled tutorial periods.",
          "Students appreciated the tutor's commitment, availability, and passion for student success.",
        ],
        table: {
          head: ["Measure", "% positive"],
          rows: [
            ["TP I 2024: sessions helpful (n=25)", 84],
            ["TP I May 2025: clear or very clear (n=11)", 100],
            ["TP I May 2025: tutor 'always' approachable (n=11)", 91],
            ["TP I Oct 2025: satisfied overall (n=8)", 88],
            ["DS3 2026: sessions helped address challenges (n=6)", 100],
            ["DS3 2026: tutor available (n=6)", 100],
            ["DS3 2026: feedback useful (n=6)", 83],
          ],
        },
      },
      {
        h: "Common themes",
        rows: [],
        list: [
          "Students appreciated the tutor's commitment, availability, and willingness to provide support despite a demanding personal academic schedule.",
          "Students valued the practical advice and guidance provided during project development and application implementation.",
          "Academic integrity emerged as a visible aspect of the tutoring process, with students noting the tutor's strong stance against copying project work.",
          "Some students expressed a desire for additional online support opportunities.",
          "One student raised concerns regarding ownership of project ideas and the balance between guidance and student autonomy during project development.",
        ],
      },
      {
        h: "How I responded",
        rows: [],
        text: [
          "In Technical Programming I, students asked for practice and clearer scaffolding, so I made past papers and extra exercises a regular part of sessions, used AI-generated practice questions and quizzes, prioritised arrays and methods in revision, and worked the first example with students before independent work. In Development Software III, limited time and transport led me to add weekend Microsoft Teams consultations, breakout rooms and WhatsApp scheduling. The 2026 comments about project ownership are an important lesson. Guiding students toward understanding is only effective if the project remains theirs, so I will ask students at the start of each consultation what they want to achieve and offer questions and options rather than solutions.",
        ],
      },
    ],
  },

  {
    slug: "impact",
    label: "Impact",
    title: "Impact",
    lead: "What changed for students",
    intro: [
      " The full survey results are on the [student feedback](#feedback) page.",
    ],
    items: [
      {
        h: "Reach",
        rows: [
          ["Years of tutoring", "3 (2024 to 2026)"],
          [
            "Modules supported",
            "Technical Programming I and Development Software III",
          ],
          ["Survey responses", "50 students across four formal surveys"],
          ["Students per session", "20+"],
          ["Hours per week", "3+ weekends"],
        ],
      },
      {
        h: "What changed because of student feedback",
        rows: [],
        list: [
          "Past papers and extra exercises became a regular part of Technical Programming I sessions.",
          "AI-generated practice questions and quizzes gave students more practice.",
          "Revision prioritised arrays and methods, and the first example was worked through with students before independent work.",
          "Weekend Microsoft Teams consultations, breakout rooms and WhatsApp scheduling gave Development Software III students more access to support.",
        ],
      },

      {
        h: "Impact on my own practice",
        rows: [],
        text: [
          "Student feedback also changed how I tutor and how I even approach my own studies. I now ask students at the start of each consultation what they want to achieve, and I offer questions and options rather than solutions, so that the work remains theirs.",
        ],
      },
      {
        h: "Recognition",
        rows: [],
        text: [
          "The faculty recognised my tutoring with FEBEIT Tutoring Recognition Awards in 2024 and 2025. See [awards and recognition](#awards).",
        ],
      },
    ],
  },
  {
    slug: "awards",
    label: "Awards",
    title: "Major Awards",
    lead: "Awards received",
    intro: [
      "The following awards acknowledge my contribution to tutoring, student support, personal development, and academic engagement.",
    ],
    items: [
      {
        h: "Academic achievements",
        rows: [
          [
            "Qualification",
            "Advanced Diploma in ICT in Applications Development",
          ],
          ["Institution", "iYunivesithi Walter Sisulu"],
          ["Awarded", "2026"],
        ],

        after: ["[View the graduation certificate](#evidence)"],
      },
      {
        h: "Extra academic achievements",
        rows: [
          ["Programme", "Samsung Innovation Campus"],
          ["Institution", "iYunivesithi Walter Sisulu"],

          ["Awarded", "2025"],
          ["Relevant work", "Programming with Python and AI"],
        ],
      },
      {
        h: "Tutoring awards",
        rows: [],
        parts: [
          {
            h: "FEBEIT Tutoring Recognition Award, 2024",
            text: [
              "Faculty of Engineering, Built Environment and Information Technology (FEBEIT), 2024.",
              "Awarded in recognition of service and contribution as a Technical Programming I Tutor, supporting student learning and academic development within the faculty.",
            ],
          },
          {
            h: "FEBEIT Tutoring Recognition Award, 2025",
            text: [
              "Faculty of Engineering, Built Environment and Information Technology (FEBEIT), 2025.",
              "Awarded in recognition of continued commitment to tutoring, student support, and academic excellence through the faculty tutoring programme.",
            ],
          },
        ],
        after: ["[View the award certificates](#evidence)"],
      },

      {
        h: "Scientific Communication",
        rows: [],
        parts: [
          {
            h: "FameLab: Talking Science Training & Participation Certificate",
            text: [
              "iYunivesithi Walter Sisulu University.",
              "Awarded for participation in the FameLab: Talking Science Training Programme, which focused on the communication of scientific and technical concepts to diverse audiences. The programme contributed to the development of my public speaking, presentation, and science communication skills.",
            ],
          },
        ],
        after: ["[View the certificates](#evidence)"],
      },
    ],
  },
  {
    slug: "cv",
    label: "CV",
    title: "Curriculum vitae",
    lead: "Summary",
    intro: ["View my full CV below."],
    items: [
      {
        h: "Tutoring Experience",
        rows: [
          ["2024", "Technical Programming I Tutor, Walter Sisulu"],
          ["2025", "Technical Programming I Tutor, Walter Sisulu"],
          ["2026", "Development Software III Tutor, Walter Sisulu"],
        ],
      },
    ],
  },

  {
    slug: "contact",
    label: "Contacts",
    title: "Contacts",
    lead: "Get in touch",
    intro: [
      "I am actually an introvert who is pushing himself to thrive in every learning space. I am looking for roles that will include teaching, data, and software.",
    ],
  },
];

export const delivery: { year: string; role: string; sections: Item[] }[] = [
  {
    year: "2024 - 2025",
    role: "Technical Programming I Tutor",
    sections: [
      {
        h: "Module details",
        rows: [
          ["Module", "Technical Programming I"],
          ["Lecturer", "Mr P. Tamba-Tamba"],
          ["Academic year", "2024 and 2025"],
        ],
      },
      {
        h: "Context",
        rows: [],
        text: [
          "This was my first formal tutoring appointment and represented an important milestone in my academic and professional development. The role introduced me to the responsibilities and expectations associated with supporting student learning in a higher education environment while simultaneously managing my own academic commitments. It provided valuable insight into the realities of tutoring and the diverse learning needs that exist within a classroom.",
        ],
      },
      {
        h: "Student demographics",
        rows: [],
        text: [
          "The students I supported were primarily undergraduate ICT students at the second-year level. The cohort consisted of students from diverse educational and programming backgrounds, with varying levels of confidence and prior exposure to software development concepts.",
          "Many students were engaging with more advanced programming principles for the first time and were required to transition from basic coding practices to a deeper understanding of object-oriented programming and software development concepts.",
        ],
      },
      {
        h: "Module objectives",
        rows: [],
        text: ["The module aimed to develop students' understanding of:"],
        list: [
          "Programming fundamentals",
          "Object-oriented programming principles",
          "Problem-solving techniques",
          "Program design and implementation",
          "Debugging and testing methodologies",
        ],
        after: [
          "The overall goal was to equip students with the knowledge and practical skills required to develop, test, and maintain Java applications effectively.",
        ],
      },
      {
        h: "Nature of tutoring tasks",
        rows: [],
        text: ["My responsibilities included:"],
        list: [
          "Assisting students with practical programming exercises",
          "Clarifying concepts discussed during lectures",
          "Supporting students in completing assignments and practical tasks",
          "Helping students identify and troubleshoot coding errors",
          "Guiding students through problem-solving processes",
          "Assisting students in preparing for assessments and practical evaluations",
        ],
      },
      {
        h: "How tutoring took place",
        rows: [],
        text: [
          "Student support was provided through a variety of approaches, including:",
        ],
        list: [
          "Scheduled face-to-face tutorial sessions",
          "Informal consultations",
          "Group discussions",
          "Practical programming demonstrations",
          "Individual academic support where required",
        ],
        after: [
          "The sessions focused not only on helping students complete tasks but also on improving their conceptual understanding and confidence in applying programming principles independently.",
        ],
      },
      {
        h: "One-on-one consultations",
        rows: [],
        text: [
          "Students were encouraged to seek additional support outside of formal tutorial sessions whenever they encountered difficulties. These individual consultations provided opportunities to address specific programming challenges, clarify misunderstandings, and offer personalised guidance tailored to each student's learning needs.",
        ],
      },
      {
        h: "Communication channels",
        rows: [],
        text: ["Communication with students took place through:"],
        list: [
          "Module WhatsApp groups",
          "Face-to-face interactions",
          "Direct referrals from the lecturer",
          "Informal academic discussions during consultation opportunities",
        ],
        after: [
          "These communication channels assisted in maintaining continuous engagement with students and provided an accessible platform for academic support.",
        ],
      },
      {
        h: "Support strategies",
        rows: [],
        text: [
          "To enhance student understanding and engagement, I adopted several support strategies:",
        ],
        list: [
          "Breaking complex concepts into smaller and more manageable components",
          "Using practical and relatable examples to explain programming principles",
          "Demonstrating programming solutions step-by-step",
          "Encouraging peer learning and collaborative problem-solving",
          "Promoting active participation during tutorial sessions",
          "Reinforcing concepts through repeated practical application",
        ],
        after: [
          "My goal was to reduce students' anxiety around programming while encouraging independent learning and critical thinking.",
        ],
      },
      {
        h: "Challenges",
        rows: [],
        text: [
          "Several challenges emerged throughout the tutoring experience:",
        ],
        list: [
          "Inconsistent and poor attendance at some tutorial sessions",
          "Significant differences in students' programming knowledge and skill levels",
          "Limited tutorial time relative to the number of students requiring assistance",
          "Difficulty in developing confidence among students who lacked prior programming experience",
          "Limited motivation and engagement from some students",
          "Transport and bus schedule constraints that affected student attendance and participation",
          "The development of a culture among some students focused on obtaining answers rather than understanding concepts, which negatively affected academic engagement and deep learning",
        ],
        after: [
          "These challenges highlighted the complexity of student support and reinforced the need for flexible tutoring approaches.",
        ],
      },
      {
        h: "Growth",
        rows: [],
        text: [
          "This tutoring role introduced me to the practical realities of supporting student learning and reinforced the importance of adapting explanations to different learning styles, abilities, and levels of prior knowledge.",
          "It also strengthened my communication, leadership, patience, and problem-solving skills while helping me develop a greater appreciation for the challenges students encounter in learning technical subjects.",
        ],
      },
      {
        h: "Reflection",
        rows: [],
        text: [
          "One of the most significant lessons I learned was that understanding a concept and explaining it effectively are two entirely different skills.",
          "While I initially approached tutoring from a technical perspective, I gradually recognised that successful tutoring requires more than subject knowledge. It requires empathy, patience, effective communication, active listening, and the ability to present concepts in ways that different learners can understand.",
          "The experience encouraged me to deepen both my technical competence and my ability to communicate complex ideas clearly. It also reinforced my belief that meaningful learning occurs when students are guided toward understanding rather than merely provided with answers.",
        ],
      },
      {
        h: "Impact",
        rows: [],
        text: [
          "Through tutorial sessions, consultations, demonstrations, and ongoing academic support, students were provided with additional opportunities to strengthen their understanding of programming concepts and complete practical activities more effectively.",
          "Although student engagement varied, the tutoring process created a supportive learning environment where students could seek clarification, address academic challenges, and develop greater confidence in their programming abilities. The experience also contributed significantly to my own growth as a tutor, mentor, and aspiring educator.",
        ],
      },
    ],
  },
  {
    year: "2026",
    role: "Development Software III Tutor",
    sections: [
      {
        h: "Module details",
        rows: [
          ["Module", "Development Software III"],
          ["Lecturer", "Prof. S.D. Eyono Obono"],
          ["Academic year", "2026"],
        ],
      },
      {
        h: "Context",
        rows: [],
        text: [
          "The Development Software III module differs significantly from the programming modules I previously tutored. Rather than focusing mainly on learning programming concepts, students were required to apply the knowledge acquired throughout their studies to the design and development of a complete software project.",
          "Students were expected to work on year-long projects involving requirements analysis, software design, application development, database implementation, testing, documentation, and project presentations. As a result, tutoring focused less on teaching content and more on guiding students through the software development process, helping them understand project requirements, overcome technical challenges, and remain on track throughout the year.",
        ],
      },
      {
        h: "Student demographics",
        rows: [],
        text: [
          "The students I supported were primarily third-year ICT students enrolled in the Development Software III module.",
          "The cohort consisted of students with varying technical abilities, levels of commitment, and project management skills. While some students worked confidently and independently, others required considerable guidance in planning, implementation, database design, documentation, and time management.",
          "Many students were experiencing their first large-scale software development project and were required to integrate knowledge gained from programming, databases, systems analysis, and software engineering modules.",
        ],
      },
      {
        h: "Module objectives",
        rows: [],
        text: ["The module aimed to develop students' ability to:"],
        list: [
          "Look within the community and identify the problem that needs to be solved and identify software requirements",
          "Design and implement software solutions",
          "Apply software engineering principles",
          "Develop and integrate database systems using Oracle APEX",
          "Work in teams of 2 (pairs) on long-term projects",
          "Produce technical documentation",
          "Present and defend project outcomes",
        ],
        after: [
          "The overall goal was to prepare students for professional software development environments by exposing them to the complete software development life cycle.",
        ],
      },
      {
        h: "Nature of tutoring tasks",
        rows: [],
        text: ["My responsibilities included:"],
        list: [
          "Assisting students with project requirements and specifications",
          "Guiding students on application design and implementation",
          "Supporting database design and database rules",
          "Clarifying module requirements and expectations",
          "Assisting students in troubleshooting technical problems",
          "Monitoring project progress",
          "Providing feedback on project work",
          "Facilitating discussions around software development concepts",
          "Supporting students during project consultations",
        ],
      },
      {
        h: "How tutoring took place",
        rows: [
          ["Monday", "08:00 - 09:00"],
          ["Monday", "14:00 - 16:00"],
          ["Thursday", "14:00 - 16:00"],
        ],
        text: [
          "Student support was provided through several approaches, including:",
        ],
        list: [
          "Scheduled face-to-face tutorial sessions",
          "Group consultations",
          "Project progress discussions",
          "Online support sessions",
          "Individual academic assistance",
        ],
        after: ["Official module sessions took place:"],
      },
      {
        h: "Additional online consultation sessions",
        rows: [],
        text: [
          "Because of the project-based nature of the module and the large number of students requiring assistance, the available tutorial time was often insufficient to accommodate every student who needed support. To address this challenge, additional consultation opportunities were provided through online Microsoft Teams sessions, particularly during weekends.",
          "These additional sessions enabled students to continue receiving support beyond normal tutorial hours and reduced the pressure on the formal consultation periods.",
        ],
      },
      {
        h: "One-on-one consultations",
        rows: [],
        text: [
          "One-on-one consultations became a significant component of my tutoring practice during 2026.",
          "It was common for students to contact me individually regarding project challenges, database implementation issues, application functionality, or clarification of project requirements.",
          "To manage these requests more effectively, I would usually communicate through the module WhatsApp group and invite students to indicate their preferred consultation times. Weekend consultation sessions were often prioritised because they provided greater flexibility for both students and myself.",
          "These consultations allowed students to receive personalised support tailored to the specific challenges they were experiencing within their projects.",
        ],
      },
      {
        h: "Communication channels",
        rows: [],
        text: ["Communication with students took place through:"],
        list: [
          "Module WhatsApp groups",
          "Face-to-face interactions",
          "Microsoft Teams",
          "One-on-one consultations",
          "Classroom discussions",
          "Direct communication with the lecturer when clarification was required",
        ],
        after: [
          "These communication channels allowed support to continue both inside and outside formal tutorial sessions.",
        ],
      },
      {
        h: "Support strategies",
        rows: [],
        text: [
          "To support student learning and project completion, I adopted several strategies:",
        ],
        list: [
          "Breaking large project requirements into smaller manageable tasks",
          "Guiding students through project milestones",
          "Encouraging collaborative problem-solving among students",
          "Conducting practical demonstrations",
          "Using real project examples during discussions",
          "Providing individual consultations where necessary",
          "Using Microsoft Teams breakout rooms to support multiple groups simultaneously",
          "Encouraging students to develop solutions independently before seeking assistance",
          "Helping students relate theoretical concepts to their project work",
        ],
        after: [
          "My goal was to help students become more confident and independent in managing their projects while providing support when necessary.",
        ],
      },
      {
        h: "Challenges",
        rows: [],
        text: [
          "Several challenges emerged throughout the tutoring experience:",
        ],
        list: [
          "High demand for consultations from students",
          "Limited available tutorial time",
          "Being the only tutor assigned to the module",
          "Difficulty ensuring all students received adequate support during scheduled sessions",
          "Students working at different stages of project development",
          "Technical challenges varying significantly across projects",
          "Balancing tutoring responsibilities with my own academic commitments",
          "Transport and scheduling limitations affecting consultation opportunities",
          "Students sometimes taking project work less seriously than required until deadlines approached",
          "Some students delaying project work and seeking assistance only when significant challenges had already accumulated",
        ],
        after: [
          "These challenges often resulted in situations where scheduled tutorial periods ended before all students had received the support they required. This was one of the major reasons additional online consultation sessions became necessary.",
        ],
      },
      {
        h: "Growth",
        rows: [],
        text: [
          "This tutoring role significantly expanded my understanding of student support, project mentoring, and academic leadership.",
          "Unlike previous tutoring experiences focused mainly on programming concepts, this role required ongoing engagement with students throughout an entire project lifecycle. It strengthened my ability to manage competing requests, prioritise student needs, facilitate discussions, and support students working on diverse technical challenges.",
          "The experience also improved my communication, leadership, problem-solving, mentoring, and time-management skills.",
        ],
      },
      {
        h: "Reflection",
        rows: [],
        text: [
          "One of the most important lessons I learned was that successful project work depends as much on student commitment and time management as it does on technical ability.",
          "Many students possessed the technical capabilities required to complete their projects but struggled with planning, consistency, and maintaining momentum throughout the year. This reinforced my belief that tutoring should address both technical and non-technical aspects of student development.",
          "I also learned the importance of flexibility. The decision to extend support through Microsoft Teams and weekend consultations emerged from recognising that traditional tutoring arrangements were not always sufficient for the needs of the module.",
          "Another lesson was that project-based learning requires students to take ownership of their work. While support is important, students ultimately benefit most when they actively engage with the challenges themselves, seek clarification early, and remain accountable for their progress.",
        ],
      },
      {
        h: "Impact",
        rows: [],
        text: [
          "Through face-to-face tutorials, online consultations, WhatsApp support, Microsoft Teams sessions, project mentoring, and one-on-one guidance, students received ongoing support throughout the development of their projects.",
          "The additional online sessions and use of Microsoft Teams helped address limitations associated with time and accessibility while ensuring that a greater number of students could receive assistance.",
          "Although challenges related to time, workload, and student engagement remained, the tutoring process provided students with opportunities to clarify project requirements, improve technical understanding, address database and software development challenges, and make progress toward successful project completion.",
          "The experience also contributed substantially to my own development as a tutor, mentor, communicator, and aspiring educator.",
        ],
      },
    ],
  },
];

export const tools = [
  {
    slug: "teams",
    name: "Microsoft Teams",
    why: "Teams allowed support to continue outside venue hours and helped students even during the weekend when the transport to the campus was not available.",
    how: "I put the message on the WhatsApp group to inform students about the schedule for the online session, group discussions, or one-on-one online consultations, shared my screen to walk through code, ask students to share their work and used channels and breakout rooms for group work and discussions.",
    impact:
      "Students received help without travelling, during their comfort schedule and online sessions made one-on-one support easier to arrange.",
  },
  {
    slug: "intellij",
    name: "IntelliJ IDEA",
    why: "IntelliJ is a professional Java development environment, as recommended by the module lecturer to allow students to learn with the same kind of tool used in industry.",
    how: "I used it for live demonstrations of writing, running, testing, and debugging Java programs.",
    impact:
      "Students became more comfortable reading error messages and debugging their own code.",
  },
  {
    slug: "chatgpt",
    name: "AI (ChatGPT)",
    why: "AI tools are now part of how students learn and work. Batista, Mesquita, and Carnaz (2024) argue that generative AI has significant potential to enhance higher education by improving student support, teaching efficiency, learning experiences, research activities, feedback, and personalised learning. However, they caution that its integration must be carefully managed because it raises challenges related to academic integrity, assessment practices, ethical use, and the need for institutional policies and pedagogical strategies that balance AI assistance with independent learning and critical thinking.",
    how: "I demonstrated writing clear prompts, asking AI to generate challenges that could be easily solved by AI and those that a student can solve using any AI but will still require them to be critical. I reinforced academic integrity throughout.",
    impact:
      "Even though majority of students refused, but some of them gained a more critical approach to AI output and used it to explain concepts rather than to copy answers.",
  },
  {
    slug: "viva-engage",
    name: "Viva Engage",
    why: "Viva Engage offered a community space where students could ask questions and learn from peers beyond scheduled sessions.",
    how: "I saw this from Mr Anele Mabomvana when he was using the platform for his Development Software 2 students, I posted announcements and problem exercises and encouraged students to share the solutions and comment on other students' solutions.",
    impact:
      "Few students (Ask:Tsholofelo, 0649062236; Rendzo, 0731962145; Onele, 0719968102 ) were able to participate, even though over 30 students joined, so I couldn't see the impact but for the few, they really appreciated the initiative and hope for more of the kind.",
  },
  {
    slug: "forms",
    name: "Microsoft Forms",
    why: "Forms made it quick to collect feedback, create quizzes, and check understanding without a heavy admin load.",
    how: "I created short concept-check quizzes, and feedback surveys, then reviewed the responses.",
    impact:
      "The responses showed which topics students found hardest, so I could inform the module lecturer and adjust upcoming sessions to provide more flexible support.",
  },
  {
    slug: "quiz",
    name: "Quiz.com",
    why: "Quiz.com turned revision into a game and encouraged active and full participation in a low-pressure way.",
    how: "I ran live quizzes before tests, covering syntax, object-oriented concepts and code-tracing questions.",
    impact:
      "Students were more engaged during revision, and the quiz results highlighted topics to revisit.",
  },
  {
    slug: "whatsapp",
    name: "WhatsApp & YouTube Channels",
    why: "WhatsApp and YouTube are the apps most students already use every day, so insights reached them quickly.",
    how: "I studied how much Instagram and Facebook reels on the quizzes related to programming could change how I perceive or see programming, so I found it interesting to create channels where students could see the quizzes, information,links to resources and short tips.",
    impact:
      "Important information reached students quickly, and some students could react on how these channels helped them fall in love with programming cause they would send their reactions to the quizzes. ",
  },
  {
    slug: "excalidraw",
    name: "Excalidraw",
    why: "Excalidraw is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
    how: "I used it to demonstrate and write the code in a clear environment.",
    impact:
      "Students could read and copy code examples more easily, and the explanations looked clearer.",
  },
];
export const bars: [string, number][] = [
  ["Sessions helpful, TP I 2024 (n=25)", 84],
  ["Clear or very clear, TP I May 2025 (n=11)", 100],
  ["Sessions helped address challenges, DS3 2026 (n=6)", 100],
  ["Tutor available, DS3 2026 (n=6)", 100],
];
export const cats = [
  "Student feedback",
  "Certificates",
  "Records of attendances",
  "Letters of appreciation",
];
export type Ev = {
  id: string;
  title: string;
  cat: string;
  kind: "pdf" | "image";
  file: string;
};
export const evidence: Ev[] = [
  {
    id: "EV-004",
    title: "2024 - 2026 student feedback summary",
    cat: "Student feedback",
    kind: "pdf",
    file: "/evidence/student-feedback-summary.pdf",
  },
  {
    id: "EV-005",
    title: "Diploma Certificate",
    cat: "Certificates",
    kind: "image",
    file: "/evidence/academic-certificate.jpg",
  },
  {
    id: "EV-006",
    title: "2025 Tutoring Certificate",
    cat: "Certificates",
    kind: "image",
    file: "/evidence/tutoring-certificate-1.jpg",
  },
  {
    id: "EV-007",
    title: "2024 Tutoring Certificate ",
    cat: "Certificates",
    kind: "image",
    file: "/evidence/tutoring-certificate-2.jpg",
  },
  {
    id: "EV-008",
    title: "Records of registers",
    cat: "Records of registers",
    kind: "pdf",
    file: "/evidence/consultation-register.pdf",
  },
  {
    id: "EV-012",
    title: "Letters from lecturers",
    cat: "Letters of appreciation",
    kind: "pdf",
    file: "/evidence/letter-from-lecturer.pdf",
  },
];
export const testimonials = [
  {
    who: "Lerato (0837094784)",
    role: "2025 Technical Programming I & 2026 Development Software III student",
    text: "He has been helpful and consistent with helping us with our projects and giving us advices on any modules as well, and ohh, he hastes it when students copy.",
  },
  {
    who: "Elsie Keetse (0727653300)",
    role: "2025 technical Programming I student",
    text: "Need to focus more on basics because if the structure is not well built at the foundation will fall. So, don't run to difficult exercises without checking if students have good basics of knowledge.",
  },
];
export const videos = [
  {
    title: "Strings",
    caption: "Online interactive tutorial on Teams.",
    file: "/evidence/videos/video-01.mp4",
    poster: "/evidence/videos/video-01.jpg",
  },
  {
    title: "Any questions?",
    caption: "End of session questions/key takeaways.",
    file: "/evidence/videos/video-02.mp4",
    poster: "/evidence/videos/video-02.jpg",
  },
  {
    title: "Arrays",
    caption: "Providing extra explanation on arrays.",
    file: "/evidence/videos/video-03.mp4",
    poster: "/evidence/videos/video-03.jpg",
  },
  {
    title: "Loops",
    caption: "Briefing on Loops before the tutoring exercises.",
    file: "/evidence/videos/video-04.mp4",
    poster: "/evidence/videos/video-04.jpg",
  },
  {
    title: "Project mentoring meeting",
    caption: "Here, I was assigned to guide HCI students on their project.",
    file: "/evidence/videos/video-05.mp4",
    poster: "/evidence/videos/video-05.jpg",
  },
  {
    title: "Conditional statements",
    caption: "Differences between if and switch statements.",
    file: "/evidence/videos/video-06.mp4",
    poster: "/evidence/videos/video-06.jpg",
  },
  {
    title: "One-on-one Technical Programming I consultations",
    caption: "",
    file: "/evidence/videos/video-07.mp4",
    poster: "/evidence/videos/video-07.jpg",
  },

];
export const screenshots = [
  {
    file: "/evidence/screenshots/shot-01.jpg",
    caption:
      "On here! I was giving extra support to students during the weekend",
  },
  {
    file: "/evidence/screenshots/shot-02.jpg",
    caption: "Afternoon/evening shared extra tutoring time slots with students",
  },
  {
    file: "/evidence/screenshots/shot-03.jpg",
    caption:
      "Clarity from the subject lecturer to make sure I deliver accurate support",
  },
  {
    file: "/evidence/screenshots/shot-04.jpg",
    caption: "Teams meeting during an online session",
  },
  {
    file: "/evidence/screenshots/shot-05.jpg",
    caption: "Teams breakout rooms",
  },
  {
    file: "/evidence/screenshots/shot-06.jpg",
    caption: "Follow-up message after a tutoring session",
  },
  {
    file: "/evidence/screenshots/shot-07.jpg",
    caption: "Asking the students for the consultations during the weekend",
  },

  {
    file: "/evidence/screenshots/shot-08.jpg",
    caption: "My programming tutoring framework",
  },
  {
    file: "/evidence/screenshots/shot-09.jpg",
    caption: "",
  },

  {
    file: "/evidence/screenshots/shot-10.jpg",
    caption: "Interactive Quiz on Quiz.com",
  },

  {
    file: "/evidence/screenshots/shot-11.jpg",
    caption: "Microsoft Forms Technical programming I quiz",
  },
  {
    file: "/evidence/screenshots/shot-12.jpg",
    caption: "My Microsoft Teams tutoring channels",
  },

  {
    file: "/evidence/screenshots/shot-13.jpg",
    caption: "Viva Engage engagements",
  },
  {
    file: "/evidence/screenshots/shot-14.jpg",
    caption: "Viva Engage summary",
  },
  {
    file: "/evidence/screenshots/shot-15.jpg",
    caption: "Email feedback regarding the quiz",
  },
  {
    file: "/evidence/screenshots/shot-16.jpg",
    caption: "Eish, my Advanced Diploma took longer than expected",
  },
  {
    file: "/evidence/screenshots/shot-17.jpg",
    caption: "Excalidraw",
  },
  {
    file: "/evidence/screenshots/shot-18.jpg",
    caption: "DS3 Oracle Apex project online session",
  },
  {
    file: "/evidence/screenshots/shot-19.jpg",
    caption:
      "I created this help framework to use it when breaking down database rule 6 from the module requirements",
  },
  {
    file: "/evidence/screenshots/shot-20.jpg",
    caption: "One-on-one session with a DS3 group/team",
  },
  {
    file: "/evidence/screenshots/shot-21.jpg",
    caption:
      "Attended Institutional Webinar on the Impact of Tutorship: Student Voice",
  },
  {
    file: "/evidence/screenshots/shot-22.jpg",
    caption: "",
  },
];
