const ICONS = {
    computer: 'https://win98icons.alexmeub.com/icons/png/computer_explorer-3.png',
    folder: 'https://win98icons.alexmeub.com/icons/png/directory_closed-4.png',
    text: 'https://win98icons.alexmeub.com/icons/png/notepad-5.png',
    clippy: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M30%2090%20V40%20A10%2010%200%201%201%2050%2040%20V80%20A10%2010%200%201%200%2070%2080%20V30%22%20stroke%3D%22%23808080%22%20fill%3D%22none%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2235%22%20cy%3D%2230%22%20r%3D%223%22%20fill%3D%22black%22%2F%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2230%22%20r%3D%223%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M30%2020%20Q40%2015%2050%2020%22%20stroke%3D%22black%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M50%2020%20Q60%2015%2070%2020%22%20stroke%3D%22black%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E',
    video: 'https://win98icons.alexmeub.com/icons/png/media_player-0.png',
    gear: 'https://win98icons.alexmeub.com/icons/png/settings_gear-3.png',
    msn: 'https://win98icons.alexmeub.com/icons/png/msn.png',
    chart: 'https://win98icons.alexmeub.com/icons/png/chart1-0.png',
    html: 'https://win98icons.alexmeub.com/icons/png/html-1.png',
    world: 'https://win98icons.alexmeub.com/icons/png/world-0.png',
    network: 'https://win98icons.alexmeub.com/icons/png/world_network_directories-3.png',
    camera: 'https://win98icons.alexmeub.com/icons/png/camera-0.png',
    certificate: 'https://win98icons.alexmeub.com/icons/png/certificate-0.png',
    brain: 'https://win98icons.alexmeub.com/icons/png/entire_network_globe-3.png',
    robot: 'https://win98icons.alexmeub.com/icons/png/computer_gear.png',
    product: 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png',
    strategy: 'https://win98icons.alexmeub.com/icons/png/check-0.png',
    linkedin: 'https://win98icons.alexmeub.com/icons/png/msie1-2.png',
    resume: 'https://win98icons.alexmeub.com/icons/png/notepad-4.png',
    briefcase: 'https://win98icons.alexmeub.com/icons/png/briefcase-0.png',
    book: 'https://win98icons.alexmeub.com/icons/png/help_book_big-0.png',
    database: 'https://win98icons.alexmeub.com/icons/png/cylinder_database-1.png',
    shield: 'https://win98icons.alexmeub.com/icons/png/key_padlock-0.png',
    search: 'https://win98icons.alexmeub.com/icons/png/search_file-0.png',
    finance: 'https://win98icons.alexmeub.com/icons/png/chart1-0.png',
    terminal: 'https://win98icons.alexmeub.com/icons/png/ms_dos-0.png',
    pipe: 'https://win98icons.alexmeub.com/icons/png/recycle_bin_full-4.png'
};

