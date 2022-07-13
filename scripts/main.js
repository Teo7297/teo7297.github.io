

let project = {
    "title": "",
    "link": "",
    "descriprion": "",
    "tech_stack": [],
    "media": [],
    "contributors": []
}

let angelwrath = Object.assign({}, project);

angelwrath.title = "I.R.A. Project";

angelwrath.thumbnail = "";

angelwrath.descriprion = "I.R.A. is my first big project, especially working with others, and it is currently under active development. Our team aims to produce a gameplay-focused, fast-paced action first-person shooter set in hell-inspired environments that will present many gameplay elements from classic games like Quake and Doom. Moreover, the game will offer Roguelite mechanics. The project's main focus goes into the \"Gameplay moment\" design that our players look for during their sessions.";

angelwrath.link = "";

angelwrath.tech_stack = [
    "Unity V2021 LTS",
    "VSCode/Visual Studio",
    "GIT",
    "Blender",
    "Maya",
    "Google Suite (Drive, Docs, Sheets, Jamboard)",
    "Communication channels: Discord/Telegram"
];

angelwrath.media = [

];

angelwrath.contributors = [
    "Selva Stefano - Project Lead",
    "Cavagnino Matteo - Programming",
    "Lamperti Ivan - Programming",
    "Bodini Andrea - Programming",
    "Natalia - Concept artist",
    "Marco - 3D Model Artist, Rigging",
    "Frassinelli Matteo - 3D Model Artist, Rigging"
];


////////////////////////////////////////////////////////////////////////


let RPG = Object.assign({}, project);

RPG.title = "3D Learning RPG";

RPG.descriprion = "This is a simple RPG project I made while learning many of the advanced features of the Unity game engine. My main focus here was to learn how to structure big games' projects, approach new feature insertion and what tools Unity offers to accomplish such tasks. Most of the project was conducted following lessons from the courses provided on www.gamedev.tv website.";

RPG.link = "";

RPG.media = [];

RPG.tech_stack = [
    "Unity V2021 LTS",
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
    "Mirror - Networking",
    "Amazon Web Services - Online server",
    "Jetbrains Rider / Visual Studio",
    "GIT",
    "Google Suite (Docs, Jamboard)"
];

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

openGL.descriprion = "This project is the result of a learning path that included a few publicly available courses with the goal of learning the basics of computer graphics and OpenGL. I applied many core concepts of computer graphics like vertices, vertex buffers, index buffers, vertex arrays, shaders, materials, textures, MVP matrices and batch rendering. This project mainly contains basics about the above topics and is under current active development.";

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

piano_hero.contributors = [
    "Cavagnino Matteo",
];


////////////////////////////////////////////////////////////////////////
let movie_store = Object.assign({}, project);

movie_store.title = "Movie Store";

movie_store.link = "";

movie_store.descriprion = "Movie Store is a browser application that resembles how an online movie store might work. I developed this project during the University course on Web and Cloud Programming. The application is pretty straightforward and allows store owners to register their online store and insert the movies they sell, selecting them from the catalogue offered by TheMovieDB. Finally, \"normal\" users can register an account and buy movies from the many registered stores using the preferred payment method. The purchased movies are then grouped into the user's library. The project also made good use of browsers' built-in features like cookies and storage.";

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


let projects = {
    "angelwrath": angelwrath,
    "RPG": RPG,
    "skala": skala,
    "openGL": openGL,
    "PHero": piano_hero,
    "Movie-store": movie_store,
    "LiraRecognizer": noteRec
};

////////////////////////////////////////////////////////////////////////

// career
let career = {
    "company": "",
    "location": "",
    "position": "",
    "duration": ""
};

let careerHTML1 = '<div><hr class="thin"></div><h2>Company</h2><div>';
let careerHTML2 = "</div><br><br><h3>Location</h3><div>";
let careerHTML3 = "</div><br><br><h3>Job position</h3><div>";
let careerHTML4 = "</div><br><br><h3>Duration</h3><div>";
let careerHTML5 = '</div><div><hr class="thin"></div>';


