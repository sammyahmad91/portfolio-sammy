export const profile = {
  name: "Sammy Ahmad",
  title: "Senior AI Engineer & ML Platform Architect",
  subtitle: "DevOps · MLOps · LLM Systems",
  tagline:
    "I design and ship production AI systems — from RAG pipelines and fine-tuned models to the GPU infrastructure that runs them.",
  location: "Los Angeles, CA",
  email: "ahmadsammy91@gmail.com",
  phone: "+1 213-582-6491",
  github: "https://github.com/sammyahmad91",
  linkedin: "https://linkedin.com/in/sammy-ahmad",
  yearsExperience: 7,
};

export const metrics = [
  { label: "Models in Production", value: "40+", accent: "neural" as const },
  { label: "Inference Throughput", value: "2M+/day", accent: "signal" as const },
  { label: "Match Accuracy", value: "92%", accent: "healthy" as const },
  { label: "Pipeline Uptime", value: "99.99%", accent: "alert" as const },
];

export const summary = {
  ai: "Seven years building production AI/ML systems — LLM applications, RAG architectures, fine-tuning pipelines, and real-time inference at scale. I own the full stack: model selection, embedding strategies, evaluation frameworks, and the MLOps infrastructure that keeps models reliable in production.",
  devops:
    "Deep platform engineering foundation across AWS, GCP, and Azure. Kubernetes, Terraform, GitOps, and observability — the operational backbone that makes AI systems dependable at enterprise scale.",
};

export const aiExpertise = {
  headline: "AI & Machine Learning Engineering",
  description:
    "I don't just deploy models — I architect intelligent systems. From semantic search and agentic workflows to custom fine-tuning and real-time prediction pipelines, I build AI products that solve real business problems and ship them with production-grade reliability.",
  capabilities: [
    {
      title: "LLM Applications & RAG",
      items: [
        "Production RAG pipelines with hybrid search (dense + sparse retrieval)",
        "Multi-agent orchestration for complex workflow automation",
        "Prompt engineering, chain-of-thought, and evaluation harnesses",
        "Fine-tuning (LoRA/QLoRA) on domain-specific corpora",
        "Context window optimization and token cost management at scale",
      ],
    },
    {
      title: "MLOps & Model Lifecycle",
      items: [
        "End-to-end pipelines: data prep → training → validation → deployment → monitoring",
        "Model registries, A/B testing, and shadow deployments for safe rollouts",
        "Automated retraining on drift detection with feature store integration",
        "SageMaker, Vertex AI, and Kubeflow pipeline orchestration",
        "GPU cluster scheduling and cost-optimized batch vs. real-time inference",
      ],
    },
    {
      title: "Applied ML & Deep Learning",
      items: [
        "NLP: NER, classification, summarization, semantic similarity",
        "Computer vision pipelines for document OCR and image analysis",
        "Recommendation systems and collaborative filtering at scale",
        "Time-series forecasting and anomaly detection models",
        "Embedding model selection, evaluation, and domain adaptation",
      ],
    },
    {
      title: "AI Infrastructure & Scaling",
      items: [
        "vLLM, TGI, and Triton inference servers with autoscaling",
        "Vector databases (Pinecone, Weaviate, pgvector) at production scale",
        "Kafka/Redis streaming for real-time feature serving and event-driven ML",
        "Model latency SLOs, GPU utilization dashboards, cost-per-inference tracking",
        "AI security: prompt injection defense, PII redaction, output guardrails",
      ],
    },
  ],
  stack: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "Anthropic Claude",
    "Hugging Face",
    "vLLM",
    "SageMaker",
    "Vertex AI",
    "Databricks",
    "MLflow",
    "Kubeflow",
    "Ray",
    "Pinecone",
    "Weaviate",
    "Apache Kafka",
    "FastAPI",
    "CUDA",
  ],
};

