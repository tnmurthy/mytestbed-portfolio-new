const ICONS = {
    computer: 'https://win98icons.alexmeub.com/icons/png/computer_explorer-3.png',
    folder: 'https://win98icons.alexmeub.com/icons/png/directory_closed-4.png',
    text: 'https://win98icons.alexmeub.com/icons/png/notepad-5.png',
    clippy: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M30%2090%20V40%20A10%2010%200%201%201%2050%2040%20V80%20A10%2010%200%201%200%2070%2080%20V30%22%20stroke%3D%22%23808080%22%20fill%3D%22none%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2235%22%20cy%3D%2230%22%20r%3D%223%22%20fill%3D%22black%22%2F%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2230%22%20r%3D%223%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M30%2020%20Q40%2015%2050%2020%22%20stroke%3D%22black%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M50%2020%20Q60%2015%2070%2020%22%20stroke%3D%22black%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E',
    video: 'https://win98icons.alexmeub.com/icons/png/mplayer-0.png',
    gear: 'https://win98icons.alexmeub.com/icons/png/settings_gear-3.png',
    msn: 'https://win98icons.alexmeub.com/icons/png/msn-2.png',
    chart: 'https://win98icons.alexmeub.com/icons/png/performance-3.png',
    html: 'https://win98icons.alexmeub.com/icons/png/html-1.png',
    world: 'https://win98icons.alexmeub.com/icons/png/world-0.png',
    network: 'https://win98icons.alexmeub.com/icons/png/world_network_directories-3.png',
    camera: 'https://win98icons.alexmeub.com/icons/png/camera-0.png',
    certificate: 'https://win98icons.alexmeub.com/icons/png/trust_certificate-0.png',
    brain: 'https://win98icons.alexmeub.com/icons/png/network_3_computers-3.png',
    robot: 'https://win98icons.alexmeub.com/icons/png/computer_3-0.png',
    product: 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png',
    strategy: 'https://win98icons.alexmeub.com/icons/png/sign_check-0.png',
    linkedin: 'https://win98icons.alexmeub.com/icons/png/ie-2.png',
    resume: 'https://win98icons.alexmeub.com/icons/png/notepad-4.png',
    briefcase: 'https://win98icons.alexmeub.com/icons/png/briefcase-0.png',
    book: 'https://win98icons.alexmeub.com/icons/png/help_book_big-0.png'
};