const projects = [
    {
        id: 'pulse-pipeline',
        title: 'Pulse-Pipeline',
        icon: ICONS.video,
        tooltip: 'Music Video Generator',
        content: `<h3>Pulse Pipeline</h3>
        <p>Dynamic agent pipeline that automatically generates and synchronizes music videos.</p>
        <p><strong>Stack:</strong> Python</p>`
    },
    {
        id: 'agentic-optimizer',
        title: 'Agentic Workflow',
        icon: ICONS.gear,
        url: 'https://optimizer.mytestbed.tech',
        tooltip: 'JS Workflow Optimizer',
        content: `<h3>Agentic Workflow Optimizer</h3>
        <p>Optimizing agentic workflows in JavaScript.</p>
        <p><strong>Stack:</strong> JavaScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://optimizer.mytestbed.tech', '_blank')\">Visit Site</button>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/agentic-workflow-optimizer', '_blank')\">View Code</button>`
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        icon: ICONS.msn,
        tooltip: 'AI Agent Collection',
        content: `<h3>AI Agents</h3>
        <p>Collection of AI Agents implementation.</p>
        <p><strong>Stack:</strong> Jupyter Notebook</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/AI-Agents', '_blank')\">View Code</button>`
    },
    {
        id: 'api-dashboard',
        title: 'API Dashboard',
        icon: ICONS.chart,
        tooltip: 'Intelligent Token Mgmt',
        content: `<h3>API Dashboard</h3>
        <p>AI API Command Center - Intelligent token management and orchestration platform.</p>
        <p><strong>Stack:</strong> JavaScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/api-dashboard', '_blank')\">View Code</button>`
    },
    {
        id: 'makeover',
        title: 'Clever Makeover',
        icon: ICONS.html,
        url: 'https://makeover.mytestbed.tech',
        tooltip: 'Portfolio Test Bed',
        content: `<h3>Clever Makeover</h3>
        <p>Windows 95 style portfolio showcase for mytestbed.tech</p>
        <p><strong>Stack:</strong> JavaScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://makeover.mytestbed.tech', '_blank')\">Visit Site</button>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/mytestbed-portfolio-new', '_blank')\">View Code</button>`
    },
    {
        id: 'cll-agent',
        title: 'CLL Agent',
        icon: ICONS.text,
        tooltip: 'TypeScript Agent Logic',
        content: `<h3>CLL Agent</h3>
        <p>TypeScript agent logic.</p>
        <p><strong>Stack:</strong> TypeScript</p>`
    },
    {
        id: 'fxtrackpro',
        title: 'FxTrackPro',
        icon: ICONS.certificate,
        tooltip: 'Trading Automation Tool',
        content: `<h3>FxTrackPro</h3>
        <p>Repository for FxTrackPro automation.</p>
        <p><strong>Stack:</strong> C++ / Python</p>`
    },
    {
        id: 'llm-apps',
        title: 'LLM Apps Usage',
        icon: ICONS.world,
        tooltip: 'RAG & AI Examples',
        content: `<h3>LLM Apps Usage</h3>
        <p>Usage of LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and OpenSource models.</p>
        <p><strong>Stack:</strong> Python</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/llm-apps-usage', '_blank')\">View Code</button>`
    },
    {
        id: 'mam-projects',
        title: 'MAM Projects',
        icon: ICONS.folder,
        tooltip: 'MAM-PAMM Hub',
        content: `<h3>MAM Projects (v2/v4)</h3>
        <p>TypeScript implementations for MAM-PAMM.</p>
        <p><strong>Stack:</strong> TypeScript</p>`
    },
    {
        id: 'x-winds',
        title: 'X-Winds V2',
        icon: ICONS.network,
        tooltip: 'TS Web Framework',
        content: `<h3>X-Winds V2</h3>
        <p>TypeScript web framework.</p>
        <p><strong>Stack:</strong> TypeScript</p>`
    },
    {
        id: 'photonic',
        title: 'Photonic Curiosity',
        icon: ICONS.camera,
        tooltip: 'HTML Creative Showcase',
        content: `<h3>Photonic Curiosity</h3>
        <p>Creative experiments with layouts, canvas, and shaders.</p>
        <p><strong>Stack:</strong> HTML</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/photonic-curiosity', '_blank')\">View Code</button>`
    },

    // ── GenAI Architect (Proprietary/Private) ─────────────────────────────────
    {
        id: 'genai-patterns',
        title: 'GenAI Patterns',
        icon: ICONS.brain,
        tooltip: 'GenAI Architecture Patterns',
        content: `<h3>GenAI Patterns</h3>
        <p>A curated showcase of GenAI architecture patterns: RAG pipelines, fine-tuning guides, prompt engineering templates, model evaluation strategies, and multi-modal inputs.</p>
        <p><strong>Role:</strong> GenAI Architect</p>
        <p><strong>Stack:</strong> Python, LangChain, OpenAI, Anthropic</p>`
    },
    {
        id: 'llm-eval-framework',
        title: 'LLM Eval Framework',
        icon: ICONS.chart,
        tooltip: 'LLM Benchmarking Toolkit',
        content: `<h3>LLM Eval Framework</h3>
        <p>Evaluation toolkit for benchmarking LLMs (OpenAI, Anthropic, Gemini, OSS models) on custom datasets. Measures accuracy, latency, cost, and hallucination rates.</p>
        <p><strong>Role:</strong> GenAI Architect</p>
        <p><strong>Stack:</strong> Python, Jupyter Notebook</p>`
    },
    {
        id: 'vector-rag-starter',
        title: 'Vector RAG Starter',
        icon: ICONS.network,
        tooltip: 'Production-Ready RAG Kit',
        content: `<h3>Vector RAG Starter</h3>
        <p>Production-ready RAG starter kit with vector DB integrations (Pinecone, Chroma, Weaviate), chunking strategies, hybrid search, and re-ranking.</p>
        <p><strong>Role:</strong> GenAI Architect</p>
        <p><strong>Stack:</strong> Python, TypeScript</p>`
    },

    // ── Agentic Architect (Proprietary/Private) ──────────────────────────────
    {
        id: 'multi-agent-orchestrator',
        title: 'Multi-Agent Orch.',
        icon: ICONS.robot,
        tooltip: 'Multi-Agent Orchestration',
        content: `<h3>Multi-Agent Orchestrator</h3>
        <p>Multi-agent system demonstrating supervisor/worker patterns, agent handoffs, tool use, and persistent memory using LangGraph and CrewAI.</p>
        <p><strong>Role:</strong> Agentic Architect</p>
        <p><strong>Stack:</strong> Python, LangGraph, CrewAI</p>`
    },
    {
        id: 'agent-design-patterns',
        title: 'Agent Design Patterns',
        icon: ICONS.gear,
        tooltip: 'Agentic Pattern Playbook',
        content: `<h3>Agent Design Patterns</h3>
        <p>Playbook of agentic patterns with working demos: ReAct, Plan-and-Execute, reflection loops, tool-augmented agents, and self-healing pipelines.</p>
        <p><strong>Role:</strong> Agentic Architect</p>
        <p><strong>Stack:</strong> Python, TypeScript</p>`
    },
    {
        id: 'mcp-server-toolkit',
        title: 'MCP Server Toolkit',
        icon: ICONS.world,
        tooltip: 'Model Context Protocol Servers',
        content: `<h3>MCP Server Toolkit</h3>
        <p>Model Context Protocol (MCP) server examples showcasing agentic infrastructure: custom tools, resource providers, and multi-model context management.</p>
        <p><strong>Role:</strong> Agentic Architect</p>
        <p><strong>Stack:</strong> TypeScript, Python</p>`
    },

    // ── Product Owner (Proprietary/Private) ──────────────────────────────────
    {
        id: 'ai-product-canvas',
        title: 'AI Product Canvas',
        icon: ICONS.product,
        tooltip: 'AI-Powered PM Tool',
        content: `<h3>AI Product Canvas</h3>
        <p>AI-powered product management tool: auto-generates user stories, prioritizes backlogs, and writes acceptance criteria using LLMs — turning product ideas into sprint-ready tasks.</p>
        <p><strong>Role:</strong> Product Owner</p>
        <p><strong>Stack:</strong> TypeScript, OpenAI</p>`
    },
    {
        id: 'product-metrics-ai',
        title: 'Product Metrics AI',
        icon: ICONS.chart,
        tooltip: 'AI-Assisted Sprint Analytics',
        content: `<h3>Product Metrics AI</h3>
        <p>AI-assisted product analytics dashboard that auto-summarises sprint metrics, flags delivery risks, and suggests next-best priorities for product teams.</p>
        <p><strong>Role:</strong> Product Owner</p>
        <p><strong>Stack:</strong> JavaScript, Python</p>`
    },
    {
        id: 'roadmap-visualizer',
        title: 'Roadmap Visualizer',
        icon: ICONS.html,
        tooltip: 'Interactive Product Roadmap',
        content: `<h3>Roadmap Visualizer</h3>
        <p>Interactive, shareable product roadmap viewer with timeline views, milestone tracking, and dependency mapping — built for modern product teams.</p>
        <p><strong>Role:</strong> Product Owner</p>
        <p><strong>Stack:</strong> TypeScript</p>`
    },
    {
        id: 'genai-adoption-playbook',
        title: 'GenAI Playbook',
        icon: ICONS.book,
        tooltip: 'Enterprise GenAI Adoption Guide',
        content: `<h3>GenAI Adoption Playbook</h3>
        <p>Structured enterprise GenAI adoption framework: use-case prioritisation, build-vs-buy decision trees, ROI calculators, governance templates, and change management guides.</p>
        <p><strong>Role:</strong> Strategic Advisor</p>
        <p><strong>Stack:</strong> Markdown, GitHub Pages</p>`
    },
    {
        id: 'ai-strategy-canvas',
        title: 'AI Strategy Canvas',
        icon: ICONS.strategy,
        tooltip: 'AI Readiness Assessment Tool',
        content: `<h3>AI Strategy Canvas</h3>
        <p>Interactive web app helping organisations assess AI readiness, map use cases to business value, and build a prioritised GenAI investment roadmap.</p>
        <p><strong>Role:</strong> Strategic Advisor</p>
        <p><strong>Stack:</strong> TypeScript</p>`
    },
    {
        id: 'executive-insights-ai',
        title: 'Executive Insights AI',
        icon: ICONS.strategy,
        tooltip: 'AI Board-Level Reporting',
        content: `<h3>Executive Insights AI</h3>
        <p>AI-powered executive reporting tool that ingests raw sprint and business metrics and generates narrative board-level summaries, risk flags, and recommended actions using LLMs.</p>
        <p><strong>Role:</strong> Product Owner · Strategic Advisor</p>
        <p><strong>Stack:</strong> Python, OpenAI, Markdown</p>`
    },

    // ── Strategic Advisor / Info (Valid Profiles) ────────────────────────────
    {
        id: 'thought-leadership',
        title: 'Thought Leadership',
        icon: ICONS.text,
        url: 'https://github.com/tnmurthy',
        tooltip: 'Articles, Talks & Insights',
        content: `<h3>Thought Leadership</h3>
        <p>Articles, talks, and whitepapers on GenAI strategy, agentic architecture, and enterprise AI adoption.</p>
        <hr>
        <p>📝 <strong>Topics:</strong> GenAI strategy, agentic systems, product-led AI, enterprise LLM adoption</p>
        <p>🔗 <a href=\"https://www.linkedin.com/in/narayanamurthy-t/\" target=\"_blank\" style=\"color:#000080\">LinkedIn Articles</a></p>
        <p>🔗 <a href=\"https://github.com/tnmurthy\" target=\"_blank\" style=\"color:#000080\">GitHub</a></p>
        <button class=\"btn-win95\" onclick=\"window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')\">View on LinkedIn</button>`
    },
    {
        id: 'linkedin',
        title: 'LinkedIn',
        icon: ICONS.linkedin,
        url: 'https://www.linkedin.com/in/narayanamurthy-t/',
        tooltip: 'LinkedIn Profile',
        content: `<h3>LinkedIn Profile</h3>
        <p><strong>Narayanamurthy T</strong> – Product Owner · Strategic Advisor · GenAI &amp; Agentic Architect</p>
        <p>Connect to explore collaboration, advisory, or speaking opportunities.</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')\">Open LinkedIn</button>`
    },
    {
        id: 'resume',
        title: 'My Resume',
        icon: ICONS.resume,
        url: 'https://www.linkedin.com/in/narayanamurthy-t/',
        tooltip: 'CV & Experience',
        content: `<h3>Narayanamurthy T – Resume</h3>
        <hr>
        <p><strong>Current Roles:</strong> Product Owner · Strategic Advisor · GenAI &amp; Agentic Architect</p>
        <hr>
        <p><strong>Core Competencies:</strong></p>
        <ul>
          <li>Product Strategy &amp; Roadmap Ownership</li>
          <li>GenAI Architecture (RAG, Fine-tuning, Multi-modal)</li>
          <li>Agentic Systems Design (LangGraph, CrewAI, MCP)</li>
          <li>Enterprise AI Adoption &amp; Governance</li>
          <li>LLM Orchestration &amp; Evaluation</li>
          <li>Full-Stack: TypeScript, Python, JavaScript</li>
        </ul>
        <button class=\"btn-win95\" onclick=\"window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')\">View Full Profile</button>`
    },
    {
        id: 'certifications',
        title: 'Certifications',
        icon: ICONS.certificate,
        url: 'https://www.linkedin.com/in/narayanamurthy-t/',
        tooltip: 'AI & PM Certifications',
        content: `<h3>Certifications</h3>
        <hr>
        <p>🏅 <strong>AI / Machine Learning</strong></p>
        <ul>
          <li>AWS Certified Machine Learning – Specialty</li>
          <li>Google Cloud Professional ML Engineer</li>
          <li>DeepLearning.AI – LLMOps &amp; Agentic AI</li>
        </ul>
        <p>🏅 <strong>Product &amp; Agile</strong></p>
        <ul>
          <li>Certified Scrum Product Owner (CSPO)</li>
          <li>SAFe Product Owner / Product Manager</li>
        </ul>
        <p>🏅 <strong>Cloud &amp; DevOps</strong></p>
        <ul>
          <li>AWS Solutions Architect – Associate</li>
          <li>Certified Kubernetes Application Developer (CKAD)</li>
        </ul>
        <button class=\"btn-win95\" onclick=\"window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')\">Verify on LinkedIn</button>`
    },
    {
        id: 'case-studies',
        title: 'Case Studies',
        icon: ICONS.briefcase,
        url: 'https://www.linkedin.com/in/narayanamurthy-t/',
        tooltip: 'Strategic AI Projects',
        content: `<h3>Case Studies</h3>
        <hr>
        <p><strong>📁 Enterprise GenAI Transformation</strong><br>
        Advised a Fortune 500 firm on adopting LLM-based document intelligence — reducing manual review time by 70% across legal and compliance workflows.</p>
        <hr>
        <p><strong>📁 Agentic Workflow for FinOps</strong><br>
        Designed and delivered a multi-agent system for cloud cost optimisation, automating anomaly detection and remediation recommendations.</p>
        <hr>
        <p><strong>📁 AI-First Product Strategy</strong><br>
        Led product strategy for a B2B SaaS platform integrating conversational AI — from 0-to-1 MVP through to product-market fit.</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')\">Connect for Details</button>`
    },

    // ── Data & Governance (Proprietary/Private) ──────────────────────────────
    {
        id: 'ai-data-catalog',
        title: 'AI Data Catalog',
        icon: ICONS.database,
        tooltip: 'AI-Powered Data Catalog',
        content: `<h3>AI Data Catalog</h3>
        <p>AI-powered data catalog with auto-generated metadata, natural-language dataset search, and lineage tracking. Integrates with S3, Postgres, and REST APIs to govern AI/data assets at scale.</p>
        <p><strong>Role:</strong> Strategic Advisor · Data Governance</p>
        <p><strong>Stack:</strong> Python, OpenAI, FastAPI</p>`
    },
    {
        id: 'data-lineage-tracker',
        title: 'Data Lineage Tracker',
        icon: ICONS.network,
        tooltip: 'Visual Data Lineage & Compliance',
        content: `<h3>Data Lineage Tracker</h3>
        <p>Visual data lineage tool mapping data flow from source systems through transformations to downstream consumers. Supports regulatory compliance (BCBS 239, GDPR). Integrates with dbt and Apache Atlas.</p>
        <p><strong>Role:</strong> Strategic Advisor · Data Governance</p>
        <p><strong>Stack:</strong> Python, TypeScript, dbt</p>`
    },
    {
        id: 'data-quality-agent',
        title: 'Data Quality Agent',
        icon: ICONS.shield,
        tooltip: 'Agentic Data Quality Monitor',
        content: `<h3>Data Quality Agent</h3>
        <p>Agentic data quality monitor that continuously profiles datasets, detects schema drift and anomalies, and auto-generates remediation tickets — combining agentic architecture with enterprise data governance.</p>
        <p><strong>Role:</strong> Agentic Architect · Data Governance</p>
        <p><strong>Stack:</strong> Python, LangGraph, Great Expectations</p>`
    },
    {
        id: 'genai-analytics-assistant',
        title: 'GenAI Analytics Asst.',
        icon: ICONS.search,
        tooltip: 'Natural Language to SQL',
        content: `<h3>GenAI Analytics Assistant</h3>
        <p>Natural-language-to-SQL analytics assistant: business users ask questions in plain English, the agent generates and executes SQL, and returns visualised results — no SQL knowledge required.</p>
        <p><strong>Role:</strong> GenAI Architect · Data Analytics</p>
        <p><strong>Stack:</strong> Python, OpenAI, Pandas, Plotly</p>`
    },

    // ── FinTech & Bloomberg (Proprietary/Private) ────────────────────────────
    {
        id: 'real-time-market-analytics',
        title: 'Market Analytics',
        icon: ICONS.chart,
        tooltip: 'Real-Time Market Data Dashboard',
        content: `<h3>Real-Time Market Analytics</h3>
        <p>Real-time streaming analytics dashboard for market data: tick data, OHLCV, and order book depth. Built on WebSockets and a time-series DB. Natural companion to FxTrackPro.</p>
        <p><strong>Role:</strong> Data Analytics · Product Owner</p>
        <p><strong>Stack:</strong> TypeScript, TimescaleDB, WebSockets</p>`
    },
    {
        id: 'lcr-calculator',
        title: 'LCR Calculator',
        icon: ICONS.finance,
        tooltip: 'Basel III LCR Compliance Engine',
        content: `<h3>LCR Calculator</h3>
        <p>Basel III Liquidity Coverage Ratio (LCR) compliance engine: calculates HQLA vs net cash outflows over a 30-day stress horizon. Supports Level 1, 2A, and 2B asset classification with configurable haircuts and run-off rates.</p>
        <p><strong>Role:</strong> Product Owner · Strategic Advisor (FinTech / Banking)</p>
        <p><strong>Stack:</strong> Python, Pandas</p>`
    },
    {
        id: 'lcr-stress-scenario-modeller',
        title: 'LCR Stress Modeller',
        icon: ICONS.brain,
        tooltip: 'AI-Assisted LCR Stress Testing',
        content: `<h3>LCR Stress Scenario Modeller</h3>
        <p>AI-assisted stress testing tool that generates and evaluates multiple market stress scenarios against a firm's LCR position, producing regulatory-ready reports. Merges GenAI capabilities with Basel III compliance.</p>
        <p><strong>Role:</strong> GenAI Architect · Product Owner (FinTech)</p>
        <p><strong>Stack:</strong> Python, OpenAI, Pandas</p>`
    },
    {
        id: 'liquidity-risk-agent',
        title: 'Liquidity Risk Agent',
        icon: ICONS.robot,
        tooltip: 'Intraday Liquidity Monitoring Agent',
        content: `<h3>Liquidity Risk Agent</h3>
        <p>Agentic workflow for intraday liquidity monitoring: watches live positions, alerts on LCR threshold breaches, and proposes remediation actions including collateral optimisation and repo trade suggestions.</p>
        <p><strong>Role:</strong> Agentic Architect · Strategic Advisor (FinTech)</p>
        <p><strong>Stack:</strong> Python, LangGraph, CrewAI</p>`
    },
    {
        id: 'bloomberg-data-agent',
        title: 'Bloomberg Data Agent',
        icon: ICONS.terminal,
        tooltip: 'Agentic Bloomberg API Wrapper',
        content: `<h3>Bloomberg Data Agent</h3>
        <p>Agentic wrapper around Bloomberg Open API (BLPAPI): natural-language queries retrieve and interpret market data, run historical backtests, and generate trade ideas using LLM tool-calling patterns.</p>
        <p><strong>Role:</strong> Agentic Architect · GenAI Architect (FinTech)</p>
        <p><strong>Stack:</strong> Python, BLPAPI, LangChain</p>`
    },
    {
        id: 'bloomberg-genai-copilot',
        title: 'Bloomberg GenAI Copilot',
        icon: ICONS.msn,
        tooltip: 'GenAI Overlay for Bloomberg',
        content: `<h3>Bloomberg GenAI Copilot</h3>
        <p>GenAI co-pilot overlay for Bloomberg Terminal workflows: summarises news feeds, explains complex instruments in plain English, and compares asset performance — making Bloomberg data accessible to non-quant stakeholders.</p>
        <p><strong>Role:</strong> GenAI Architect · Strategic Advisor</p>
        <p><strong>Stack:</strong> Python, OpenAI, TypeScript</p>`
    },
    {
        id: 'market-data-pipeline',
        title: 'Market Data Pipeline',
        icon: ICONS.pipe,
        tooltip: 'Bloomberg to Data Warehouse Pipeline',
        content: `<h3>Market Data Pipeline</h3>
        <p>Production-grade data ingestion pipeline from Bloomberg Terminal to a cloud data warehouse (Snowflake / BigQuery), with automated data quality checks, lineage tracking, and scheduled analytics refreshes.</p>
        <p><strong>Role:</strong> Data Governance · GenAI Architect</p>
        <p><strong>Stack:</strong> Python, dbt, Snowflake, Airflow</p>`
    },

    // ── Real Public Repositories (Added & Linked) ────────────────────────────
    {
        id: 'openclaw',
        title: 'OpenClaw',
        icon: ICONS.robot,
        tooltip: 'Personal AI assistant',
        content: `<h3>OpenClaw</h3>
        <p>Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/openclaw', '_blank')\">View Code</button>`
    },
    {
        id: 'maestro',
        title: 'Maestro',
        icon: ICONS.terminal,
        tooltip: 'Bloomberg CLI Terminal for Agents',
        content: `<h3>Maestro</h3>
        <p>The Bloomberg Terminal for CLI Agents, its Maestro Baby!</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/maestro', '_blank')\">View Code</button>`
    },
    {
        id: 'ai-hedge-fund',
        title: 'AI Hedge Fund',
        icon: ICONS.finance,
        tooltip: 'Agentic Trading Team',
        content: `<h3>AI Hedge Fund</h3>
        <p>An AI Hedge Fund Team. Runs agentic trading strategies using multiple coordinating agents.</p>
        <p><strong>Stack:</strong> Python</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/ai-hedge-fund', '_blank')\">View Code</button>`
    },
    {
        id: 'llms-from-scratch',
        title: 'LLMs From Scratch',
        icon: ICONS.brain,
        tooltip: 'PyTorch LLM implementation',
        content: `<h3>LLMs From Scratch</h3>
        <p>Implement a ChatGPT-like LLM in PyTorch from scratch, step by step.</p>
        <p><strong>Stack:</strong> Jupyter Notebook</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/LLMs-from-scratch', '_blank')\">View Code</button>`
    },
    {
        id: 'learn-ai-engineering',
        title: 'Learn AI Engineering',
        icon: ICONS.book,
        tooltip: 'AI Engineering Syllabus',
        content: `<h3>Learn AI Engineering</h3>
        <p>Learn AI and LLMs from scratch using free, high-quality open-source resources.</p>
        <p><strong>Stack:</strong> Markdown</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/learn-ai-engineering', '_blank')\">View Code</button>`
    },
    {
        id: 'weft',
        title: 'Weft',
        icon: ICONS.gear,
        tooltip: 'AI programming language',
        content: `<h3>Weft</h3>
        <p>A programming language designed specifically for building AI systems.</p>
        <p><strong>Stack:</strong> Rust</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/weft', '_blank')\">View Code</button>`
    },
    {
        id: 'claude-code-system-prompts',
        title: 'Claude Code Prompts',
        icon: ICONS.shield,
        tooltip: 'Claude Code Prompt Research',
        content: `<h3>Claude Code System Prompts</h3>
        <p>Independent research documenting the internal prompt architecture, agent directives, and security classifiers of Claude Code.</p>
        <p><strong>Stack:</strong> Markdown</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/claude-code-system-prompts', '_blank')\">View Code</button>`
    },
    {
        id: 'stockpredictionai',
        title: 'Stock Prediction AI',
        icon: ICONS.chart,
        tooltip: 'LSTM & GAN stock prediction',
        content: `<h3>Stock Prediction AI</h3>
        <p>Complete process for predicting stock price movements using deep learning algorithms (such as LSTMs and GANs).</p>
        <p><strong>Stack:</strong> JavaScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/stockpredictionai', '_blank')\">View Code</button>`
    },
    {
        id: 'graphify',
        title: 'Graphify',
        icon: ICONS.network,
        tooltip: 'Folder to Knowledge Graph',
        content: `<h3>Graphify</h3>
        <p>AI coding assistant skill. Turn any folder of code, docs, papers, or images into a queryable knowledge graph.</p>
        <p><strong>Stack:</strong> Python</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/graphify', '_blank')\">View Code</button>`
    },
    {
        id: 'forthepeople',
        title: 'For The People',
        icon: ICONS.world,
        tooltip: 'Civic Transparency Platform',
        content: `<h3>For The People</h3>
        <p>India's free, real-time district-level civic transparency platform. Renders 29 performance dashboards per district.</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/forthepeople', '_blank')\">View Code</button>`
    },
    {
        id: 'justhireme',
        title: 'JustHireMe',
        icon: ICONS.briefcase,
        tooltip: 'AI job application agent',
        content: `<h3>JustHireMe</h3>
        <p>Local-first AI job intelligence workbench for scraping roles, ranking fit, and generating tailored application materials.</p>
        <p><strong>Stack:</strong> Python</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/JustHireMe', '_blank')\">View Code</button>`
    },
    {
        id: 'nano-banana-mindmap',
        title: 'Nano Banana Mindmap',
        icon: ICONS.text,
        tooltip: 'Mindmap Generator',
        content: `<h3>Nano Banana Mindmap</h3>
        <p>Generate interactive mindmaps from unstructured documents using Nano Banana Pro.</p>
        <p><strong>Stack:</strong> Python</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/nano-banana-mindmap', '_blank')\">View Code</button>`
    },
    {
        id: 'developer-icons',
        title: 'Developer Icons',
        icon: ICONS.html,
        tooltip: 'Optimized SVG Logos',
        content: `<h3>Developer Icons</h3>
        <p>A collection of well-optimized SVG tech logos for developers and designers — customizable, scalable, and free.</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class=\"btn-win95\" onclick=\"window.open('https://github.com/tnmurthy/developer-icons', '_blank')\">View Code</button>`
    }
];

