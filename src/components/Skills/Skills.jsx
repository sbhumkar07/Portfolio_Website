import { motion } from "framer-motion";

const categories = [
  { title: "GenAI & Agentic AI", skills: ["LangGraph", "LangChain", "RAG", "AWS Bedrock", "OpenAI API", "LLM Tool Calling", "Prompt Engineering", "Hybrid Search", "Embeddings", "MCP"] },
  { title: "Backend & Full-Stack", skills: ["Python", "Java", "Spring Boot", "FastAPI", "React", "TypeScript", "Node.js", "REST APIs", "Microservices"] },
  { title: "Machine Learning & Data", skills: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "SQL Server", "Snowflake", "PostgreSQL", "NLP", "Hugging Face"] },
  { title: "Cloud, MLOps & Security", skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "LangSmith", "RAGAS", "MLflow", "CloudWatch", "JWT / RBAC"] },
];

const Skills = () => (
  <section id="skills" className="border-b border-neutral-800 pb-24">
    <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -70, opacity: 0 }} transition={{ duration: 0.6 }} className="my-20 text-center text-4xl">
      Skills
    </motion.h2>
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category, index) => (
        <motion.div key={category.title} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 35, opacity: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-2xl border border-neutral-700 p-6">
          <h3 className="mb-6 text-center text-xl font-semibold text-purple-200">{category.title}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {category.skills.map((skill) => <span key={skill} className="rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-200">{skill}</span>)}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