const projects = [
    {
        id: 'pulse-pipeline',
        title: 'Pulse-Pipeline',
        icon: ICONS.video,
        url: 'https://pulse.mytestbed.tech',
        tooltip: 'Music Video Generator',
        content: `<h3>Pulse Pipeline</h3>
        <p>Dynamic agent pipeline that automatically generates and synchronizes music videos.</p>
        <p><strong>Stack:</strong> Python</p>
        <button class="btn-win95" onclick="window.open('https://pulse.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/Pulse-Pipeline', '_blank')">View Code</button>`
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
        <button class="btn-win95" onclick="window.open('https://optimizer.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/agentic-workflow-optimizer', '_blank')">View Code</button>`
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        icon: ICONS.msn,
        url: 'https://agents.mytestbed.tech',
        tooltip: 'AI Agent Collection',
        content: `<h3>AI Agents</h3>
        <p>Collection of AI Agents implementation.</p>
        <p><strong>Stack:</strong> Jupyter Notebook</p>
        <button class="btn-win95" onclick="window.open('https://agents.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/AI-Agents', '_blank')">View Code</button>`
    },
    {
        id: 'api-dashboard',
        title: 'API Dashboard',
        icon: ICONS.chart,
        url: 'https://api-dashboard.mytestbed.tech',
        tooltip: 'Intelligent Token Mgmt',
        content: `<h3>API Dashboard</h3>
        <p>AI API Command Center - Intelligent token management and orchestration platform.</p>
        <p><strong>Stack:</strong> JavaScript</p>
        <button class="btn-win95" onclick="window.open('https://api-dashboard.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/api-dashboard', '_blank')">View Code</button>`
    },
    {
        id: 'makeover',
        title: 'Clever Makeover',
        icon: ICONS.html,
        url: 'https://makeover.mytestbed.tech',
        tooltip: 'Portfolio Test Bed',
        content: `<h3>Clever Makeover</h3>
        <p>My Test Bed project.</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://makeover.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/clever-makeover', '_blank')">View Code</button>`
    },
    {
        id: 'cll-agent',
        title: 'CLL Agent',
        icon: ICONS.text,
        url: 'https://cll-agent.mytestbed.tech',
        tooltip: 'TypeScript Agent Logic',
        content: `<h3>CLL Agent</h3>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://cll-agent.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/CLL-Agent', '_blank')">View Code</button>`
    },
    {
        id: 'fxtrackpro',
        title: 'FxTrackPro',
        icon: ICONS.certificate,
        url: 'https://fxtrackpro.mytestbed.tech',
        tooltip: 'Trading Automation Tool',
        content: `<h3>FxTrackPro</h3>
        <p>Repository for FxTrackPro automation.</p>
        <button class="btn-win95" onclick="window.open('https://fxtrackpro.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/FxTrackPro', '_blank')">View Code</button>`
    },
    {
        id: 'llm-apps',
        title: 'LLM Apps Usage',
        icon: ICONS.world,
        url: 'https://llm-apps.mytestbed.tech',
        tooltip: 'RAG & AI Examples',
        content: `<h3>LLM Apps Usage</h3>
        <p>Usage of LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and OpenSource models.</p>
        <button class="btn-win95" onclick="window.open('https://llm-apps.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/llm-apps-usage', '_blank')">View Code</button>`
    },
    {
        id: 'mam-projects',
        title: 'MAM Projects',
        icon: ICONS.folder,
        url: 'https://mam.mytestbed.tech',
        tooltip: 'MAM-PAMM Hub',
        content: `<h3>MAM Projects (v2/v4)</h3>
        <p>TypeScript implementations for MAM-PAMM.</p>
        <button class="btn-win95" onclick="window.open('https://mam.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/mam-v4', '_blank')">View Code</button>`
    },
    {
        id: 'x-winds',
        title: 'X-Winds V2',
        icon: ICONS.network,
        url: 'https://x-winds.mytestbed.tech',
        tooltip: 'TS Web Framework',
        content: `<h3>X-Winds V2</h3>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://x-winds.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/x-winds-v2', '_blank')">View Code</button>`
    },
    {
        id: 'photonic',
        title: 'Photonic Curiosity',
        icon: ICONS.camera,
        url: 'https://photonic.mytestbed.tech',
        tooltip: 'HTML Creative Showcase',
        content: `<h3>Photonic Curiosity</h3>
        <p><strong>Stack:</strong> HTML</p>
        <button class="btn-win95" onclick="window.open('https://photonic.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/photonic-curiosity', '_blank')">View Code</button>`
    },

    // ── GenAI Architect ───────────────────────────────────────────────────────
    {
        id: 'genai-patterns',
        title: 'GenAI Patterns',
        icon: ICONS.brain,
        url: 'https://github.com/tnmurthy/genai-patterns',
        tooltip: 'GenAI Architecture Patterns',
        content: `<h3>GenAI Patterns</h3>
        <p>A curated showcase of GenAI architecture patterns: RAG pipelines, fine-tuning guides, prompt engineering templates, model evaluation strategies, and multi-modal inputs.</p>
        <p><strong>Role:</strong> GenAI Architect</p>
        <p><strong>Stack:</strong> Python, LangChain, OpenAI, Anthropic</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/genai-patterns', '_blank')">View Code</button>`
    },
    {
        id: 'llm-eval-framework',
        title: 'LLM Eval Framework',
        icon: ICONS.chart,
        url: 'https://github.com/tnmurthy/llm-eval-framework',
        tooltip: 'LLM Benchmarking Toolkit',
        content: `<h3>LLM Eval Framework</h3>
        <p>Evaluation toolkit for benchmarking LLMs (OpenAI, Anthropic, Gemini, OSS models) on custom datasets. Measures accuracy, latency, cost, and hallucination rates.</p>
        <p><strong>Role:</strong> GenAI Architect</p>
        <p><strong>Stack:</strong> Python, Jupyter Notebook</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/llm-eval-framework', '_blank')">View Code</button>`
    },
    {
        id: 'vector-rag-starter',
        title: 'Vector RAG Starter',
        icon: ICONS.network,
        url: 'https://github.com/tnmurthy/vector-rag-starter',
        tooltip: 'Production-Ready RAG Kit',
        content: `<h3>Vector RAG Starter</h3>
        <p>Production-ready RAG starter kit with vector DB integrations (Pinecone, Chroma, Weaviate), chunking strategies, hybrid search, and re-ranking.</p>
        <p><strong>Role:</strong> GenAI Architect</p>
        <p><strong>Stack:</strong> Python, TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/vector-rag-starter', '_blank')">View Code</button>`
    },

    // ── Agentic Architect ─────────────────────────────────────────────────────
    {
        id: 'multi-agent-orchestrator',
        title: 'Multi-Agent Orch.',
        icon: ICONS.robot,
        url: 'https://github.com/tnmurthy/multi-agent-orchestrator',
        tooltip: 'Multi-Agent Orchestration',
        content: `<h3>Multi-Agent Orchestrator</h3>
        <p>Multi-agent system demonstrating supervisor/worker patterns, agent handoffs, tool use, and persistent memory using LangGraph and CrewAI.</p>
        <p><strong>Role:</strong> Agentic Architect</p>
        <p><strong>Stack:</strong> Python, LangGraph, CrewAI</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/multi-agent-orchestrator', '_blank')">View Code</button>`
    },
    {
        id: 'agent-design-patterns',
        title: 'Agent Design Patterns',
        icon: ICONS.gear,
        url: 'https://github.com/tnmurthy/agent-design-patterns',
        tooltip: 'Agentic Pattern Playbook',
        content: `<h3>Agent Design Patterns</h3>
        <p>Playbook of agentic patterns with working demos: ReAct, Plan-and-Execute, reflection loops, tool-augmented agents, and self-healing pipelines.</p>
        <p><strong>Role:</strong> Agentic Architect</p>
        <p><strong>Stack:</strong> Python, TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/agent-design-patterns', '_blank')">View Code</button>`
    },
    {
        id: 'mcp-server-toolkit',
        title: 'MCP Server Toolkit',
        icon: ICONS.world,
        url: 'https://github.com/tnmurthy/mcp-server-toolkit',
        tooltip: 'Model Context Protocol Servers',
        content: `<h3>MCP Server Toolkit</h3>
        <p>Model Context Protocol (MCP) server examples showcasing agentic infrastructure: custom tools, resource providers, and multi-model context management.</p>
        <p><strong>Role:</strong> Agentic Architect</p>
        <p><strong>Stack:</strong> TypeScript, Python</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/mcp-server-toolkit', '_blank')">View Code</button>`
    },

    // ── Product Owner ─────────────────────────────────────────────────────────
    {
        id: 'ai-product-canvas',
        title: 'AI Product Canvas',
        icon: ICONS.product,
        url: 'https://github.com/tnmurthy/ai-product-canvas',
        tooltip: 'AI-Powered PM Tool',
        content: `<h3>AI Product Canvas</h3>
        <p>AI-powered product management tool: auto-generates user stories, prioritizes backlogs, and writes acceptance criteria using LLMs — turning product ideas into sprint-ready tasks.</p>
        <p><strong>Role:</strong> Product Owner</p>
        <p><strong>Stack:</strong> TypeScript, OpenAI</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/ai-product-canvas', '_blank')">View Code</button>`
    },
    {
        id: 'product-metrics-ai',
        title: 'Product Metrics AI',
        icon: ICONS.chart,
        url: 'https://github.com/tnmurthy/product-metrics-ai',
        tooltip: 'AI-Assisted Sprint Analytics',
        content: `<h3>Product Metrics AI</h3>
        <p>AI-assisted product analytics dashboard that auto-summarises sprint metrics, flags delivery risks, and suggests next-best priorities for product teams.</p>
        <p><strong>Role:</strong> Product Owner</p>
        <p><strong>Stack:</strong> JavaScript, Python</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/product-metrics-ai', '_blank')">View Code</button>`
    },
    {
        id: 'roadmap-visualizer',
        title: 'Roadmap Visualizer',
        icon: ICONS.html,
        url: 'https://github.com/tnmurthy/roadmap-visualizer',
        tooltip: 'Interactive Product Roadmap',
        content: `<h3>Roadmap Visualizer</h3>
        <p>Interactive, shareable product roadmap viewer with timeline views, milestone tracking, and dependency mapping — built for modern product teams.</p>
        <p><strong>Role:</strong> Product Owner</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/roadmap-visualizer', '_blank')">View Code</button>`
    },

    // ── Strategic Advisor ─────────────────────────────────────────────────────
    {
        id: 'genai-adoption-playbook',
        title: 'GenAI Playbook',
        icon: ICONS.book,
        url: 'https://github.com/tnmurthy/genai-adoption-playbook',
        tooltip: 'Enterprise GenAI Adoption Guide',
        content: `<h3>GenAI Adoption Playbook</h3>
        <p>Structured enterprise GenAI adoption framework: use-case prioritisation, build-vs-buy decision trees, ROI calculators, governance templates, and change management guides.</p>
        <p><strong>Role:</strong> Strategic Advisor</p>
        <p><strong>Stack:</strong> Markdown, GitHub Pages</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/genai-adoption-playbook', '_blank')">View Code</button>`
    },
    {
        id: 'ai-strategy-canvas',
        title: 'AI Strategy Canvas',
        icon: ICONS.strategy,
        url: 'https://github.com/tnmurthy/ai-strategy-canvas',
        tooltip: 'AI Readiness Assessment Tool',
        content: `<h3>AI Strategy Canvas</h3>
        <p>Interactive web app helping organisations assess AI readiness, map use cases to business value, and build a prioritised GenAI investment roadmap.</p>
        <p><strong>Role:</strong> Strategic Advisor</p>
        <p><strong>Stack:</strong> TypeScript</p>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/ai-strategy-canvas', '_blank')">View Code</button>`
    },
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
        <p>🔗 <a href="https://www.linkedin.com/in/narayanamurthy-t/" target="_blank" style="color:#000080">LinkedIn Articles</a></p>
        <p>🔗 <a href="https://github.com/tnmurthy" target="_blank" style="color:#000080">GitHub</a></p>
        <button class="btn-win95" onclick="window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')">View on LinkedIn</button>`
    },

    // ── Non-code Desktop Icons ────────────────────────────────────────────────
    {
        id: 'linkedin',
        title: 'LinkedIn',
        icon: ICONS.linkedin,
        url: 'https://www.linkedin.com/in/narayanamurthy-t/',
        tooltip: 'LinkedIn Profile',
        content: `<h3>LinkedIn Profile</h3>
        <p><strong>Narayanamurthy T</strong> – Product Owner · Strategic Advisor · GenAI &amp; Agentic Architect</p>
        <p>Connect to explore collaboration, advisory, or speaking opportunities.</p>
        <button class="btn-win95" onclick="window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')">Open LinkedIn</button>`
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
        <button class="btn-win95" onclick="window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')">View Full Profile</button>`
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
        <button class="btn-win95" onclick="window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')">Verify on LinkedIn</button>`
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
        <button class="btn-win95" onclick="window.open('https://www.linkedin.com/in/narayanamurthy-t/', '_blank')">Connect for Details</button>`
    }
];