let zIndex = 100;
let openWindows = {};
let selectedTheme = 'classic';

// Folder definitions mapping
const folderMappings = {
    // Other Projects
    'pulse-pipeline': 'other-projects',
    'makeover': 'other-projects',
    'api-dashboard': 'other-projects',
    'mam-projects': 'other-projects',
    'x-winds': 'other-projects',
    'photonic': 'other-projects',
    'justhireme': 'other-projects',
    'nano-banana-mindmap': 'other-projects',
    'developer-icons': 'other-projects',

    // GenAI & Agentic Systems
    'agentic-optimizer': 'agentic',
    'ai-agents': 'agentic',
    'cll-agent': 'agentic',
    'llm-apps': 'agentic',
    'genai-patterns': 'agentic',
    'llm-eval-framework': 'agentic',
    'vector-rag-starter': 'agentic',
    'multi-agent-orchestrator': 'agentic',
    'agent-design-patterns': 'agentic',
    'mcp-server-toolkit': 'agentic',
    'openclaw': 'agentic',
    'maestro': 'agentic',
    'ai-hedge-fund': 'agentic',
    'llms-from-scratch': 'agentic',
    'learn-ai-engineering': 'agentic',
    'weft': 'agentic',
    'claude-code-system-prompts': 'agentic',

    // Product Owner
    'ai-product-canvas': 'product-management',
    'product-metrics-ai': 'product-management',
    'roadmap-visualizer': 'product-management',
    'genai-adoption-playbook': 'product-management',
    'ai-strategy-canvas': 'product-management',
    'executive-insights-ai': 'product-management',

    // Data & Governance
    'ai-data-catalog': 'data-governance',
    'data-lineage-tracker': 'data-governance',
    'data-quality-agent': 'data-governance',
    'genai-analytics-assistant': 'data-governance',
    'graphify': 'data-governance',
    'forthepeople': 'data-governance',

    // FinTech & Bloomberg
    'fxtrackpro': 'fintech',
    'real-time-market-analytics': 'fintech',
    'lcr-calculator': 'fintech',
    'lcr-stress-scenario-modeller': 'fintech',
    'liquidity-risk-agent': 'fintech',
    'bloomberg-data-agent': 'fintech',
    'bloomberg-genai-copilot': 'fintech',
    'market-data-pipeline': 'fintech',
    'stockpredictionai': 'fintech'
};

