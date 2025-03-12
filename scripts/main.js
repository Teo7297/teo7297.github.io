

let project = {
    "title": "",
    "link": "",
    "description": "",
    "tech_stack": [],
    "video": [],
    "images": [],
    "contributors": []
}
////////////////////////////////////////////////////////////////////////

let ShakEngine = Object.assign({}, project);

ShakEngine.title = "ShakEngine";

ShakEngine.description = `2D game engine developed from scratch using C++, OpenGL and the SFML library. The engine offers the following main features:</br></br>

- Tree-like scene hierarchy with Entity-Component design (similar to Unity)</br>
- Game objects pooling</br>
- SceneGraph quadtree collision optimization</br>
- Scene and objects life-time management </br>
- Fully customizable particle sytems (batched points and sprites)</br>
- Fully customizable trail renderer</br>
- Audio management</br>
- UI (with Dear ImGUI widgets)</br>
- TextureAtlases and sprite-sheet animations</br>
- Shader hot-reloading</br>
- JSON parser</br>
- Resource management (textures, audio, shaders, ecc)</br>
- Automatic assets binarization for build distribution</br>
- Automatic parallax background integration with multiple 2D cameras</br></br>

Here follows an example of scene initialization in the engine:</br></br>
<div style="background-color:rgb(40, 51, 79); padding: 1em;">
<pre>
<code>
class TestGameScene : public shak::Scene
{
public:
    ~TestGameScene() override
    {
        std::cout << "Test scene destroyed" << std::endl;
    }

    void Init() override
    {
        // Get resource manager
        auto rm = m_engine->GetResourceManager();

        // Setup camera and parallax background
        auto bgTexture = rm->LoadTexture("assets/textures/bg1.jpg", "bg1", true);
        auto bg = m_engine->AddGameObject&lt;shak::Background&gt;(bgTexture, sf::Vector2f(1920.f, 1080.f));
        auto bgsize = bgTexture->getSize();

        auto camera1 = m_renderer->AddCamera("camera1", sf::FloatRect({ 0, 0 }, { 1920, 1080 }));
        camera1->SetBackground(bg);
        camera1->SetBackgroundSize({ (float)(bgsize.x * 100), (float)(bgsize.y * 100) });

        // Load player and AI ships stats and initialize them
        json::JSON jsonData = json::JSON::LoadFromDisk("assets/json/ships/DPS.json");

        auto player = m_engine->AddGameObject&lt;Ship&gt;(jsonData);
        player->Name = "Player";
        player->AddComponent&lt;PlayerController&gt;();
        player->AddChild(camera1); // Attach camera to player
        camera1->setPosition(player->getPosition());

        // Spawn 3 aliens
        for (int i = 0; i &lt; 3; i++)
        {
            auto alien = m_engine->AddGameObject&lt;Ship&gt;(jsonData);
            alien->AddComponent&lt;AIController&gt;();
            alien->Name = "Alien" + std::to_string(i);
        }

        // Add HUD UI
        m_engine->AddUIElement&lt;HUD&gt;("HUD");
        m_engine->SelectActiveUI("HUD");

        // Play some background music
        auto music = rm->LoadMusic("assets/audio/AgainstAllOdds.wav", "AgainstAllOdds");
        music->setLooping(true);
        music->setVolume(25.f);
        music->play();
    }

    void Clear() override
    {
        m_renderer->RemoveCamera("camera1");
    }
};
</code>
</pre>
</div>`;

ShakEngine.link = "https://github.com/Teo7297/ShakEngine";

ShakEngine.tech_stack = [
    "C++",
    "CMake",
    "GLSL",
    "Visual Studio",
    "GIT",
    "SFML",
    "OpenGL",
    "Dear ImGui"
];

ShakEngine.video = ["https://youtube.com/embed/L-5xh_M2vTc"]

ShakEngine.contributors = ["Cavagnino Matteo"];

////////////////////////////////////////////////////////////////////////


let Zombie = Object.assign({}, project);

Zombie.title = "Zombie++";

Zombie.description = "This is a simple 3D First Person Shooter heavily inspired to the classic Call of Duty: Zombies franchise, with all the main features and some added tweaks for a more fun and smooth gameplay. This project is bigger than it seems, with many integrated gameplay features, such as multiple perks, modular weapon system, modular stats for both the player and the zombies, subdivision between match logic, gamemode and gameworld settings; this and much more! Please feel free to give it a quick try on itch.io. Note: I'm not an artist nor I have interest in producing an artistic result, my objective was to learn how features are implemented in this kind of games and I implemented them always keeping an eye on performance and reliability.";

Zombie.link = "https://realishak.itch.io/zombiepp";

Zombie.video = ["gifs/Shock.gif", "https://youtube.com/embed/3-PnnXMjHvE"];

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

let openGL = Object.assign({}, project);

openGL.title = "OpenGL Learning Project";

