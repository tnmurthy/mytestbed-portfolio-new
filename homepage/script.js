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
    certificate: 'https://win98icons.alexmeub.com/icons/png/trust_certificate-0.png'
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
    if (element._destroyDrag) element._destroyDrag();
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

    const onMouseDown = (e) => {
        if (e.target.closest('.title-bar-controls')) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = element.offsetLeft;
        initialTop = element.offsetTop;
        bringToFront(element);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        element.style.left = `${initialLeft + dx}px`;
        element.style.top = `${initialTop + dy}px`;
    };

    const onMouseUp = () => {
        isDragging = false;
    };

    titleBar.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    element._destroyDrag = () => {
        titleBar.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
}

function initClippy() {
    window.clippy = new Clippy();
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

    document.addEventListener('mousemove', (e) => {
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
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        marquee.style.display = 'none';
    });
}

init();