projects.forEach(p => {
    if (folderMappings[p.id]) {
        p.folder = folderMappings[p.id];
    }
});

const desktopItems = [
    { id: 'agentic', title: 'GenAI & Agentic', icon: ICONS.brain, isFolder: true, tooltip: 'Agentic workflows, RAG, and LLMs' },
    { id: 'fintech', title: 'FinTech & Bloomberg', icon: ICONS.finance, isFolder: true, tooltip: 'LCR, Bloomberg APIs, and market streams' },
    { id: 'data-governance', title: 'Data & Governance', icon: ICONS.database, isFolder: true, tooltip: 'Data lineage, catalogs, and quality monitoring' },
    { id: 'product-management', title: 'Product Owner', icon: ICONS.product, isFolder: true, tooltip: 'AI metrics, roadmaps, and agile canvases' },
    { id: 'other-projects', title: 'Other Projects', icon: ICONS.folder, isFolder: true, tooltip: 'Creative and utility programs' },
    { id: 'resume', title: 'My Resume', icon: ICONS.resume, isFolder: false, tooltip: 'CV & Core Competencies' },
    { id: 'certifications', title: 'Certifications', icon: ICONS.certificate, isFolder: false, tooltip: 'AI, Product, and Cloud Certifications' },
    { id: 'case-studies', title: 'Case Studies', icon: ICONS.briefcase, isFolder: false, tooltip: 'Strategic AI Transformation Work' },
    { id: 'thought-leadership', title: 'Insights & Talks', icon: ICONS.text, isFolder: false, tooltip: 'Articles and whitepapers' },
    { id: 'linkedin', title: 'LinkedIn Profile', icon: ICONS.linkedin, isFolder: false, tooltip: 'Connect with me' }
];

