

let project = {
    "title": "",
    "link": "",
    "descriprion": "",
    "tech_stack": [],
    "video": [],
    "images": [],
    "contributors": []
}

////////////////////////////////////////////////////////////////////////


let Zombie = Object.assign({}, project);

Zombie.title = "Zombie++";

Zombie.descriprion = "This is a simple 3D First Person Shooter heavily inspired to the classic Call of Duty: Zombies franchise, with all the main features and some added tweaks for a more fun and smooth gameplay. This project is bigger than it seems, with many integrated gameplay features, such as multiple perks, modular weapon system, modular stats for both the player and the zombies, subdivision between match logic, gamemode and gameworld settings; this and much more! Please feel free to give it a quick try on itch.io. Note: I'm not an artist nor I have interest in producing an artistic result, my objective was to learn how features are implemented in this kind of games and I implemented them always keeping an eye on performance and reliability.";

Zombie.link = "https://realishak.itch.io/zombiepp";

Zombie.video = ["gifs/Equip_Gun.gif", "gifs/Freeze.gif", "gifs/Shock.gif", "gifs/Wolf.gif", "gifs/XRay.gif", "gifs/ZombShell.gif", "https://youtube.com/embed/3-PnnXMjHvE"];

Zombie.tech_stack = [
    "Unity V2021 LTS",
    "C#",
    "VSCode",
    "GIT",
    "Google suite (Docs, Sheets)"
];

Zombie.contributors = [
    "Cavagnino Matteo",
    "Rosti Alessandro (Audio)"
];

////////////////////////////////////////////////////////////////////////


let angelwrath = Object.assign({}, project);

angelwrath.title = "I.R.A. Project (Active Development)";

angelwrath.thumbnail = "";

angelwrath.descriprion = "I.R.A. is my first big project, especially working with others, and it is currently under active development. Our team aims to produce a gameplay-focused, fast-paced action first-person shooter set in hell-inspired environments that will present many gameplay elements from classic games like Quake and Doom. Moreover, the game will offer Roguelite mechanics. The project's main focus goes into the \"Gameplay moment\" design that our players look for during their sessions. The project is in early development stages and this page will be updated frequently.";

angelwrath.link = "Private Project";

angelwrath.tech_stack = [
    "Unity V2021 LTS",
    "C#",
    "Python",
    "VSCode/Visual Studio",
    "GIT",
    "Blender",
    "Maya",
    "Google Suite (Drive, Docs, Sheets, Jamboard)",
    "Communication channels: Discord/Telegram"
];

angelwrath.video = ["https://youtube.com/embed/317SAoCYNJo", "https://youtube.com/embed/u90-3fZ-ufE", "https://youtube.com/embed/fETJhJRnNkQ"]   //"https://youtube.com/embed/yaxInOyVBpY";

angelwrath.images = ["img/IRA_character.png", "img/diablo4.png"]//["img/IRA_arena.png", "img/IRA_character.png", "img/IRA_revolver.png"];

angelwrath.contributors = [
    "Selva Stefano - Project Lead, VFX, Game designer",
    "Cavagnino Matteo - Programming, Game designer",
    "Lamperti Ivan - Programming",
    "Bodini Andrea - Programming",
    "Natalia - Concept artist, textures and UI designer",
    "Marco - 3D Model Artist, Rigging",
];


////////////////////////////////////////////////////////////////////////


let RPG = Object.assign({}, project);

RPG.title = "3D Learning RPG";

RPG.descriprion = "This is a simple RPG project I made while learning many of the advanced features of the Unity game engine. My main focus here was to learn how to structure big games' projects, approach new feature insertion and what tools Unity offers to accomplish such tasks.";

RPG.link = "https://github.com/Teo7297/3D_RPG";

RPG.video = ["https://youtube.com/embed/ypLnMQzCsgM",];

RPG.tech_stack = [
    "Unity V2021 LTS",
    "C#",
    "VSCode",
    "GIT",
    "Google suite (Docs, Sheets)"
];

RPG.contributors = [
    "Cavagnino Matteo",
];

////////////////////////////////////////////////////////////////////////

let skala = Object.assign({}, project);

skala.title = "SKALA";

skala.descriprion = "The SKALA project was a simple game developed during the University class of Online Game Design. As the title implies, the course focused on the design and theory parts but included a final small game project to concretize the design knowledge acquired. SKALA is an online multiplayer puzzle game that pushes players to race each other in the climb of a big tower made out of cubes, which need to be moved around correctly to allow progress. Players are pushed by the growing fire underneath and are slowed down by other players' objects. The players can acquire some bonus or malus items by completing random minigames hidden around the level.";