let zIndex = 100;
let openWindows = {};

function init() {
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
    const startupSound = new Audio('https://win98icons.alexmeub.com/sounds/startup.wav');

    // Auto-boot after 3 seconds
    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        document.body.classList.add('booted');

        // Play sound on first interaction (since browsers block autoplay)
        const playSound = () => {
            startupSound.play().catch(e => console.log('Audio wait for interaction'));
            document.removeEventListener('click', playSound);
            document.removeEventListener('mousedown', playSound);
        };
        document.addEventListener('click', playSound);
        document.addEventListener('mousedown', playSound);
    }, 3000);
}

function renderDesktopIcons() {
    const desktop = document.getElementById('desktop');
    projects.forEach(project => {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';

        // Timer to distinguish between single click (nav) and double click (details)
        let clickTimer = null;
        icon.onclick = (e) => {
            if (clickTimer) {
                // Second click within timeout - it's a double click
                clearTimeout(clickTimer);
                clickTimer = null;
                openWindow(project.id);
            } else {
                // First click
                clickTimer = setTimeout(() => {
                    clickTimer = null;
                    // Only navigate if it stayed a single click
                    window.open(project.url, '_blank');
                }, 250);
            }
        };

        const displayTitle = project.title.length > 15 ? project.title.substring(0, 12) + '...' : project.title;

        icon.innerHTML = `
            <img src="${project.icon}" alt="${project.title}">
            <span>${displayTitle}</span>
            <div class="tooltip">${project.tooltip || 'Visit Site'} (Double-click for details)</div>
        `;
        desktop.appendChild(icon);
    });
}