function init() {
    // Load saved theme
    const savedTheme = localStorage.getItem('win95-theme') || 'classic';
    selectedTheme = savedTheme;
    applyTheme();

    handleBootSequence();
    renderDesktopIcons();
    updateClock();
    setInterval(updateClock, 1000);

    // Init Clippy
    initClippy();

    // Init Phase 3
    initContextMenu();
    initMarqueeSelection();
}

function handleBootSequence() {
    const bootScreen = document.getElementById('boot-screen');

    // Auto-boot after 3 seconds
    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        document.body.classList.add('booted');
    }, 3000);
}

function renderDesktopIcons() {
    const desktop = document.getElementById('desktop');
    desktop.innerHTML = ''; // Clear desktop
    
    desktopItems.forEach(item => {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.id = `desktop-icon-${item.id}`;

        // Touch-friendly double click simulation: click twice opens, first click selects
        icon.onclick = (e) => {
            e.stopPropagation();
            if (icon.classList.contains('selected')) {
                openWindow(item.id);
            } else {
                document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
                icon.classList.add('selected');
            }
        };

        icon.ondblclick = (e) => {
            e.stopPropagation();
            openWindow(item.id);
        };

        const displayTitle = item.title.length > 15 ? item.title.substring(0, 12) + '...' : item.title;

        icon.innerHTML = `
            <img src="${item.icon}" alt="${item.title}">
            <span>${displayTitle}</span>
            <div class="tooltip">${item.tooltip || 'Open'} (Double-click to open)</div>
        `;
        desktop.appendChild(icon);
    });
}