skala.link = "https://github.com/itsNikk/OGD2021_SKALA";

skala.tech_stack = [
    "Unity V2019 LTS",
    "C#",
    "Mirror - Networking",
    "Amazon Web Services - Online server",
    "Jetbrains Rider / Visual Studio",
    "GIT",
    "Google Suite (Docs, Jamboard)"
];

skala.video = ["https://youtube.com/embed/B7V9Hubs_AE",];

skala.contributors = [
    "Buganza Nicolo' - Game Design, Programming, Team Lead",
    "Cavagnino Matteo - Game Design, Programming",
    "Davanzo Riccardo - Game Design, Programming",
    "Leonardi Deborah - Art Design, Story Telling",
    "Corsalini Lorenzo - Music",
    "Braut Virginia - 3D Models Art"
];

////////////////////////////////////////////////////////////////////////

let openGL = Object.assign({}, project);

openGL.title = "OpenGL Learning Project";

openGL.descriprion = "This project is the result of a learning path that included a few publicly available courses and books with the goal of learning the basics of computer graphics and OpenGL. I applied many core concepts of computer graphics like vertices, vertex buffers, index buffers, vertex arrays, shaders, materials, textures, MVP matrices and batch rendering. Overtime more features like 3D rendering, illumination, collisions and more will be added to the project. This project mainly contains basics about the above topics and is under current active development.";

openGL.link = "https://github.com/Teo7297/OpenGL-Learning";

openGL.tech_stack = [
    "VSCode / Visual Studio",
    "CMake",
    "C/C++",
    "GLSL",
    "MSVC (Microsoft Compiler)",
    "OpenGL / GLEW / GLAD / GLM / STB_IMAGE libraries",
    "Dear ImGui framework - Debug UI"
];

//openGL.video = ["https://youtube.com/embed/kYR3sBq-Vyk",];
// openGL.video = ["https://youtube.com/embed/kYR3sBq-Vyk", "https://youtube.com/embed/Cb18kXJW_1M",];
openGL.video = ["https://youtube.com/embed/Cb18kXJW_1M", "https://youtube.com/embed/NkormSukO_A"];

openGL.images = ["img/bloom.png"];

openGL.contributors = [
    "Cavagnino Matteo",
];

////////////////////////////////////////////////////////////////////////
let piano_hero = Object.assign({}, project);

piano_hero.title = "Musical Notes Learning Game";

piano_hero.link = "https://github.com/Teo7297/ProgettoProgMusica";

piano_hero.descriprion = "This small game was developed as a project for the University course Musical Programming and is what sparked the joy of making videogames in me. The game is basic and simple and was developed using only Java; it aims to teach how to read complex notes on a stave with all the possible musical clefs. The player will have to play the notes on a virtual keyboard and eventually receive positive or negative feedback.";

piano_hero.tech_stack = [
    "Java 8",
    "Java Swing library",
    "Maven",
    "Jetbrains Intellij",
    "GIT"
];

piano_hero.video = ["https://youtube.com/embed/Nz3FOKnwXrE",];

piano_hero.contributors = [
    "Cavagnino Matteo",
];


////////////////////////////////////////////////////////////////////////
let movie_store = Object.assign({}, project);

movie_store.title = "Movie Store";

movie_store.link = "https://github.com/Teo7297/movie_store";

movie_store.descriprion = "Movie Store is a browser application that resembles how an online movie store might work. I developed this project during the University course on Web and Cloud Programming. The application is pretty straightforward and allows store owners to register their online store and insert the movies they sell, selecting them from the catalogue offered by TheMovieDB. Finally, \"normal\" users can register an account and buy movies from the many registered stores using the preferred payment method. The purchased movies are then grouped into the user's library. The project also made good use of browsers' built-in features like cookies and storage.";

movie_store.video = ["https://youtube.com/embed/r1UkrpU2yrE",];



movie_store.tech_stack = [
    "VSCode",
    "HTML, CSS, JavaScript",
    "TheMovieDB WEBAPI",
    "LaTeX - Documentation"
];

movie_store.contributors = [
    "Cavagnino Matteo",
];

////////////////////////////////////////////////////////////////////////
let noteRec = Object.assign({}, project);

