const projects = {
    ShakEngine: {
        kicker: "Game engine · From scratch",
        title: "ShakEngine",
        description: "A 2D game engine developed from scratch in C++. Its architecture combines an entity-component scene hierarchy with object pooling, quadtree collision optimization, resource and lifetime management, customizable particles and trails, UI tooling, texture atlases, hot-reloaded shaders, parallax cameras, and automated asset packaging.",
        link: "https://github.com/Teo7297/ShakEngine",
        linkLabel: "View source on GitHub",
        stack: ["C++", "CMake", "GLSL", "SFML", "OpenGL", "Dear ImGui"],
        media: [{ type: "youtube", src: "https://www.youtube-nocookie.com/embed/L-5xh_M2vTc", title: "ShakEngine demonstration" }]
    },
    Zombie: {
        kicker: "3D game · Systems design",
        title: "Zombie++",
        description: "A first-person survival game inspired by classic wave-based shooters. The project includes modular weapon and character-stat systems, perks, enemy behavior, and a clear separation between match logic, game modes, and world settings—all built with performance and reliability in mind.",
        link: "https://realishak.itch.io/zombiepp",
        linkLabel: "Play on itch.io",
        stack: ["Unity 2021 LTS", "C#", "Gameplay architecture", "Git"],
        media: [
            { type: "image", src: "gifs/Shock.gif", title: "Zombie++ shock gameplay effect" },
            { type: "youtube", src: "https://www.youtube-nocookie.com/embed/3-PnnXMjHvE", title: "Zombie++ gameplay" }
        ]
    },
    marsMarines: {
        kicker: "Action game · Unreal Engine",
        title: "Mars Marines",
        description: "A top-down action shooter featuring weapons, power-ups, and alien enemies. It served as a focused exploration of Unreal Engine 5 workflows and the boundary between native C++ systems and designer-friendly Blueprints.",
        stack: ["Unreal Engine 5.2", "C++", "Blueprints", "Visual Studio"],
        media: [{ type: "youtube", src: "https://www.youtube-nocookie.com/embed/SpmD7Z6HmaE", title: "Mars Marines gameplay" }]
    },
    openGL: {
        kicker: "Rendering · Learning project",
        title: "OpenGL renderer",
        description: "A practical computer-graphics learning project built from first principles. It covers vertex and index buffers, shaders, materials, textures, transform matrices, lighting, collision, 3D rendering, and batching, with debug tooling built in Dear ImGui.",
        link: "https://github.com/Teo7297/OpenGL-Learning",
        linkLabel: "View source on GitHub",
        stack: ["C++", "CMake", "OpenGL", "GLSL", "GLEW", "GLAD", "GLM", "Dear ImGui"],
        media: [
            { type: "image", src: "img/bloom.png", title: "Bloom rendering experiment" },
            { type: "youtube", src: "https://www.youtube-nocookie.com/embed/Cb18kXJW_1M", title: "OpenGL renderer demonstration" },
            { type: "youtube", src: "https://www.youtube-nocookie.com/embed/NkormSukO_A", title: "OpenGL renderer lighting demonstration" }
        ]
    }
};

const dialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogKicker = document.querySelector("#dialog-kicker");
const dialogDescription = document.querySelector("#dialog-description");
const dialogActions = document.querySelector("#dialog-actions");
const dialogStack = document.querySelector("#dialog-stack");
const dialogMedia = document.querySelector("#dialog-media");

function renderProject(project) {
    dialogTitle.textContent = project.title;
    dialogKicker.textContent = project.kicker;
    dialogDescription.textContent = project.description;
    dialogActions.replaceChildren();
    dialogStack.replaceChildren();
    dialogMedia.replaceChildren();

    if (project.link) {
        const link = document.createElement("a");
        link.className = "button";
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = `${project.linkLabel} ↗`;
        dialogActions.append(link);
    }

    project.stack.forEach((technology) => {
        const tag = document.createElement("span");
        tag.textContent = technology;
        dialogStack.append(tag);
    });

    project.media.forEach((media) => {
        const frame = document.createElement("div");
        frame.className = "media-frame";
        if (media.type === "youtube") {
            const iframe = document.createElement("iframe");
            iframe.src = media.src;
            iframe.title = media.title;
            iframe.loading = "lazy";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            frame.append(iframe);
        } else {
            const image = document.createElement("img");
            image.src = media.src;
            image.alt = media.title;
            image.loading = "lazy";
            frame.append(image);
        }
        dialogMedia.append(frame);
    });
}

function openProject(projectKey) {
    const project = projects[projectKey];
    if (!project) return;
    renderProject(project);
    document.body.classList.add("dialog-open");
    dialog.showModal();
}

function closeProject() {
    dialog.close();
    document.body.classList.remove("dialog-open");
    dialogMedia.replaceChildren();
}

document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelector(".dialog-close").addEventListener("click", closeProject);
dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const isBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (isBackdrop) closeProject();
});
dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    dialogMedia.replaceChildren();
});