let alterna = Object.assign({}, career);
alterna.company = "Altea Federation - Alterna";
alterna.location = "Italy, Lainate(MI)";
alterna.position = "Software developer - internship";
alterna.duration = "4 months (May 2021 - September 2021)";


let careers = [alterna,];

////////////////////////////////////////////////////////////////////////

// skills
let skill = {
    "name": "",
    "level": 0
};

let java = Object.assign({}, skill);
java.name = "Java";
java.level = 88;
let python = Object.assign({}, skill);
python.name = "Python";
python.level = 75;
let javascript = Object.assign({}, skill);
javascript.name = "JavaScript";
javascript.level = 65;
let css = Object.assign({}, skill);
css.name = "CSS";
css.level = 60;
let html = Object.assign({}, skill);
html.name = "HTML5";
html.level = 68;
let csharp = Object.assign({}, skill);
csharp.name = "C#";
csharp.level = 75;
let unity = Object.assign({}, skill);
unity.name = "Unity";
unity.level = 75;
let c = Object.assign({}, skill);
c.name = "C";
c.level = 30;
let cpp = Object.assign({}, skill);
cpp.name = "C++";
cpp.level = 50;
let opengl = Object.assign({}, skill);
opengl.name = "OpenGL";
opengl.level = 40;
let cmake = Object.assign({}, skill);
cmake.name = "CMake";
cmake.level = 60;
let vscode = Object.assign({}, skill);
vscode.name = "VSCode";
vscode.level = 90;
let vs = Object.assign({}, skill);
vs.name = "Visual Studio";
vs.level = 70;
let english = Object.assign({}, skill);
english.name = "English";
english.level = 85;
let italian = Object.assign({}, skill);
italian.name = "Italian";
italian.level = 96;
let plsql = Object.assign({}, skill);
plsql.name = "PL/SQL";
plsql.level = "65";
let mongoDB = Object.assign({}, skill);
mongoDB.name = "MongoDB";
mongoDB.level = "60";
let git = Object.assign({}, skill);
git.name = "GIT";
git.level = "70";

let skills = [java, python, javascript, html, css, csharp, unity, c, cpp, opengl, cmake, vscode, vs, english, italian, plsql, mongoDB, git];


////////////////////////////////////////////////////////////////////////

// research

let research = {
    "title": "",
    "date": "",
    "link": ""
};

let notyet = Object.assign({}, research);
notyet.title = "Research thesis under current development";


let researches = [notyet,];
////////////////////////////////////////////////////////////////////////
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
    document.getElementById("proj-link").href = p.link;
    document.getElementById("proj-link").innerText = p.link;

    p.tech_stack.forEach(element => {
        document.getElementById("proj-tech").innerHTML += '<div>' + element + '</div>';
    });
    document.getElementById("proj-desc").innerText = p.descriprion;

    p.contributors.forEach(element => {
        document.getElementById("proj-contributors").innerHTML += '<div>' + element + '</div>';
    });

    window.scroll(0, getOffset(document.getElementById("project")).top);
}

function resetProjectSection() {
    document.getElementById("proj-title").innerText = "";
    document.getElementById("proj-link").href = "";
    document.getElementById("proj-link").innerText = "";
    document.getElementById("proj-tech").innerHTML = "";
    document.getElementById("proj-desc").innerText = "";
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
        current_page.style.display = "none";;
        current_page = null;
        current_clicked = null;
        if (ret)
            return;
    }

    current_clicked = element;

    switch (current_clicked.id) {
        case "projects-Button":
            current_page = document.getElementById("project-page");
            break;
        case "career-Button":
            current_page = document.getElementById("career-page");
            let cont = document.getElementById("careers-container");
            careers.forEach(crr => {
                cont.innerHTML = careerHTML1 + crr.company + careerHTML2 + crr.location + careerHTML3 + crr.position + careerHTML4 + crr.duration + careerHTML5;
            });
            break;
        case "skills-Button":
            current_page = document.getElementById("skills-page");
            break;
        case "research-Button":
            current_page = document.getElementById("research-page");
            break;
    }

    current_page.style.display = "flex";

}