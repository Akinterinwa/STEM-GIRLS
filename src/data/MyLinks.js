export const links = [
    {
        name: 'ABOUT', 
        submenu: true, 
        sublinks: [
            {
                Head: 'What We Do',
                sublink: [
                    { name: 'Our Mission', link: "/mission" },
                    { name: 'Our Approach', link: "/approach" },
                    { name: 'Our Team', link: "/team" },
                ]
            },
        ]
    },
    { name: 'WORKSHOPS',
    submenu: true, 
    sublinks: [
        {
            Head: 'Topwaer',
            sublink: [
                { name: 'Upcoming Inspire STEM Girls Events', link: "/events" },
                { name: 'Map Of Current Locations', link: "/location" },
                { name: 'Start A New Inspire STEM Girls', link: "/start-new" },
            ]
        },
    ] },
    { name: 'CONNECT',
    submenu: true, 
    sublinks: [
        {
            Head: 'Topwaer',
            sublink: [
                { name: 'Volunteer', link: "/volunteer" },
                { name: 'Sponsors And Partners', link: "/sponsors" },
                { name: 'Contact Us', link: "/contact" },
            ]
        },
    ] },
]