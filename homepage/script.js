/* Icons as Data URIs to ensure they always load */
const ICONS = {
    computer: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMiA2aDI4djIwaC0yOFo2IiBmaWxsPSIjYzA2Ii8+PHBhdGggZD0iTTIgNmgxdjE5SDJWMsIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMgMjVoMjZ2MUgzVjI1IiBmaWxsPSIjODA4MDgwIi8+PHBhdGggZD0iTTMgNmgyNnYxSDNWNiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjUiIHk9IjkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNCIgZmlsbD0iIzAwODA4MCIvPjwvc3ZnPg==', // Simple placeholder
    folder: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23bfaa7f%22%20d%3D%22M2%204h8l2%202h18v22H2z%22%2F%3E%3Cpath%20fill%3D%22%23e6cd99%22%20d%3D%22M2%208h28v18H2z%22%2F%3E%3C%2Fsvg%3E',
    text: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23fff%22%20stroke%3D%22%23000%22%20d%3D%22M6%202h14l6%206v22H6z%22%2F%3E%3Cpath%20d%3D%22M20%202v6h6%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%2F%3E%3C%2Fsvg%3E',
    clippy: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M30%2090%20V40%20A10%2010%200%201%201%2050%2040%20V80%20A10%2010%200%201%200%2070%2080%20V30%22%20stroke%3D%22%23808080%22%20fill%3D%22none%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2235%22%20cy%3D%2230%22%20r%3D%223%22%20fill%3D%22black%22%2F%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2230%22%20r%3D%223%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M30%2020%20Q40%2015%2050%2020%22%20stroke%3D%22black%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M50%2020%20Q60%2015%2070%2020%22%20stroke%3D%22black%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E'
};

const projects = [
    {
        id: 'pulse-pipeline',
        title: 'Pulse-Pipeline',
        icon: ICONS.folder,
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
        icon: ICONS.folder,
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
        icon: ICONS.folder,
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
        icon: ICONS.folder,
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
        icon: ICONS.folder,
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
        icon: ICONS.text,
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
        icon: ICONS.text,
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
        icon: ICONS.folder,
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
        icon: ICONS.text,
        url: 'https://photonic.mytestbed.tech',
        tooltip: 'HTML Creative Showcase',
        content: `<h3>Photonic Curiosity</h3>
        <p><strong>Stack:</strong> HTML</p>
        <button class="btn-win95" onclick="window.open('https://photonic.mytestbed.tech', '_blank')">Visit Site</button>
        <button class="btn-win95" onclick="window.open('https://github.com/tnmurthy/photonic-curiosity', '_blank')">View Code</button>`
    }
];

let zIndex = 100;
let openWindows = {};

function init() {
    renderDesktopIcons();
    updateClock();
    setInterval(updateClock, 1000);

    // Init Clippy
    initClippy();
}

function renderDesktopIcons() {
    const desktop = document.getElementById('desktop');
    projects.forEach(project => {
        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.onclick = () => openWindow(project.id);
        icon.innerHTML = `
            <img src="${project.icon}" alt="${project.title}">
            <span>${project.title}</span>
            <div class="tooltip">${project.tooltip || 'View Project'}</div>
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
        content: `<h3>Hello, I'm Sreepadma!</h3><p>Welcome to my Windows 95 portfolio.</p><p>Double-click icons to explore my projects.</p><p>This site demonstrates my interest in unique web experiences.</p>`
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
    windowEl.addEventListener('mousedown', () => bringToFront(windowEl));

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
    element.style.zIndex = ++zIndex;
}

function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-button');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        btn.classList.remove('active');
    } else {
        menu.style.display = 'flex';
        btn.classList.add('active');
    }
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
            "Don't provide to take a break and stretch!",
            "Pulse Pipeline represents a dynamic agent pipeline.",
            "API Dashboard helps manage your tokens."
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

init();
