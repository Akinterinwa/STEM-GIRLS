export const links = [
    {
        name: 'ABOUT', 
        submenu: true, 
        sublinks: [
            {
                Head: 'What We Do',
                sublink: [
                    { name: 'Our Mission', link: "/mission" },
                    { name: 'Our Approach', link: "/about" },
                    { name: 'Our Team', link: "/" },
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
                { name: 'Upcoming Inspire STEM Girls Events', link: "/" },
                { name: 'Map Of Current Locations', link: "/" },
                { name: 'Start A New Inspire STEM Girls', link: "/" },
            ]
        },
    ] },
    { name: 'CONNECT',
    submenu: true, 
    sublinks: [
        {
            Head: 'Topwaer',
            sublink: [
                { name: 'Volunteer', link: "/" },
                { name: 'Sponsors And Partners', link: "/" },
                { name: 'Contact Us', link: "/" },
            ]
        },
    ] },
]