openGL.description = "This project is the result of a learning path that included a few publicly available courses and books with the goal of learning the basics of computer graphics and OpenGL. I applied many core concepts of computer graphics like vertices, vertex buffers, index buffers, vertex arrays, shaders, materials, textures, MVP matrices and batch rendering. Overtime more features like 3D rendering, illumination, collisions and more will be added to the project. This project mainly contains basics about the above topics and is under current active development.";

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

///////////////////////////////////////////////////////////////////////////

let marsMarines = Object.assign({}, project);

marsMarines.title = "Mars Marines";

marsMarines.link = "";

marsMarines.description = "Mars Marines is a top down action shooter involving guns, power-ups and, most importantly, aliens! This project has been developed using Unreal Engine 5 and allowed me to learn many concepts and features of such engine.";

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
    "ShakEngine": ShakEngine,
    "Zombie": Zombie,
    "marsMarines": marsMarines,
    "openGL": openGL,
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
acteon.position = "Advanced Algorithms R&D Engineer - Full Time";
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
javascript.level = 40;
let css = Object.assign({}, skill);
css.name = "CSS";
css.level = 30;
let html = Object.assign({}, skill);
html.name = "HTML5";
html.level = 40;
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
let git = Object.assign({}, skill);
git.name = "GIT";
git.level = 75;
let linux = Object.assign({}, skill);
linux.name = "LINUX";
linux.level = 50;
let unreal = Object.assign({}, skill);
unreal.name = "Unreal Engine";
unreal.level = 30;

let skills = [java, python, javascript, html, css, csharp, unity, c, cpp, opengl, cmake, git, linux, unreal];

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
thesis.description = "This is my research and development master degree thesis developed at Universita' degli Studi di Milano. The thesis work is about security certifications in highly dynamic architectures such as Cloud and IoT systems. The work is written in English and compiled with LaTeX."
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

//jams

let jam = {
    "name": "",
    "description": "",
    "ranking": "",
    "duration": "",
    "title": "",
    "link": "",
    "tech": "",
    "contributors": [],
    // "video": ""
};

let adsAtWar = Object.assign({}, jam);
adsAtWar.name = "Mini Jame Gam #40";
adsAtWar.description = "This is a mini game jam project developed in 72 hours. The theme was 'Annoying Ads' and it was required to add a special object in the game, which was 'turret'. The game is a 2D incremental shooter where the player, represented by an upgradable car that moves automatically, has to click and shoot down road ads signs. The game is developed in C++ using my game engine \"ShakEngine\".";
adsAtWar.ranking = "Out of 116 entries, I obtained 15th place in the overall category and 8th place in the gameplay and fun categories.";
adsAtWar.title = "Ads At War";
adsAtWar.duration = "72 hours";
adsAtWar.link = '<iframe frameborder="0" src="https://itch.io/embed/3385064" width="552" height="167"><a href="https://realishak.itch.io/ads-at-war">Ads at War by Realishak</a></iframe>';
adsAtWar.tech = "C++, ShakEngine, Aseprite (art), Audacity (audio)";
adsAtWar.contributors = ["Cavagnino Matteo"];
// atsAtWar.video = "https://youtube.com/embed/";


let jams = [adsAtWar,];


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
    document.getElementById("proj-desc").innerHTML = p.description;

    p.contributors.forEach(element => {
        document.getElementById("proj-contributors").innerHTML += '<div>' + element + '</div>';
    });
}

function resetProjectSection() {
    document.getElementById("proj-title").innerText = "";
    document.getElementById("proj-link").href = "";
    document.getElementById("proj-link").innerText = "";
    document.getElementById("proj-tech").innerHTML = "";
    document.getElementById("proj-desc").innerHTML = "";
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
                cont.innerHTML += "</br></br><h4 style='text-align: center; max-width: 60vw'>" + rsc.description + "</h4>";
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
        case "jams-Button":
            current_page = document.getElementById("jampage");
            cont = document.getElementById("jamcontainer");
            cont.innerHTML = "";
            jams.forEach(jam => {
                // build html contant that shows all jam data
                cont.innerHTML += "<h2 style='text-align: center; max-width: 70vw''>" + jam.name + "</h2>";
                cont.innerHTML += "<h4 style='text-align: center; max-width: 60vw'>" + jam.title + "</h4>";
                cont.innerHTML += "</br></br><h4 style='text-align: center; max-width: 60vw'>" + jam.description + "</h4>";
                cont.innerHTML += "</br></br><h2>Ranking</h2><div style='text-align: center;'>" + jam.ranking + "</div>";
                cont.innerHTML += "</br></br><h2>Duration</h2><div style='text-align: center;'>" + jam.duration + "</div>";
                cont.innerHTML += "</br></br><h2>Link</h2><a id='proj-link' href='" + jam.link + "' style='text-align: center;'>" + jam.link + "</a>";
                cont.innerHTML += "</br></br><h2>Technology used</h2><div style='text-align: center;'>" + jam.tech + "</div>";
                cont.innerHTML += "</br></br><h2>Contributors</h2><div style='text-align: center;'>" + jam.contributors + "</div>";
                cont.innerHTML += '</br></div><div><hr class="thin"></div></br>';
            });
            break;


    }

    current_page.style.display = "flex";

}