export const aiProjects = [
  {
    name: "Career Engine",
    tagline: "AI-powered job search that actually understands you",
    problem:
      "Traditional job boards rely on keyword matching — missing semantic fit, burying relevant roles, and forcing candidates to spend 15+ hours weekly on low-quality applications.",
    solution:
      "Built an end-to-end AI job search platform that parses resumes into structured skill embeddings, semantically matches candidates against live job feeds using hybrid RAG retrieval, and generates tailored cover letters and application materials via fine-tuned LLM agents.",
    impact: [
      "92% relevance score on matched roles (vs. ~40% on keyword search)",
      "3.2× increase in interview callback rate for beta users",
      "Sub-200ms semantic search across 500K+ indexed listings",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI GPT-4",
      "Pinecone",
      "Redis",
      "Kafka",
      "React",
      "PostgreSQL",
    ],
    accent: "neural" as const,
    featured: true,
  },
  {
    name: "DocuMind AI",
    tagline: "Enterprise document intelligence at scale",
    problem:
      "Enterprises process millions of unstructured documents annually — contracts, invoices, reports — with manual extraction costing $15–30 per document and error rates above 12%.",
    solution:
      "Designed a multi-modal document AI pipeline combining OCR, layout-aware transformers, and RAG over domain knowledge bases. Custom NER models extract entities with 97% F1, while an LLM summarization layer generates actionable insights and flags compliance risks.",
    impact: [
      "97.3% F1 on entity extraction across 12 document types",
      "85% reduction in manual processing time",
      "Processing 50K+ documents/day on auto-scaled GPU inference",
    ],
    stack: [
      "PyTorch",
      "LayoutLM",
      "Tesseract OCR",
      "SageMaker",
      "S3",
      "Step Functions",
      "OpenSearch",
      "LangChain",
      "FastAPI",
    ],
    accent: "signal" as const,
    featured: true,
  },
  {
    name: "PredictGuard",
    tagline: "Real-time fraud detection with adaptive ML",
    problem:
      "Financial platforms lose 1–3% of revenue to fraud, while rule-based systems generate 95%+ false positive rates that frustrate legitimate users and overwhelm analyst teams.",
    solution:
      "Engineered a streaming ML pipeline that scores transactions in under 50ms using an ensemble of gradient-boosted models and graph neural networks. Online learning adapts to emerging fraud patterns, with a human-in-the-loop feedback loop for continuous model improvement.",
    impact: [
      "94% fraud detection rate with <2% false positives",
      "<50ms p99 inference latency at 10K transactions/sec",
      "$2.1M estimated fraud prevented in first 6 months",
    ],
    stack: [
      "Spark Streaming",
      "XGBoost",
      "PyTorch Geometric",
      "Kafka",
      "Redis Feature Store",
      "MLflow",
      "Grafana",
      "Kubernetes",
      "Python",
    ],
    accent: "healthy" as const,
    featured: true,
  },
];

export const experience = [
  {
    role: "Senior AI / DevOps Engineer",
    company: "ByteSparkles",
    period: "Jun 2024 – Present",
    highlights: [
      "Built LLM inference infrastructure on GPU-enabled EKS clusters serving 2M+ daily requests with 99.99% uptime",
      "Designed RAG pipelines and embedding services for AI workflow automation platform (AGYL AI)",
      "Architected MLOps workflows with Databricks — automated training, evaluation gates, and model promotion",
      "Implemented GitOps with Flux across 15+ AI microservices, cutting model deployment time by 60%",
      "Built real-time observability for model latency, token throughput, and accuracy drift detection",
      "Mentored 5+ engineers on AI platform patterns and production ML best practices",
    ],
    tags: ["LLM Inference", "RAG", "MLOps", "Kubernetes", "Databricks"],
    focus: "ai" as const,
  },
  {
    role: "AI Platform / DevOps Engineer",
    company: "Altittudetechs",
    period: "Sep 2022 – Jun 2024",
    highlights: [
      "Deployed Spark and Databricks ML pipelines for enterprise analytics and predictive modeling clients",
      "Built Kafka streaming infrastructure (50K+ msg/sec) powering real-time feature stores and event-driven ML",
      "Designed CI/CD pipelines with automated model validation, data quality gates, and rollback triggers",
      "Established ML model SLOs/SLIs with error budgets driving reliability decisions for inference endpoints",
      "Integrated observability dashboards tracking model performance, data drift, and pipeline health",
    ],
    tags: ["Spark", "Kafka", "Feature Stores", "MLOps", "Databricks"],
    focus: "ai" as const,
  },
  {
    role: "AI / ML Platform Engineer",
    company: "Skema.AI",
    period: "Jun 2019 – Sep 2022",
    highlights: [
      "Owned end-to-end ML pipelines on SageMaker and Vertex AI — ETL, training, hyperparameter tuning, inference",
      "Built Kafka-based streaming pipelines feeding real-time features to online prediction models",
      "Deployed containerized ML microservices on Kubernetes with autoscaling inference endpoints",
      "Integrated model monitoring with automated alerts on accuracy degradation and data drift",
      "Reduced model deployment cycle from weeks to days via CI/CD automation and IaC",
    ],
    tags: ["SageMaker", "Vertex AI", "ML Pipelines", "Kubernetes", "Kafka"],
    focus: "ai" as const,
  },
];