function openWindow(id) {
    if (openWindows[id]) {
        bringToFront(openWindows[id]);
        return;
    }

    const project = projects.find(p => p.id === id) || {
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
        // Close submenus
        document.getElementById('programs-submenu').style.display = 'none';
    } else {
        menu.style.display = 'flex';
        btn.classList.add('active');
    }
}

function showPrograms() {
    const submenu = document.getElementById('programs-submenu');
    submenu.style.display = 'flex';
}

function hidePrograms() {
    const submenu = document.getElementById('programs-submenu');
    submenu.style.display = 'none';
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
                item.classList.add('active');
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

    titleBar.onmousedown = (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = element.offsetLeft;
        initialTop = element.offsetTop;
        bringToFront(element);
    };

    document.onmousemove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        element.style.left = `${initialLeft + dx}px`;
        element.style.top = `${initialTop + dy}px`;
    };

    document.onmouseup = () => {
        isDragging = false;
    };
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
            "Double-click an icon to open a project.",
            "I am watching you... browse this portfolio.",
            "Don't forget to take a break and stretch!",
            "Pulse Pipeline represents a dynamic agent pipeline.",
            "API Dashboard helps manage your tokens.",
            "Try right-clicking (coming soon!)",
            "You can drag windows around. Go ahead, try it!",
            "The Start menu has some useful links too."
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

function initContextMenu() {
    const menu = document.createElement('div');
    menu.id = 'context-menu';
    menu.innerHTML = `
        <div class="context-menu-item" onclick="location.reload()">Refresh</div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-item" onclick="openWindow('about')">About This Site</div>
        <div class="context-menu-item" onclick="alert('Windows 95 properties are coming soon!')">Properties</div>
    `;
    document.body.appendChild(menu);

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        menu.style.display = 'block';
        menu.style.left = `${e.clientX}px`;
        menu.style.top = `${e.clientY}px`;
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

    let startX, startY, isDragging = false;

    desktop.onmousedown = (e) => {
        if (e.target !== desktop) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        marquee.style.display = 'block';
        marquee.style.width = '0';
        marquee.style.height = '0';

        // Clear previous selections
        document.querySelectorAll('.desktop-icon').forEach(icon => icon.classList.remove('selected'));
    };

    document.onmousemove = (e) => {
        if (!isDragging) return;
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
    };

    document.onmouseup = () => {
        isDragging = false;
        marquee.style.display = 'none';
    };
}

init();
