export default function App() {
  const skills = [
    { label: "CAD & Design", values: ["SolidWorks", "Technical Drawing (GD&T, ISO fits)"] },
    { label: "Manufacturing & Prototyping", values: ["MAG Welding", "3D Printing", "Soldering"] },
    { label: "Programming & Robotics", values: ["MATLAB", "Simulink", "Python (Basics)","ROS 2 (Basics)"] },
  ];

  const education = [
    {
      school: "Technical University of Munich (TUM)",
      degree: "B.Sc. Mechanical Engineering",
      date: "Present",
    },
  ];

  const experience = [
    { title: "Tutor for MATLAB", org: "TUM", date: "OCT 2025 - Present" },
    { title: "Mechanical Engineering Intern", org: "Eberhardt Manufacturing", date: "APR 2025 - AUG 2025" },
    { title: "Mechanical Subteam Lead", org: "TUM WARR (Robotics Student Team)", date: "SEP 2023 - NOV 2024" },
  ];

  const projects = [
    {
      title: "Sensor-integrated Deep Drawing Tool",
      text: "Designed and developed a deep drawing tool equipped with sensors and a high-speed camera as part of my bachelor thesis. The goal was to collect process data from deep drawing operations to improve simulation models. Focused on high-precision design and implemented a 3D Digital Image Correlation (3D DIC) setup for deformation analysis.",
      tags: ["SolidWorks", "Technical Drawing", "DIC"],
      image: "/images/dd4.png",
    },
    {
      title: "6-DOF Robotic Arm",
      text: "Designed and built a 6-DOF robotic arm with a gear-driven gripper as part of a robotics student team. Focused on lightweight structural design and cost-efficient manufacturing. Developed in SolidWorks and fabricated using 3D-printed components, enabling rapid prototyping and iterative design improvements.",
      tags: ["SolidWorks", "Prototyping", "Robotics"],
      image: "/images/arm.png",
    },
    {
      title: "Cable Car Suspension & Gearbox Design",
      text: "Designed a cable car suspension system and gearbox as part of a machine elements course. Performed analytical design and dimensioning, including load calculations and proper shaft-bearing configuration. Created detailed technical drawings in accordance with ISO standards and GD&T.",
      tags: ["Assembly Design", "GD&T", "Load Calculations"],
      image: "/images/ME2.png",
    },
  ];

  const panelBase =
    "rounded-[2rem] border border-white/40 bg-white/30 p-8 backdrop-blur-2xl shadow-[0_12px_50px_rgba(0,0,0,0.25)] transition-all duration-300";

  const panelNear = panelBase;
  const panelMid = panelBase;
  const panelFar = panelBase;

  const hasProjects = projects.length > 0;

  return (
    <div className="min-h-screen font-sans text-[#0f172a] tracking-[0.01em]">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/nasa14.jpg')" }}
      />
      <div className="fixed inset-0 bg-black/10" />

      <div className="relative z-10 min-h-screen lg:flex">
        <aside className="p-4 lg:sticky lg:top-0 lg:h-screen lg:w-[30rem] lg:flex-shrink-0 lg:p-6">
          <div className="h-full rounded-[2rem] border border-white/25 bg-white/20 p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <div className="flex h-full flex-col">
              <div className="flex flex-col items-center pt-2 text-center">
                <img
                  src="/images/face.jpg"
                  alt="Profile"
                  className="mb-5 w-36 h-auto object-contain"
                />
                <h1 className="text-[1.05rem] font-semibold uppercase tracking-[0.035em] text-[#111827]/95 leading-none">
                  Lisa Joswig
                </h1>
                <p className="mt-1 text-[0.72rem] font-medium uppercase tracking-[0.06em] text-[#111827]/70 leading-none">
                  Mechanical Engineering Student
                </p>
                <p className="mt-4 text-[0.78rem] font-medium text-[#111827]/80 leading-none">
                  Munich, Germany
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-[1.05rem] font-semibold uppercase tracking-[0.045em] text-[#111827]/90">
                  About Me
                </h2>
                <p className="mt-3 text-[0.88rem] font-normal leading-[1.55] text-[#111827]/85">
                  Mechanical Engineering student at TUM with experience in developing mechanical systems through academic projects, internships and work in a robotics student team. Skilled in CAD (SolidWorks), analytical dimensioning and mechanical design of components and assemblies. Experienced in creating technical drawings according to ISO standards and GD&T. Hands-on experience in building and iterating prototypes in the workshop. Background in MATLAB, with basic knowledge of C and C++. Currently developing skills in Python and ROS 2 to integrate mechanical systems with autonomous functionality. Strong interest in robotics and intelligent systems.
                </p>
              </div>

              <div className="mt-auto pt-6">
                <a
                  href="/CV_LJ_robominds.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full border border-white/20 bg-white/12 px-5 py-3 text-center text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-[#111827]/85 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/25 hover:shadow-lg"
                >
                  Open CV
                </a>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-6">
          <div className="mx-auto max-w-6xl space-y-5">

            <section className={panelNear}>
              <h2 className="mb-6 text-center text-[1.25rem] font-semibold uppercase tracking-[0.055em] text-[#111827]/95">
                Skills
              </h2>
              <div className="space-y-6">
                {skills.map((group) => (
                  <div key={group.label} className="grid gap-4 md:grid-cols-[18rem_1fr]">
                    <h3 className="text-[1rem] font-semibold text-[#111827]/92">{group.label}</h3>
                    <div className="flex flex-wrap gap-x-2 text-[0.95rem] font-normal text-[#111827]/80">
                      {group.values.map((value, index) => (
                        <span key={value}>
                          {value}
                          {index < group.values.length - 1 && (
                            <span className="mx-2 text-[#111827]/40">|</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={panelMid}>
              <h2 className="mb-6 text-center text-[1.25rem] font-semibold uppercase tracking-[0.055em] text-[#111827]/95">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.school} className="flex justify-between gap-6">
                    <div>
                      <h3 className="text-[1rem] font-semibold text-[#111827]/92">
                        {item.school}
                      </h3>
                      <p className="text-[0.95rem] font-normal text-[#111827]/80">
                        {item.degree}
                      </p>
                    </div>
                    <div className="shrink-0 text-[0.95rem] font-medium text-[#111827]/75">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={panelFar}>
              <h2 className="mb-8 text-center text-[1.25rem] font-semibold uppercase tracking-[0.055em] text-[#111827]/95">
                Experience
              </h2>

              <div className="relative mx-auto max-w-3xl">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#111827]/35" />

                <div className="space-y-10">
                  {experience.map((item, index) => {
                    const left = index % 2 === 0;

                    return (
                      <div
                        key={`${item.title}-${item.date}`}
                        className="relative grid grid-cols-2 items-center"
                      >
                        <div className="pr-10 text-right">
                          {left ? (
                            <>
                              <h3 className="text-[1rem] font-semibold text-[#111827]/92">
                                {item.title}
                              </h3>
                              <p className="text-[0.94rem] font-normal text-[#111827]/80">
                                {item.org}
                              </p>
                            </>
                          ) : (
                            <p className="text-[0.94rem] font-medium text-[#111827]/75">
                              {item.date}
                            </p>
                          )}
                        </div>

                        <div className="pl-10">
                          {!left ? (
                            <>
                              <h3 className="text-[1rem] font-semibold text-[#111827]/92">
                                {item.title}
                              </h3>
                              <p className="text-[0.94rem] font-normal text-[#111827]/80">
                                {item.org}
                              </p>
                            </>
                          ) : (
                            <p className="text-[0.94rem] font-medium text-[#111827]/75">
                              {item.date}
                            </p>
                          )}
                        </div>

                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111827]/95" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className={panelNear}>
              <h2 className="mb-6 text-center text-[1.25rem] font-semibold uppercase tracking-[0.055em] text-[#111827]/95">
                Projects
              </h2>

              {hasProjects ? (
                <div className="space-y-5">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="rounded-[1.5rem] border border-white/15 bg-white/7 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10"
                    >
                      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="aspect-[16/10] w-[70%] mx-auto rounded-[1.25rem] border border-white/15 object-cover"
                        />
                        <div>
                          <h3 className="text-[1rem] font-semibold text-[#111827]/92">
                            {project.title}
                          </h3>
                          <p className="mt-3 text-[0.94rem] font-normal leading-[1.6] text-[#111827]/82">
                            {project.text}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#111827]/78"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[0.95rem] text-[#111827]/80">
                  No projects added yet.
                </p>
              )}
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}