noteRec.title = "Turkish Lira Recognizer";

noteRec.link = "https://github.com/sebacaccaro/Progetto_AFMD";

noteRec.descriprion = "The Turkish Lira Recognizer was developed during the University course \"Algorithms For Massive Datasets\". It consists of a Convolutional Neural Network model developed with the goal of recognizing Turkish Lira Banknotes.";

noteRec.contributors = [
    "Cavagnino Matteo",
    "Caccaro Sebastiano"
];

noteRec.tech_stack = [
    "Python3",
    "Jupyter Notebooks",
    "TensorFlow, PIL, Numpy, Matplotlib libraries",
    "Kaggle API",
    "LaTeX - Documentation"
];

///////////////////////////////////////////////////////////////////////////

let marsMarines = Object.assign({}, project);

marsMarines.title = "Mars Marines";

marsMarines.link = "";

marsMarines.descriprion = "Mars Marines is a top down action shooter involving guns, power-ups and, most importantly, aliens! This project has been developed using Unreal Engine 5 and allowed me to learn many concepts and features of such engine.";

marsMarines.video = ["https://youtube.com/embed/SpmD7Z6HmaE",];

marsMarines.contributors = [
    "Cavagnino Matteo",
];

marsMarines.tech_stack = [
    "Unreal Engine 5.2",
    "C++ / Blueprints",
    "Visual Studio",
];

///////////////////////////////////////////////////////////////////////////

let projects = {
    "Zombie": Zombie,
    // "angelwrath": angelwrath,
    "RPG": RPG,
    "marsMarines": marsMarines,
    //"skala": skala,
    "openGL": openGL,
    //"PHero": piano_hero,
    //"Movie-store": movie_store,
    //"LiraRecognizer": noteRec
};

////////////////////////////////////////////////////////////////////////

// career
let career = {
    "company": "",
    "location": "",
    "position": "",
    "description": "",
    "tech": "",
    "duration": ""
};

let careerHTML1 = '</div><h2>Company</h2><div>';
let careerHTML2 = "</div><br><br><h3>Location</h3><div>";
let careerHTML3 = "</div><br><br><h3>Job position</h3><div>";
let careerHTML4 = "</div><br><br><h3>Job description</h3><div>";
let careerHTML5 = "</div><br><br><h3>Technology used</h3><div>";
let careerHTML6 = "</div><br><br><h3>Duration</h3><div>";
let careerHTML7 = '</div><div><hr class="thin"></div>';


let alterna = Object.assign({}, career);
alterna.company = "Altea Federation - Alterna";
alterna.location = "Italy, Lainate(MI)";
alterna.position = "Software developer - Internship";
alterna.description = "I performed a brief internship on Microsoft 365 / Dynamics ERP systems."
alterna.tech = "Microsoft internal tools"
alterna.duration = "4 months (May 2021 - September 2021)";

let CAE = Object.assign({}, career);
CAE.company = "CAE";
CAE.location = "Italy, Sesto Calende(VA)";
CAE.position = "Flight Simulators Software Engineer - Full Time";
CAE.description = "My work here was mainly on helicopters full-flight simulators, I worked on complex systems such as flight-controls, electric system and, in the last few months, I specialized on the rendering engine."
CAE.tech = "C/C++, XML, Internal tools"
CAE.duration = "2022 - 2023";

let acteon = Object.assign({}, career);
acteon.company = "Acteon - De Götzen";
acteon.location = "Italy, Fagnano Olona (VA)";
acteon.position = "Computer Vision Engineer - Full Time";
acteon.description = "I work in the R&D department of a high-tech medical company, developing a new intraoral scanner for dentists that is capable of reconstructing 3D models of teeth using stereo-vision. In this project I worked on many aspects of the device, such as mesh post-processing, core data structures, bite registration and point cloud pre-processing. I studied, implemented and optimized various algorithms from scientific papers and adopted the most modern industry standards in terms of code."
acteon.tech = "C/C++, CUDA, QT, Python, Batch, CMake, OpenGL, CloudCompare, Various big libraries (PCL, Eigen, Thrust, Boost)"
acteon.duration = "2023 - Actual Occupation";



let careers = [acteon, CAE, alterna,];

////////////////////////////////////////////////////////////////////////

// skills
let skill = {
    "name": "",
    "level": 0
};

