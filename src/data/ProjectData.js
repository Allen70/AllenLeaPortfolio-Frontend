export function ProjectData(){
    const projects = [
        {
            name: "Courageous Conversations",
            description: "A website designed to assist people in having difficult conversation in a productive manner.",
            tech_list: "Vue.js | Socket.io | Node.js | Express.js | Ruby on Rails",
            is_collaborative: true,
            project_links: "https://github.com/Allen70/frontend-courageous-conversations https://github.com/Allen70/Backend-Courageous-Conversations",
        },
        {
            name: "allidays",
            description: "This website is intended to help the curious explore diversity of culture and attitudes around the world with cutting edge research.",
            tech_list: "React | React-Tooltips | react-svg-worldmap |  Ruby on Rails ",
            is_collaborative: false,
            project_links: "https://github.com/kosmos02/nurture-differences-frontend https://github.com/kosmos02/nurture-differences-backend",
        },
        {
            name: "Rotten-Manga",
            description: "This site allows for users and critics to rate manga based on numerous categories and for users to set their preferences so they get sorted results of manga that match their tastes",
            tech_list: "React | Ruby on Rails",
            is_collaborative: true,
            project_links: "https://github.com/Allen70/Rotten-Manga https://github.com/Allen70/backend-rotten-manga",
        },
        {
            name: "Virtual-Arcade",
            description: "This website is for users to move avtars around a virtual arcade and interact with games, and other arcade objects.",
            tech_list: "HTML5,CSS,JavaScript",
            is_collaborative: true,
            project_links: "https://github.com/Allen70/VirtualArcade-Frontend https://github.com/Allen70/VirtualArcade-Backend",
        },
    ]
    return projects
}