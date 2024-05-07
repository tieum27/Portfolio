

export const state = () => ({
  repos: [
    {
    name:"Coupe du Monde F.I.N.A 2001",
    description:"Site evenementiel de Natation Course organise par la Federation Francaise de Natation",
    image:"affiche_paris_swc_2001.jpg",
    client:"F.F.N",
    tools:["PHP", "Javascript", "Dreamweaver"],
    dateCompleted:"28/01/2001",
    website:"https://ffn-paris-cup-2001.s3.amazonaws.com/index.html"
  },
    {
    name:"Student Information Management System (PWA) ",
    description:"Build a progressive web-app that manages students and lecturers from a university's department.",
    image:"",
    client:"Collaboration",
    tools:["React", "NodeJS", "MongoDB", "Express"],
    dateCompleted:"Ongoing Collaboration",
    website:""
  },
    {
    name:"Battleship",
    description:"Construit un jeu de battaille naval ",
    image:"battleship.jpg",
    client:"Self",
    tools:["Javascript", "css"],
    dateCompleted:"10/11/2017",
    website:"https://learn-battleship.s3.amazonaws.com/index.html?"
  },
    {
    name:"Intern Management Application",
    description:"",
    image:"",
    client:"Employers",
    tools:["React", "Nodejs", "Sass", "MongoDB", "AD", "LDAP", "Rest-Api"],
    website:"https://itdima.herokuapp.com",
    dateCompleted:"2021-11-15"
  },
    {
    name:"Service Management Portal - Helpdesk",
    description:"An Application built with reactJs and NodeJS for making ICT service request and incident reporting within the company.",
    image:"",
    client:"Employers",
    tools:["React", "Nodejs", "Sass", "MongoDB", "Vitejs", "LDAP", "AD", "Rest-Api"],
    dateCompleted:"2022-08-29",
    website:"Internally Consumed"
  },
],
  projectData: []
});


export const mutations = {
  updateProjectData: (state, data) => {
    state.projectData = data;
  },
  updateRepoData: (state, data) => {
    state.repos = data;
  }
};

export const actions = {
  async getRepos({
    state,
    commit
  }) {
    if (state.repos.length) return;

    try {
      await fetch(process.env.GITHUB_API)
        .then(response => response.json())
        .then(data => {
          commit("updateRepoData", data.filter(d => ["kathalysth", "portfolio-nuxtjs"].map(d => d.toLowerCase()).includes(d.name.toLowerCase())));
        });
    } catch (err) {
      console.log(err);
    }
  }
};