let skillHTML1 = "<div class='skillbox'><h4 class='skill-name' style='width: 15%;'>";
let skillHTML2 = "</h4><div class='progress-container'><div class='progress'><span class='filling' progress='";
let skillHTML3 = "'></span></div></div><div style='margin-left: 5vw; max-width=10vw; min-width=10vw'>";
let skillHTML4 = "%</div></div>";

let java = Object.assign({}, skill);
java.name = "Java";
java.level = 70;
let python = Object.assign({}, skill);
python.name = "Python";
python.level = 60;
let javascript = Object.assign({}, skill);
javascript.name = "JavaScript";
javascript.level = 50;
let css = Object.assign({}, skill);
css.name = "CSS";
css.level = 50;
let html = Object.assign({}, skill);
html.name = "HTML5";
html.level = 50;
let csharp = Object.assign({}, skill);
csharp.name = "C#";
csharp.level = 70;
let unity = Object.assign({}, skill);
unity.name = "Unity";
unity.level = 75;
let c = Object.assign({}, skill);
c.name = "C";
c.level = 60;
let cpp = Object.assign({}, skill);
cpp.name = "C++";
cpp.level = 80;
let opengl = Object.assign({}, skill);
opengl.name = "OpenGL";
opengl.level = 50;
let cmake = Object.assign({}, skill);
cmake.name = "CMake";
cmake.level = 65;
let plsql = Object.assign({}, skill);
plsql.name = "PL/SQL";
plsql.level = 50;
let mongoDB = Object.assign({}, skill);
mongoDB.name = "MongoDB";
mongoDB.level = 50;
let git = Object.assign({}, skill);
git.name = "GIT";
git.level = 75;
let linux = Object.assign({}, skill);
linux.name = "LINUX";
linux.level = 50;

let skills = [java, python, javascript, html, css, csharp, unity, c, cpp, opengl, cmake, plsql, mongoDB, git, linux];

skills.sort((a, b) => b.level - a.level); // reverse order sorting


////////////////////////////////////////////////////////////////////////

// research

let research = {
    "title": "",
    "date": "",
    "link": ""
};

let thesis = Object.assign({}, research);
thesis.title = "Design and Development of an Assurance Methodology for Security Certifications in Highly Dynamic Architectures";
thesis.descriprion = "This is my research and development master degree thesis developed at Universita' degli Studi di Milano. The thesis work is about security certifications in highly dynamic architectures such as Cloud and IoT systems. The work is written in English and compiled with LaTeX."
thesis.link = "https://github.com/Teo7297/Master-Degree-Thesis/blob/main/THESIS.pdf"


let researches = [thesis,];
////////////////////////////////////////////////////////////////////////

//studies

let study = {
    "University": "",
    "Faculty": "",
    "Years": "",
    "Concluded": ""
};

let triennale = Object.assign({}, study);
triennale.University = "Universita' degli studi dell'Insubria di Varese";
triennale.Years = "3 Years";
triennale.Concluded = "December 2019";
triennale.Faculty = "Computer Science (Informatica)";

let magistrale = Object.assign({}, study);
magistrale.University = "Universita' degli studi di Milano";
magistrale.Years = "2 Years";
magistrale.Concluded = "October 2022";
magistrale.Faculty = "Master Computer Science (Informatica Magistrale)";

let studies = [magistrale, triennale];

let studyHTML1 = '</div><h2>University</h2><div>';
let studyHTML2 = "</div><br><br><h3>Faculty</h3><div>";
let studyHTML3 = "</div><br><br><h3>Length</h3><div>";
let studyHTML4 = "</div><br><br><h3>Concluded</h3><div>";
let studyHTML5 = '</div><div><hr class="thin"></div>';



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


let current_project;

