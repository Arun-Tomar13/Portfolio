  "use client";

  import { motion } from "framer-motion";
  import type { IconType } from "react-icons";
  
import {
  SiPostman ,
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFastify,
  SiGithub,
  SiJavascript,
  SiKnexdotjs,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

  import Section from "@/components/Section";
  import { fadeUp, stagger } from "@/components/motion";

  
const skills: { name: string; Icon: IconType }[] = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Fastify", Icon: SiFastify },
  { name: "Python", Icon: SiPython },
  { name: "C++", Icon: SiCplusplus },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "Drizzle ORM", Icon: SiDrizzle },
  { name: "Knex.js", Icon: SiKnexdotjs },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Docker", Icon: SiDocker },
  { name: "Postman", Icon: SiPostman },
  { name: "GitHub", Icon: SiGithub },

];


  export default function Skills() {
    return (
      <Section id="skills" eyebrow="// Skills" title="Tools I use to ship.">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="relative isolate overflow-hidden rounded-card border border-line bg-[linear-gradient(145deg,rgba(18,24,33,0.96),rgba(12,16,23,0.98))] p-4 shadow-[0_28px_80px_-52px_rgba(227,179,65,0.35)] sm:p-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 -z-10 size-64 rounded-full bg-accent/[0.07] blur-3xl"
          />
          <div className="relative mb-5 flex flex-col gap-4 border-b border-line/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.16em] text-accent">
                CORE TOOLKIT
              </p>
              <p className="max-w-[620px] text-sm leading-6 text-muted">
                A practical stack for building responsive interfaces, APIs,
                databases, and deployable services with clean version control.
              </p>
            </div>
            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[rgba(227,179,65,0.22)] bg-[rgba(227,179,65,0.06)] px-3 py-2 font-mono text-xs text-accent">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              {skills.length} skills
            </span>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
  className="flex flex-wrap justify-center gap-4 p-2 py-4 "
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
      className="group flex min-h-20.5 min-w-25 max-w-25 flex-1 flex-col items-center justify-center gap-2 rounded-chip border border-line bg-elevated p-3 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(22 py-47,179,65,0.45)] hover:bg-panel sm:flex-none"
              >
                <skill.Icon
                  aria-hidden="true"
                  className="size-6 shrink-0 text-accent transition-transform duration-200 group-hover:scale-110"
                />
                <p
                  className="w-full wrap-break-word text-[12px] font-medium leading-4 text-text sm:text-[13px]"
                  title={skill.name}
                >
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    );
  }
