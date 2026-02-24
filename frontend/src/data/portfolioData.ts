import type { PortfolioContent } from "@/types/portfolio";

const t = (es: string, en: string) => ({ es, en });

export const portfolioContent: PortfolioContent = {
  hero: {
    eyebrow: t("Maestría en Big Data y Analítica · UNIR", "Master's in Big Data and Analytics · UNIR"),
    title: t("Portafolio académico con evidencias reales de trabajo", "Academic portfolio built from real coursework evidence"),
    description: t(
      "Este sitio resume materias, actividades y aprendizajes de la maestría usando evidencia curada de tareas, prácticas y notebooks desarrollados durante el programa.",
      "This site summarizes courses, assignments, and learning outcomes from the master's program using curated evidence from tasks, practice work, and notebooks completed during the program.",
    ),
    nav: {
      programa: t("Programa", "Program"),
      cuartiles: t("Cuartiles", "Quarters"),
      materias: t("Materias", "Courses"),
      evidencias: t("Evidencias", "Evidence"),
      trayectoria: t("Trayectoria", "Journey"),
    },
  },
  programOverview: {
    title: t("Panorama del programa", "Program overview"),
    subtitle: t(
      "Resumen del enfoque de la maestría y de cómo se documenta el trabajo realizado.",
      "A concise view of the master's focus and how completed work is documented.",
    ),
    summary: [
      t(
        "La maestría combina fundamentos de datos, gobierno del dato, ciencia de datos aplicada y procesamiento masivo con prácticas técnicas en notebooks, scripts y reportes.",
        "The master's program combines data foundations, data governance, applied data science, and large-scale processing with hands-on work in notebooks, scripts, and reports.",
      ),
      t(
        "Para este portafolio se revisaron carpetas por materia y cuartil, priorizando actividades y tareas propias, y excluyendo material base del curso como temas PDF o dumps de ejemplo.",
        "For this portfolio, subject and quarter folders were reviewed, prioritizing authored assignments and tasks, while excluding base course material such as topic PDFs or sample dumps.",
      ),
      t(
        "El resultado es una vista profesional y bilingüe de lo trabajado: técnicas, herramientas, tipo de entregables y progresión de competencias.",
        "The result is a bilingual professional view of the completed work: techniques, tools, deliverables, and skill progression.",
      ),
    ],
    methodologyTitle: t("Criterios de curación de evidencias", "Evidence curation criteria"),
    methodologyPoints: [
      t("Se resumieron actividades/tareas propias y prácticas relevantes.", "Authored assignments/tasks and relevant practice work were summarized."),
      t("Los PDF raíz de cada materia solo se usaron como contexto temático.", "Root-level course PDFs were used only as thematic context."),
      t("Se omitieron rutas locales y detalles sensibles del entorno personal.", "Local paths and sensitive environment details were omitted."),
      t("Las descripciones destacan técnicas, datasets y entregables.", "Descriptions emphasize techniques, datasets, and deliverables."),
    ],
  },
  quarterOverviews: [
    {
      quarter: "Q1",
      title: t("Q1 · Fundamentos de datos, gobierno y aplicaciones", "Q1 · Data foundations, governance, and applications"),
      summary: t(
        "El primer cuatrimestre se centró en fundamentos de bases de datos masivas, gobierno del dato y una primera aproximación a proyectos aplicados de ciencia de datos con entregables individuales y grupales.",
        "The first quarter focused on large-scale database fundamentals, data governance, and an initial approach to applied data science projects through individual and team deliverables.",
      ),
      themes: [
        t("Consultas y agregaciones en MongoDB", "MongoDB queries and aggregations"),
        t("Integración con Neo4j y automatización con Node.js", "Neo4j integration and Node.js automation"),
        t("Privacidad, gobierno y toma de decisiones basada en datos", "Privacy, governance, and data-driven decision making"),
        t("Definición y comunicación de un proyecto aplicado", "Applied project framing and communication"),
      ],
    },
    {
      quarter: "Q2",
      title: t("Q2 · Análisis, IA y procesamiento masivo", "Q2 · Analytics, AI, and large-scale processing"),
      summary: t(
        "En el segundo cuatrimestre el trabajo se movió hacia el análisis exploratorio e inferencial con R, laboratorios de inteligencia artificial y ejercicios de Spark/Kafka para procesamiento y streaming.",
        "In the second quarter, work shifted toward exploratory and inferential analysis in R, artificial intelligence labs, and Spark/Kafka exercises for batch and streaming processing.",
      ),
      themes: [
        t("EDA, frecuencias y visualización en R", "EDA, frequency analysis, and visualization in R"),
        t("HDFS, Spark SQL, MLlib y Structured Streaming", "HDFS, Spark SQL, MLlib, and Structured Streaming"),
        t("Árboles de decisión, reglas, ensembles y laboratorio de IA", "Decision trees, rules, ensembles, and AI lab work"),
        t("Notebooks técnicos como evidencia reproducible", "Technical notebooks as reproducible evidence"),
      ],
    },
  ],
  subjects: [
    {
      id: "bddm-q1",
      name: t("Bases de Datos para Datos Masivos", "Databases for Massive Data"),
      quarter: "Q1",
      semesterLabel: t("Primer cuatrimestre", "First quarter"),
      focus: t(
        "NoSQL, consultas avanzadas, agregación, modelado y uso de tecnologías como MongoDB, Neo4j y Redis en escenarios de datos masivos.",
        "NoSQL, advanced querying, aggregation, modeling, and the use of technologies such as MongoDB, Neo4j, and Redis in large-scale data scenarios.",
      ),
      summary: t(
        "Se trabajó con colecciones JSON, consultas y pipelines de agregación en MongoDB, además de ejercicios integrados en Node.js con conexión a MongoDB y Neo4j para resolver casos prácticos sobre datos reales.",
        "Work included JSON collections, MongoDB queries and aggregation pipelines, plus integrated Node.js exercises connecting to MongoDB and Neo4j to solve practical cases on real-world datasets.",
      ),
      workItems: [
        {
          id: "bddm-a1",
          title: t("Actividad individual con MongoDB (books / companies)", "Individual MongoDB activity (books / companies)"),
          kind: "actividad",
          summary: t(
            "Exploración de colecciones y resolución de ejercicios con aggregate, match, group, project, conteos y filtros sobre colecciones de libros y compañías.",
            "Collection exploration and exercise solving using aggregate, match, group, project, counts, and filters over books and companies collections.",
          ),
          tools: ["MongoDB", "Mongo Shell", "JSON"],
          artifacts: ["script JS", "reporte PDF", "datasets JSON"],
        },
        {
          id: "bddm-a2",
          title: t("Actividad grupal de integración MongoDB + Neo4j", "Team integration activity with MongoDB + Neo4j"),
          kind: "proyecto_grupal",
          summary: t(
            "Desarrollo de script en Node.js para automatizar consultas y actualizaciones en MongoDB, además de integración con Neo4j para modelado y operación de datos en grafo.",
            "Development of a Node.js script to automate MongoDB queries and updates, plus Neo4j integration for graph-based data modeling and operations.",
          ),
          tools: ["Node.js", "MongoDB Driver", "Neo4j Driver", "Docker Compose"],
          artifacts: ["script JS", "reporte PDF", "configuración local"],
          notes: t(
            "Se observan evidencias de trabajo con datos de locales e inspecciones y reglas de actualización de campos.",
            "Evidence shows work with business premises and inspection datasets plus field update rules.",
          ),
        },
        {
          id: "bddm-practicas",
          title: t("Conjunto de tareas y prácticas de bases NoSQL", "NoSQL tasks and practice set"),
          kind: "tarea",
          summary: t(
            "Se consolidaron entregables con colecciones JSON, scripts y ejercicios complementarios relacionados con MongoDB, grafos y seminarios de Redis.",
            "Deliverables were consolidated with JSON collections, scripts, and complementary exercises related to MongoDB, graph databases, and Redis seminars.",
          ),
          tools: ["MongoDB", "Neo4j", "Redis (contexto)", "JSON"],
          artifacts: ["scripts", "PDFs de entrega", "colecciones de datos"],
        },
      ],
    },
    {
      id: "cda-q1",
      name: t("Ciencia de Datos Aplicada", "Applied Data Science"),
      quarter: "Q1",
      semesterLabel: t("Primer cuatrimestre", "First quarter"),
      focus: t(
        "Aplicación de metodologías de ciencia de datos a problemas de negocio, definición de propuestas y comunicación de resultados.",
        "Applying data science methodologies to business problems, proposal design, and communication of results.",
      ),
      summary: t(
        "Las evidencias muestran un entregable individual y una actividad grupal orientada a un proyecto aplicado, con documentación, presentación en video y material del proyecto empaquetado.",
        "Evidence shows an individual deliverable and a team activity focused on an applied project, including documentation, a video presentation, and packaged project materials.",
      ),
      workItems: [
        {
          id: "cda-a1",
          title: t("Actividad individual de ciencia de datos aplicada", "Individual applied data science assignment"),
          kind: "actividad",
          summary: t(
            "Entrega en formato PDF de una actividad enfocada en aplicar conceptos de ciencia de datos a un caso concreto.",
            "PDF-based submission focused on applying data science concepts to a specific case.",
          ),
          tools: ["Análisis aplicado", "Documentación"],
          artifacts: ["reporte PDF"],
        },
        {
          id: "cda-a2",
          title: t("Proyecto grupal Auto-Trip Companion", "Team project Auto-Trip Companion"),
          kind: "proyecto_grupal",
          summary: t(
            "Actividad grupal con evidencia documental, entrega en PDF y presentación en video, orientada a plantear una solución de proyecto Big Data.",
            "Team activity with documentation, PDF submission, and video presentation focused on proposing a Big Data project solution.",
          ),
          tools: ["Diseño de proyecto", "Trabajo colaborativo", "Presentación"],
          artifacts: ["PDF", "DOCX", "video MP4", "paquete del proyecto"],
        },
      ],
    },
    {
      id: "gobierno-q1",
      name: t("Gobierno del dato y toma de decisiones", "Data Governance and Decision-Making"),
      quarter: "Q1",
      semesterLabel: t("Primer cuatrimestre", "First quarter"),
      focus: t(
        "Gobierno del dato, calidad, privacidad, seguridad y uso de información para soportar decisiones.",
        "Data governance, quality, privacy, security, and information use to support decisions.",
      ),
      summary: t(
        "Se trabajó con orígenes de datos en CSV y JSON y reportes de actividades relacionadas con gestión del dato, además de una entrega específica sobre privacidad y seguridad.",
        "Work included CSV and JSON data sources and activity reports related to data management, plus a dedicated deliverable on privacy and security.",
      ),
      workItems: [
        {
          id: "gov-a1",
          title: t("Actividad 1: gestión y preparación de orígenes de datos", "Activity 1: data source management and preparation"),
          kind: "actividad",
          summary: t(
            "Uso de múltiples orígenes para ejercicios de análisis y gestión de datos, documentando el trabajo en un entregable formal.",
            "Use of multiple sources for data analysis and management exercises, documented in a formal deliverable.",
          ),
          tools: ["CSV", "JSON", "Integración de datos", "Documentación"],
          artifacts: ["DOCX", "datasets CSV/JSON"],
        },
        {
          id: "gov-a2",
          title: t("Actividad 2: privacidad y seguridad", "Activity 2: privacy and security"),
          kind: "actividad",
          summary: t(
            "Entrega enfocada en el vínculo entre seguridad de la información, privacidad y prácticas de gobierno del dato.",
            "Submission focused on the relationship between information security, privacy, and data governance practices.",
          ),
          tools: ["Análisis conceptual", "Gobierno del dato", "Privacidad"],
          artifacts: ["reporte PDF"],
        },
      ],
    },
    {
      id: "analisis-q2",
      name: t("Análisis e Interpretación de Datos", "Data Analysis and Interpretation"),
      quarter: "Q2",
      semesterLabel: t("Segundo cuatrimestre", "Second quarter"),
      focus: t(
        "Análisis exploratorio, estadística descriptiva e interpretación de resultados con apoyo de R y conjuntos de datos de práctica.",
        "Exploratory analysis, descriptive statistics, and result interpretation using R and practice datasets.",
      ),
      summary: t(
        "Las evidencias muestran una combinación de práctica en R con scripts de visualización y ejercicios más completos de exploración estadística sobre datasets externos y académicos.",
        "Evidence shows a combination of R practice scripts for visualization and more complete statistical exploration exercises on external and academic datasets.",
      ),
      workItems: [
        {
          id: "analisis-a1",
          title: t("Actividad 1 con datasets CSV", "Activity 1 with CSV datasets"),
          kind: "actividad",
          summary: t(
            "Trabajo con conjuntos de datos sobre redes sociales y rendimiento académico, acompañado por entrega en PDF.",
            "Work with datasets about social networks and academic performance, accompanied by a PDF submission.",
          ),
          tools: ["CSV", "Análisis de datos", "Reporte"],
          artifacts: ["reporte PDF", "datasets CSV"],
        },
        {
          id: "analisis-r-practice",
          title: t("Prácticas en R de estadística y visualización", "R practice for statistics and visualization"),
          kind: "practica",
          summary: t(
            "Scripts en R para cálculos descriptivos, tablas de frecuencias, histogramas, diagramas de barras y comparativos de series simples.",
            "R scripts for descriptive calculations, frequency tables, histograms, bar charts, and simple series comparisons.",
          ),
          tools: ["R", "ggplot2", "summarytools", "tidyverse"],
          artifacts: ["scripts R", "documentos de práctica"],
        },
        {
          id: "analisis-eda",
          title: t("Exploración estadística con datasets externos", "Statistical exploration with external datasets"),
          kind: "practica",
          summary: t(
            "Evidencia de EDA y visualización sobre datos de LendingClub y Gapminder, incluyendo frecuencias, agrupaciones y relaciones entre variables.",
            "Evidence of EDA and visualization on LendingClub and Gapminder data, including frequencies, grouped variables, and variable relationship analysis.",
          ),
          tools: ["R", "ggplot2", "gapminder", "EDA"],
          artifacts: ["script R", "gráficos exploratorios"],
        },
      ],
    },
    {
      id: "ipmd-q2",
      name: t("Ingeniería para el Procesado Masivo de Datos", "Engineering for Massive Data Processing"),
      quarter: "Q2",
      semesterLabel: t("Segundo cuatrimestre", "Second quarter"),
      focus: t(
        "Procesamiento distribuido con HDFS y Spark, análisis batch, MLlib y procesamiento en streaming con Kafka.",
        "Distributed processing with HDFS and Spark, batch analytics, MLlib, and streaming processing with Kafka.",
      ),
      summary: t(
        "Las actividades en notebooks muestran trabajo técnico en PySpark, incluyendo Spark SQL, MLlib y Structured Streaming con integración Kafka.",
        "Notebook activities show technical work in PySpark, including Spark SQL, MLlib, and Structured Streaming with Kafka integration.",
      ),
      workItems: [
        {
          id: "ipmd-a1",
          title: t("Actividad 1: HDFS, Spark SQL y MLlib", "Activity 1: HDFS, Spark SQL and MLlib"),
          kind: "actividad",
          summary: t(
            "Notebook con ejercicios guiados y resolución práctica usando sesión Spark, lectura y procesamiento de datos y componentes de MLlib.",
            "Notebook with guided exercises and practical solutions using a Spark session, data reading/processing, and MLlib components.",
          ),
          tools: ["PySpark", "HDFS", "Spark SQL", "MLlib"],
          artifacts: ["notebook .ipynb", "reporte PDF"],
        },
        {
          id: "ipmd-a2",
          title: t("Actividad 2 grupal: Structured Streaming con Kafka", "Team activity 2: Structured Streaming with Kafka"),
          kind: "proyecto_grupal",
          summary: t(
            "Notebook sobre streaming estructurado con Kafka en Spark, con transformación y agregación de datos, incluyendo cálculo de retraso medio en vuelos.",
            "Notebook on Spark Structured Streaming with Kafka with data transformation and aggregation, including mean flight delay calculations.",
          ),
          tools: ["PySpark", "Structured Streaming", "Kafka", "DataFrames"],
          artifacts: ["notebook .ipynb", "reporte PDF"],
        },
      ],
    },
    {
      id: "tia-q2",
      name: t("Técnicas de Inteligencia Artificial", "Artificial Intelligence Techniques"),
      quarter: "Q2",
      semesterLabel: t("Segundo cuatrimestre", "Second quarter"),
      focus: t(
        "Modelos de clasificación, árboles de decisión, reglas, ensemble learning y ejercicios prácticos con notebooks.",
        "Classification models, decision trees, rules, ensemble learning, and practical notebook-based exercises.",
      ),
      summary: t(
        "Se identifican actividades con notebook, reportes y datasets para laboratorios de IA, además de una actividad grupal y ejemplos prácticos de reglas de asociación.",
        "Activities include notebooks, reports, and datasets for AI labs, plus a team assignment and practical examples on association rules.",
      ),
      workItems: [
        {
          id: "tia-a1",
          title: t("Actividad 1: laboratorio de árboles, reglas y ensembles", "Activity 1: lab on trees, rules, and ensembles"),
          kind: "actividad",
          summary: t(
            "Laboratorio basado en notebook para un problema de clasificación con el dataset car, incluyendo caracterización del dataset, preprocesamiento y modelado.",
            "Notebook-based lab for a classification problem using the car dataset, including dataset characterization, preprocessing, and modeling.",
          ),
          tools: ["Python", "Jupyter", "Machine Learning", "EDA"],
          artifacts: ["notebook .ipynb", "dataset CSV", "reportes PDF", "DOCX"],
        },
        {
          id: "tia-a2",
          title: t("Actividad 2 (grupal)", "Activity 2 (team)"),
          kind: "proyecto_grupal",
          summary: t(
            "Entrega grupal documentada en PDF como parte de la práctica colaborativa de la materia.",
            "Team assignment documented in PDF as part of the course collaborative practice.",
          ),
          tools: ["Trabajo colaborativo", "Documentación"],
          artifacts: ["reporte PDF"],
        },
        {
          id: "tia-ejemplos",
          title: t("Ejemplo práctico: reglas de asociación", "Practical example: association rules"),
          kind: "ejemplo",
          summary: t(
            "Notebook de práctica enfocado en reglas de asociación como refuerzo técnico complementario a las actividades de entrega.",
            "Practice notebook focused on association rules as technical reinforcement complementary to submitted activities.",
          ),
          tools: ["Jupyter", "Reglas de asociación", "Análisis exploratorio"],
          artifacts: ["notebook .ipynb"],
        },
      ],
    },
  ],
  highlights: [
    {
      title: t("Evidencias técnicas reproducibles", "Reproducible technical evidence"),
      description: t(
        "El portafolio integra notebooks, scripts y reportes como base para describir el trabajo realizado, en lugar de usar únicamente descripciones generales del programa.",
        "The portfolio uses notebooks, scripts, and reports as the basis to describe completed work, instead of relying only on generic program descriptions.",
      ),
    },
    {
      title: t("Progresión visible por cuartil", "Visible progression by quarter"),
      description: t(
        "Q1 se enfoca en fundamentos de bases de datos y gobierno; Q2 muestra un salto hacia análisis con R, IA y procesamiento distribuido con Spark y Kafka.",
        "Q1 focuses on database and governance foundations; Q2 shows a shift toward R analytics, AI, and distributed processing with Spark and Kafka.",
      ),
    },
    {
      title: t("Portafolio bilingüe para contexto profesional", "Bilingual portfolio for professional context"),
      description: t(
        "Se incluye un cambio de idioma ES/EN para presentar experiencia académica y técnica a audiencias locales e internacionales.",
        "A global ES/EN language switch is included to present academic and technical experience to local and international audiences.",
      ),
    },
  ],
  milestones: [
    {
      period: t("Inicio · Q1", "Start · Q1"),
      title: t("Fundamentos y estructura de trabajo", "Foundations and working structure"),
      description: t(
        "Se consolidó una base de trabajo con entregables técnicos, ejercicios de bases de datos y actividades formales orientadas a documentación y análisis.",
        "A working foundation was established through technical deliverables, database exercises, and formal activities focused on documentation and analysis.",
      ),
    },
    {
      period: t("Transición · Q1 → Q2", "Transition · Q1 → Q2"),
      title: t("Mayor componente práctico y analítico", "Stronger practical and analytical component"),
      description: t(
        "El trabajo evolucionó desde conceptos y gestión de datos hacia práctica intensiva con notebooks, scripts y laboratorios de análisis y modelado.",
        "Work evolved from concepts and data management toward intensive notebook, scripting, and analysis/modeling lab practice.",
      ),
    },
    {
      period: t("Actualidad · Q2", "Current stage · Q2"),
      title: t("Integración de IA y procesamiento masivo", "AI and large-scale processing integration"),
      description: t(
        "Las evidencias más recientes muestran integración de Spark, Kafka y laboratorios de IA, fortaleciendo un perfil técnico orientado a soluciones de datos end-to-end.",
        "The most recent evidence shows Spark, Kafka, and AI labs integration, strengthening a technical profile oriented to end-to-end data solutions.",
      ),
    },
  ],
  footerNote: t(
    "Portafolio de maestría · Contenido curado desde evidencias académicas",
    "Master's portfolio · Content curated from academic evidence",
  ),
};
