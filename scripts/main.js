let current_clicked;

function buttonSelected(element) {
    if (current_clicked != null)
        current_clicked.style.background = 'none';
    if (element != current_clicked) {
        current_clicked = element;
        element.style.background = '#3A9D8B';
    } else {
        current_clicked = null;
    }
}

let project = {
    "title": "",
    "thumbnail": "",
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

RPG.descriprion = "This is a simple RPG project I made while learning many of the advanced features of the Unity game engine. My main focus here was to learn how to structure big games' projects, approach new feature insertion and what tools Unity offers to accomplish such tasks. Most of the project was conducted following lessons from the courses provided on " + "<a>www.gamedev.tv</a>" + " website.";

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
    "The GameDev Team behind the course lessons"
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

openGL.descriprion = "This project is the result of following a public course pubilished on YouTube by TheCherno with the goal of learning the basics of computer graphics and OpenGL. I applied many core concepts of computer graphics like vertices, vertex buffers, index buffers, vertex arrays, shaders, materials, textures, MVP matrices and batch rendering. This project mainly contains basics about the above topics and is under current active development.";

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

movie_store.descriprion = "Movie Store is a browser application that resembles how an online move store might work. I developed this project during the University course on Web and Cloud Programming. The application is pretty straightforward and allows store owners to register their online store and insert the movies they sell, selecting them from the catalogue offered by TheMovieDB. Finally, \"normal\" users can register an account and buy movies from the many registered stores using the preferred payment method. The purchased movies are then grouped into the user's library. The project also made good use of browsers' built-in features like cookies and storage.";

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




let projects = [
    angelwrath,
    RPG,
    skala,
    openGL,
    piano_hero,
    movie_store,
    noteRec,
];