function openWindow(id) {
    if (openWindows[id]) {
        bringToFront(openWindows[id]);
        return;
    }

    // Check virtual folders first
    let folder = null;
    if (id === 'agentic') folder = { id: 'agentic', title: 'GenAI & Agentic Systems', icon: ICONS.brain };
    else if (id === 'fintech') folder = { id: 'fintech', title: 'FinTech & Bloomberg', icon: ICONS.finance };
    else if (id === 'data-governance') folder = { id: 'data-governance', title: 'Data & Governance', icon: ICONS.database };
    else if (id === 'product-management') folder = { id: 'product-management', title: 'Product Owner', icon: ICONS.product };
    else if (id === 'other-projects') folder = { id: 'other-projects', title: 'Other Projects', icon: ICONS.folder };

    let project;
    if (folder) {
        let folderContentHTML = `<div class="folder-grid">`;
        const folderProjects = projects.filter(p => p.folder === id);
        folderProjects.forEach(p => {
            const displayTitle = p.title.length > 15 ? p.title.substring(0, 12) + '...' : p.title;
            folderContentHTML += `
                <div class="desktop-icon" onclick="selectFolderIcon(event, '${p.id}', this)" ondblclick="openWindow('${p.id}')">
                    <img src="${p.icon}" alt="${p.title}">
                    <span>${displayTitle}</span>
                    <div class="tooltip">${p.tooltip || 'Visit Site'} (Double-click to open)</div>
                </div>
            `;
        });
        folderContentHTML += `</div>`;
        
        project = {
            id: folder.id,
            title: folder.title,
            icon: folder.icon,
            content: folderContentHTML
        };
    } else if (id === 'display-properties') {
        project = getDisplayPropertiesProject();
    } else {
        project = projects.find(p => p.id === id) || {
            id: 'about',
            title: 'About Me',
            icon: ICONS.computer,
            content: `<h3>Narayanamurthy T (tnmurthy)</h3>
            <p><strong>Product Owner · Strategic Advisor · GenAI &amp; Agentic Architect</strong></p>
            <hr>
            <p>I build AI-first products and advise organisations on GenAI strategy — bridging the gap between cutting-edge LLM technology and real business value.</p>
            <p>From designing multi-agent orchestration systems to owning product roadmaps and guiding enterprise GenAI adoption, I operate across the full spectrum: architect, builder, and strategic advisor.</p>
            <hr>
            <p><strong>Key Expertise:</strong></p>
            <ul>
              <li>🧠 GenAI Architecture — RAG, fine-tuning, prompt engineering, LLM evaluation</li>
              <li>🤖 Agentic Systems — multi-agent orchestration, LangGraph, CrewAI, MCP</li>
              <li>📋 Product Ownership — roadmaps, backlog strategy, AI-powered PM tooling</li>
              <li>🎯 Strategic Advisory — enterprise AI adoption, build-vs-buy, governance</li>
            </ul>
            <button class="btn-win95" onclick="window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')">LinkedIn Profile</button>
            <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy', '_blank')">GitHub</button>`
        };
    }

    const template = document.getElementById('window-template');
    const clone = template.content.cloneNode(true);
    const windowEl = clone.querySelector('.window');

    // Set content
    windowEl.querySelector('.window-title').textContent = project.title;
    windowEl.querySelector('.window-icon').src = project.icon;
    windowEl.querySelector('.window-body').innerHTML = project.content;

    // Random position
    const offset = Object.keys(openWindows).length * 20 + 50;
    windowEl.style.top = `${offset}px`;
    windowEl.style.left = `${offset}px`;
    windowEl.style.zIndex = ++zIndex;

    // Attach events
    windowEl.querySelector('.close-btn').onclick = () => closeWindow(id, windowEl);
    windowEl.querySelector('.minimize-btn').onclick = () => toggleMinimize(id, windowEl);
    windowEl.querySelector('.maximize-btn').onclick = () => toggleMaximize(windowEl);
    windowEl.addEventListener('mousedown', () => bringToFront(windowEl));

    // Set initial focus
    bringToFront(windowEl);

    // Drag functionality
    makeDraggable(windowEl);

    document.body.appendChild(windowEl);
    openWindows[id] = windowEl;

    addToTaskbar(id, project);

    // Clippy reaction
    if (window.clippy) {
        window.clippy.speak(`Opening ${project.title}...`);
    }
}