export const infraProjects = [
  {
    name: "AGYL AI",
    url: "https://www.agyl.ai/",
    description:
      "LLM inference infrastructure and CI/CD for an AI workflow automation platform. GPU autoscaling, RAG serving layer, Kafka event streaming, GitOps deployments.",
    tags: ["LLM Inference", "RAG", "EKS", "Kafka"],
    accent: "neural" as const,
  },
  {
    name: "Synthesized",
    url: "https://www.synthesized.io",
    description:
      "Cloud infrastructure for AI-powered synthetic data generation. Terraform-provisioned environments, ML pipeline CI/CD, Vault secrets management.",
    tags: ["Synthetic Data", "Terraform", "ML Pipelines"],
    accent: "signal" as const,
  },
  {
    name: "CoderZ",
    url: "https://gocoderz.com/",
    description:
      "Scalable GKE infrastructure for thousands of concurrent real-time coding sessions with HPA and observability.",
    tags: ["GKE", "Real-time", "HPA"],
    accent: "healthy" as const,
  },
  {
    name: "Seconds",
    url: "http://www.seconds.com.br",
    description:
      "DevOps transformation to microservices on AWS. Terraform IaC, GitHub Actions CI/CD, 60% faster releases.",
    tags: ["AWS", "Microservices", "CI/CD"],
    accent: "alert" as const,
  },
];

export const skillCategories = [
  {
    name: "AI / ML Engineering",
    color: "neural" as const,
    skills: [
      "LLM Applications & RAG",
      "Fine-tuning (LoRA/QLoRA)",
      "PyTorch & TensorFlow",
      "NLP & Computer Vision",
      "MLOps & Model Lifecycle",
      "Prompt Engineering",
      "Agent Orchestration",
    ],
  },
  {
    name: "ML Platform & Tools",
    color: "neural" as const,
    skills: [
      "LangChain / LangGraph",
      "SageMaker & Vertex AI",
      "Databricks & MLflow",
      "Kubeflow & Ray",
      "Hugging Face",
      "vLLM & Triton",
      "OpenAI / Anthropic APIs",
    ],
  },
  {
    name: "Vector & Data Systems",
    color: "signal" as const,
    skills: [
      "Pinecone & Weaviate",
      "pgvector & OpenSearch",
      "Apache Kafka",
      "Apache Spark",
      "Feature Stores",
      "ETL Pipelines",
      "BigQuery & Kinesis",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    color: "healthy" as const,
    skills: [
      "AWS (EKS, SageMaker, Lambda)",
      "GCP (GKE, Vertex AI, BigQuery)",
      "Azure (AKS, DevOps)",
      "Terraform & Ansible",
      "Kubernetes & Docker",
      "Helm & GitOps",
    ],
  },
  {
    name: "Languages",
    color: "alert" as const,
    skills: [
      "Python",
      "TypeScript",
      "Bash",
      "Go",
      "SQL",
      "Node.js",
    ],
  },
  {
    name: "Observability & Security",
    color: "signal" as const,
    skills: [
      "Prometheus & Grafana",
      "Datadog & ELK",
      "Model Monitoring",
      "Vault & Secrets Mgmt",
      "DevSecOps",
      "ISO 27001",
    ],
  },
];

export const certifications = [
  "AWS Certified DevOps Engineer – Professional",
  "AWS Certified Security – Specialty",
  "Certified Kubernetes Administrator (CKA)",
  "HashiCorp Terraform Associate",
];

export const education = {
  degree: "Master of Science in Computer Science",
  school: "Columbia University",
  period: "Aug 2017 – May 2019",
  note: "Coursework in machine learning, natural language processing, distributed systems, and algorithms — applied directly to production AI architecture decisions.",
};

export const navLinks = [
  { href: "#ai-projects", label: "AI Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