function showProject(btn) {

    let p = projects[btn.id];

    if (current_project != null) {
        current_project.style.transform = "";
        if (current_project.id == btn.id) {
            current_project = null;
            document.getElementById("current-project").style.display = 'none';
            return;
        }
    }

    resetProjectSection();

    current_project = btn;

    current_project.style.transform = "scale(1.5)";

    document.getElementById("current-project").style.display = 'flex';


    document.getElementById("proj-title").innerText = p.title;
    if (p.link == "Private Project") {
        document.getElementById("proj-link").innerText = p.link;
        document.getElementById("proj-link").removeAttribute("href");
    }

    else { document.getElementById("proj-link").href = p.link; }

    document.getElementById("proj-link").innerText = p.link;
    if (p.video.length > 0) {
        // document.getElementById("proj-video").style.paddingTop = "56.25%";
        //document.getElementById("proj-video").style.height = "45vw";
        let projvid = document.getElementById("proj-video");
        projvid.innerHTML = "";
        p.video.forEach(vid => {
            const iframe = document.createElement('iframe');
            iframe.className = 'responsiveiframe';
            iframe.allowFullscreen = true;
            iframe.src = vid;

            // Append the iframe to the projvid
            projvid.appendChild(iframe);
            iframe.classList.add(".img-responsive")
            // Access the iframe's content after it loads
            iframe.onload = function () {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                const images = iframeDoc.getElementsByTagName('img');

                for (let img of images) {
                    img.style.width = "100%"; // Set width to 100%
                    img.style.height = "auto"; // Optional: maintain aspect ratio
                }
            };
        });
    }
    else {
        // document.getElementById("proj-video").style.paddingTop = "0%";
        document.getElementById("proj-video").style.height = "0vw";
    }
    if (p.images != [])
        p.images.forEach(img => {
            document.getElementById("proj-img").innerHTML += '<img src="' + img + '" alt="">';
        });
    p.tech_stack.forEach(element => {
        document.getElementById("proj-tech").innerHTML += '<div>' + element + '</div>';
    });
    document.getElementById("proj-desc").innerText = p.descriprion;

    p.contributors.forEach(element => {
        document.getElementById("proj-contributors").innerHTML += '<div>' + element + '</div>';
    });
}

function resetProjectSection() {
    document.getElementById("proj-title").innerText = "";
    document.getElementById("proj-link").href = "";
    document.getElementById("proj-link").innerText = "";
    document.getElementById("proj-tech").innerHTML = "";
    document.getElementById("proj-desc").innerText = "";
    document.getElementById("proj-video").innerHTML = "";
    document.getElementById("proj-img").innerHTML = "";
    document.getElementById("proj-contributors").innerHTML = "";
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}



let current_clicked;
let current_page;

function buttonSelected(element) {

    if (current_clicked != null) {
        let ret = element.id == current_clicked.id;
        current_page.style.display = "none";
        current_clicked.style.backgroundColor = "";
        current_page = null;
        current_clicked = null;
        if (ret)
            return;
    }

    current_clicked = element;
    current_clicked.style.backgroundColor = "#58a9b0";

    let cont;

    switch (current_clicked.id) {
        case "projects-Button":
            current_page = document.getElementById("project-page");
            break;
        case "career-Button":
            current_page = document.getElementById("career-page");
            cont = document.getElementById("careers-container");
            cont.innerHTML = "";
            careers.forEach(crr => {
                cont.innerHTML += careerHTML1 + crr.company + careerHTML2 + crr.location + careerHTML3 + crr.position + careerHTML4 + crr.description + careerHTML5 + crr.tech + careerHTML6 + crr.duration + careerHTML7;
            });
            break;
        case "skills-Button":
            cont = document.getElementById("skillscontainer");
            cont.innerHTML = "";
            current_page = document.getElementById("skillspage");
            skills.forEach(sk => {
                cont.innerHTML += skillHTML1 + sk.name + skillHTML2 + sk.level + skillHTML3 + sk.level + skillHTML4;
            });
            let fills = document.getElementsByClassName("filling");
            for (let fill of fills) {
                let attr = fill.getAttribute("progress");
                fill.style.width = attr + "%";
            }
            break;
        case "research-Button":
            current_page = document.getElementById("researchpage");
            cont = document.getElementById("researchcontainer");
            cont.innerHTML = "";
            researches.forEach(rsc => {
                cont.innerHTML = "<h2 style='text-align: center; max-width: 70vw''>" + rsc.title + "</h2>";
                cont.innerHTML += "</br></br><h4 style='text-align: center; max-width: 60vw'>" + rsc.descriprion + "</h4>";
                cont.innerHTML += "</br></br><h2>Github Link</h2><a id='proj-link' href='" + rsc.link + "' style='text-align: center;'>" + rsc.link + "</a>";
            });
            break;
        case "studies-Button":
            current_page = document.getElementById("studypage");
            cont = document.getElementById("studycontainer");
            cont.innerHTML = "";
            studies.forEach(std => {
                cont.innerHTML += studyHTML1 + std.University + studyHTML2 + std.Faculty + studyHTML3 + std.Years + studyHTML4 + std.Concluded + studyHTML5;
            });
            break;


    }

    current_page.style.display = "flex";

}