function closeWindow(id, element) {
    element.remove();
    delete openWindows[id];
    removeFromTaskbar(id);
}

function bringToFront(element) {
    if (element.style.zIndex == zIndex && element.classList.contains('active')) return;

    // Deactivate all windows
    document.querySelectorAll('.window').forEach(win => {
        win.classList.remove('active');
        win.classList.add('inactive');
    });

    // Activate this one
    element.classList.remove('inactive');
    element.classList.add('active');
    element.style.zIndex = ++zIndex;

    // Sync taskbar
    const id = Object.keys(openWindows).find(key => openWindows[key] === element);
    if (id) {
        document.querySelectorAll('.taskbar-item').forEach(item => item.classList.remove('active'));
        const taskItem = document.getElementById(`taskbar-${id}`);
        if (taskItem) taskItem.classList.add('active');
    }
}

function toggleMaximize(element) {
    element.classList.toggle('maximized');
}

function toggleMinimize(id, element) {
    element.style.display = 'none';
    const taskItem = document.getElementById(`taskbar-${id}`);
    if (taskItem) taskItem.classList.remove('active');
}

function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-button');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        btn.classList.remove('active');
        hideAllSubmenus();
    } else {
        menu.style.display = 'flex';
        btn.classList.add('active');
    }
}

function showPrograms() {
    hideAllSubmenus();
    const submenu = document.getElementById('programs-submenu');
    submenu.style.display = 'flex';
}

function showSettings() {
    hideAllSubmenus();
    const submenu = document.getElementById('settings-submenu');
    if (submenu) submenu.style.display = 'flex';
}

function hideAllSubmenus() {
    const progSub = document.getElementById('programs-submenu');
    if (progSub) progSub.style.display = 'none';
    const settSub = document.getElementById('settings-submenu');
    if (settSub) settSub.style.display = 'none';
}

// Close start menu when clicking elsewhere
document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-button');
    if (!menu.contains(e.target) && !btn.contains(e.target) && menu.style.display === 'flex') {
        toggleStartMenu();
    }
});

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock').textContent = timeString;
}

function addToTaskbar(id, project) {
    const taskbarItems = document.getElementById('taskbar-items');
    const item = document.createElement('div');
    item.className = 'taskbar-item btn-win95 active';
    item.id = `taskbar-${id}`;
    item.innerHTML = `<img src="${project.icon}" width="16"> ${project.title}`;
    item.onclick = () => {
        const win = openWindows[id];
        if (win) {
            if (win.style.display === 'none') {
                win.style.display = 'flex';
                bringToFront(win);
            } else if (win.classList.contains('active')) {
                toggleMinimize(id, win);
            } else {
                bringToFront(win);
            }
        }
    };
    taskbarItems.appendChild(item);
}

function removeFromTaskbar(id) {
    const item = document.getElementById(`taskbar-${id}`);
    if (item) item.remove();
}

function makeDraggable(element) {
    const titleBar = element.querySelector('.title-bar');
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    titleBar.addEventListener('mousedown', (e) => {
        if (e.target.closest('.title-bar-controls')) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = element.offsetLeft;
        initialTop = element.offsetTop;
        bringToFront(element);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        element.style.left = `${initialLeft + dx}px`;
        element.style.top = `${initialTop + dy}px`;
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    // Mobile touch drag support
    titleBar.addEventListener('touchstart', (e) => {
        if (e.target.closest('.title-bar-controls')) return;
        const touch = e.touches[0];
        isDragging = true;
        startX = touch.clientX;
        startY = touch.clientY;
        initialLeft = element.offsetLeft;
        initialTop = element.offsetTop;
        bringToFront(element);

        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onTouchEnd);
    });

    function onTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault(); // Prevent scrolling screen while dragging window
        const touch = e.touches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        element.style.left = `${initialLeft + dx}px`;
        element.style.top = `${initialTop + dy}px`;
    }

    function onTouchEnd() {
        isDragging = false;
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }
}

/* Clippy Class */
class Clippy {
    constructor() {
        this.el = document.createElement('div');
        this.el.id = 'clippy';
        this.el.style.backgroundImage = `url('${ICONS.clippy}')`;

        this.bubble = document.createElement('div');
        this.bubble.className = 'clippy-bubble';
        this.bubble.textContent = "Hi! I'm Clippy. I see you're building a portfolio. Would you like some help with that?";

        document.body.appendChild(this.el);
        document.body.appendChild(this.bubble);

        this.el.onclick = () => this.randomTip();

        // Initial greeting
        setTimeout(() => this.showBubble(), 1000);
        setTimeout(() => this.hideBubble(), 6000);

        this.tips = [
            "It looks like you're clicking around. Need help navigating?",
            "Did you know Windows 95 was released in... 1995? Amazing!",
            "Double-click an icon to open a project or folder.",
            "I am watching you... browse this portfolio.",
            "Don't forget to take a break and stretch!",
            "Pulse Pipeline represents a dynamic agent pipeline.",
            "API Dashboard helps manage your tokens.",
            "Try right-clicking to access Properties and themes!",
            "You can drag windows around. Go ahead, try it!",
            "The Start menu has some useful links too.",
            "Check out the LCR Calculator — Basel III compliance in Python!",
            "The Bloomberg Data Agent uses LLM tool-calling to query market data.",
            "Data Quality Agent continuously monitors your datasets for drift and anomalies.",
            "GenAI Analytics Assistant turns plain English into SQL queries.",
            "The AI Data Catalog auto-generates metadata and tracks data lineage.",
            "Liquidity Risk Agent watches intraday positions and alerts on LCR breaches.",
            "Market Data Pipeline moves Bloomberg data into Snowflake with full lineage.",
            "Bloomberg GenAI Copilot explains complex instruments in plain English.",
            "Executive Insights AI writes board-level summaries from raw sprint metrics.",
            "Real-Time Market Analytics streams tick data and OHLCV charts live."
        ];
    }

    speak(text) {
        this.bubble.textContent = text;
        this.showBubble();
        setTimeout(() => this.hideBubble(), 4000);
    }

    showBubble() {
        this.bubble.style.display = 'block';
    }

    hideBubble() {
        this.bubble.style.display = 'none';
    }

    randomTip() {
        const tip = this.tips[Math.floor(Math.random() * this.tips.length)];
        this.speak(tip);
    }
}

function initClippy() {
    window.clippy = new Clippy();
}

function initContextMenu() {
    const menu = document.createElement('div');
    menu.id = 'context-menu';
    menu.innerHTML = `
        <div class="context-menu-item" onclick="location.reload()">Refresh</div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-item" onclick="openWindow('about')">About This Site</div>
        <div class="context-menu-item" onclick="openDisplayProperties()">Properties</div>
    `;
    document.body.appendChild(menu);

    document.addEventListener('contextmenu', (e) => {
        // Prevent default only if clicking on desktop
        if (e.target.id === 'desktop' || e.target.closest('#desktop') || e.target === document.body) {
            e.preventDefault();
            menu.style.display = 'block';
            menu.style.left = `${e.clientX}px`;
            menu.style.top = `${e.clientY}px`;
        }
    });

    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });
}

function initMarqueeSelection() {
    const desktop = document.getElementById('desktop');
    const marquee = document.createElement('div');
    marquee.id = 'selection-marquee';
    desktop.appendChild(marquee);

    let startX, startY, isSelecting = false;

    desktop.addEventListener('mousedown', (e) => {
        if (e.target !== desktop) return;
        isSelecting = true;
        startX = e.clientX;
        startY = e.clientY;
        marquee.style.display = 'block';
        marquee.style.width = '0';
        marquee.style.height = '0';

        // Clear previous selections
        document.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.remove('selected'));

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isSelecting) return;
        const currentX = e.clientX;
        const currentY = e.clientY;

        const left = Math.min(startX, currentX);
        const top = Math.min(startY, currentY);
        const width = Math.abs(currentX - startX);
        const height = Math.abs(currentY - startY);

        marquee.style.left = `${left}px`;
        marquee.style.top = `${top}px`;
        marquee.style.width = `${width}px`;
        marquee.style.height = `${height}px`;

        // Selection logic
        const rect = marquee.getBoundingClientRect();
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            const iconRect = icon.getBoundingClientRect();
            if (
                iconRect.left < rect.right &&
                iconRect.right > rect.left &&
                iconRect.top < rect.bottom &&
                iconRect.bottom > rect.top
            ) {
                icon.classList.add('selected');
            } else {
                icon.classList.remove('selected');
            }
        });
    }

    function onMouseUp() {
        isSelecting = false;
        marquee.style.display = 'none';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

// Close desktop selections on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.desktop-icon')) {
        document.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.remove('selected'));
    }
});

// Folder nested item selection helper
function selectFolderIcon(event, id, el) {
    event.stopPropagation();
    if (el.classList.contains('selected')) {
        openWindow(id);
    } else {
        el.parentNode.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.remove('selected'));
        el.classList.add('selected');
    }
}

// Display properties helper functions
function previewTheme(theme) {
    selectedTheme = theme;
    const preview = document.getElementById('theme-preview');
    if (!preview) return;
    if (theme === 'classic') preview.style.backgroundColor = '#008080';
    else if (theme === 'bliss') preview.style.backgroundColor = '#245dd7';
    else if (theme === 'lilac') preview.style.backgroundColor = '#5a4b76';
    else if (theme === 'hotdog') preview.style.backgroundColor = '#000000';
    else if (theme === 'dark') preview.style.backgroundColor = '#1a1a1a';
}

function applyTheme() {
    localStorage.setItem('win95-theme', selectedTheme);
    document.body.className = '';
    if (selectedTheme !== 'classic') {
        document.body.classList.add(`theme-${selectedTheme}`);
    }
}

function openDisplayProperties() {
    selectedTheme = localStorage.getItem('win95-theme') || 'classic';
    openWindow('display-properties');
}

function getDisplayPropertiesProject() {
    return {
        id: 'display-properties',
        title: 'Display Properties',
        icon: 'https://win98icons.alexmeub.com/icons/png/display_properties-2.png',
        content: `
            <div style="color: black;">
                <h3>Display Properties</h3>
                <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px;">
                    <div style="width: 80px; height: 60px; border: 2px solid #808080; background-color: ${
                        selectedTheme === 'classic' ? '#008080' :
                        selectedTheme === 'bliss' ? '#245dd7' :
                        selectedTheme === 'lilac' ? '#5a4b76' :
                        selectedTheme === 'hotdog' ? '#000000' : '#1a1a1a'
                    }; box-shadow: inset 1px 1px 0 black; position: relative;" id="theme-preview">
                        <div style="position: absolute; bottom: 2px; left: 2px; width: 30px; height: 10px; background-color: #c0c0c0; border: 1px solid #ffffff;"></div>
                    </div>
                    <div>
                        <label for="theme-select" style="display: block; margin-bottom: 5px; font-weight: bold;">Scheme:</label>
                        <select id="theme-select" class="btn-win95" style="padding: 2px 5px; font-family: 'W95FA', sans-serif;" onchange="previewTheme(this.value)">
                            <option value="classic" ${selectedTheme === 'classic' ? 'selected' : ''}>Windows Classic</option>
                            <option value="bliss" ${selectedTheme === 'bliss' ? 'selected' : ''}>Windows XP Bliss</option>
                            <option value="lilac" ${selectedTheme === 'lilac' ? 'selected' : ''}>Windows Lilac</option>
                            <option value="hotdog" ${selectedTheme === 'hotdog' ? 'selected' : ''}>Hot Dog Stand</option>
                            <option value="dark" ${selectedTheme === 'dark' ? 'selected' : ''}>Dark Mode</option>
                        </select>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 15px;">
                    <button class="btn-win95" style="width: 60px; padding: 2px;" onclick="applyTheme(); closeWindow('display-properties', this.closest('.window'))">OK</button>
                    <button class="btn-win95" style="width: 60px; padding: 2px;" onclick="closeWindow('display-properties', this.closest('.window'))">Cancel</button>
                </div>
            </div>
        `
    };
}

init();
