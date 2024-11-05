// ====== Footer ======
// // Images
import LogoWhite from '/public/images/logo-white.png'
import LogoDefault from '/public/images/logo-default.png'
// // social
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
// import { AiOutlineYoutube } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
// // contact_us
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
// // recent_news
import { FaRegClock } from "react-icons/fa6";

export const data = {
    logo: {
        logo_default: LogoDefault,
        logo_white: LogoWhite
    },

    // Header
    nav_links: [
        {
            id: 1,
            label: 'Home',
            link: '/',
            child: [
                {
                    id: 1,
                    parent_id: 1,
                    label: 'Home 1',
                    link: '/',
                },
                {
                    id: 2,
                    parent_id: 1,
                    label: 'Home 2',
                    link: '/home2',
                },
                {
                    id: 3,
                    parent_id: 1,
                    label: 'Home 3',
                    link: '/home3',
                },
            ]
        },
        {
            id: 2,
            label: 'Pages',
            link: '/',
        },
        {
            id: 3,
            label: 'Elements',
            link: '/',
            child: [
                {
                    id: 1,
                    parent_id: 3,
                    label: 'Pricing Plan',
                    link: '/',
                },
                {
                    id: 2,
                    parent_id: 3,
                    label: 'Partners',
                    link: '/',
                },
            ]
        },
        {
            id: 4,
            label: 'Blog',
            link: '/',
        },
        {
            id: 5,
            label: 'Projects',
            link: '/',
            child: [
                {
                    id: 1,
                    parent_id: 5,
                    label: 'Gallery',
                    link: '/',
                },
                {
                    id: 2,
                    parent_id: 5,
                    label: 'Contact us',
                    link: '/',
                },
                {
                    id: 3,
                    parent_id: 5,
                    label: 'FAQ',
                    link: '/',
                },
                {
                    id: 4,
                    parent_id: 5,
                    label: 'Blog',
                    link: '/',
                },
                {
                    id: 5,
                    parent_id: 5,
                    label: 'Error 404',
                    link: '/',
                },
            ]
        },
        {
            id: 6,
            label: 'Shop',
            link: '/',
            child: [
                {
                    id: 1,
                    parent_id: 6,
                    label: 'Gallery',
                    link: '/',
                },
                {
                    id: 2,
                    parent_id: 6,
                    label: 'Contact us',
                    link: '/',
                },
                {
                    id: 3,
                    parent_id: 6,
                    label: 'FAQ',
                    link: '/',
                },
                {
                    id: 4,
                    parent_id: 6,
                    label: 'Blog',
                    link: '/',
                },
                {
                    id: 5,
                    parent_id: 6,
                    label: 'Error 404',
                    link: '/',
                },
            ]
        }
    ],

    // Footer


    recent_news: [
        {
            title: 'Why Should Business Payroll Outsourcing?',
            image: 'blog-image-7',
            icon: FaRegClock,
            date: 'October 8, 2023'
        },
        {
            title: 'Most Employees Support Measures',
            image: 'blog-image-8',
            icon: FaRegClock,
            date: 'October 8, 2023'
        },
        {
            title: 'How to Handle Employee',
            image: 'blog-image-9',
            icon: FaRegClock,
            date: 'October 8, 2023'
        },
    ],

    social: [
        {
            platform: 'LinkedIn',
            icon: FaLinkedinIn,
            link: 'https://www.linkedin.com/',
            color: '#0a66c2',
        },
        {
            platform: 'Instagram',
            icon: FaInstagram,
            link: 'https://www.instagram.com/',
            color: 'linear-gradient(45deg, #FF7A00, #FF0169, #D300C5)', // Using a gradient
        },
        {
            platform: 'X Corp.',
            icon: FaXTwitter,
            link: 'https://x.com/',
            color: '#000',
        },
        {
            platform: 'YouTube',
            icon: FaYoutube,
            link: 'https://www.youtube.com/',
            color: '#FF0000',
        },
        {
            platform: 'Facebook',
            icon: FaFacebookF,
            link: 'https://www.facebook.com/',
            color: '#0866ff',
        },
    ],

    contact_us: [
        {
            platform: 'mobile',
            icon: BsTelephone,
            label: '+6221.2002.2012',
            url: 'https://wa.me/+622120022012'
        },
        {
            platform: 'mail',
            icon: MdMailOutline,
            label: 'support@example.com',
            url: 'mailto:support@example.com'
        },
        {
            platform: 'location',
            icon: IoLocationOutline,
            label: 'Jl Cempaka, Wangi, No.22 Jakarta - Indonesia',
            url: '/'
        },
    ],

    quick_links1: [
        {
            name: 'Infrastructure',
            url: ''
        },
        {
            name: 'Client Support',
            url: ''
        },
        {
            name: 'Privacy Policy',
            url: ''
        },
        {
            name: 'Terms of Use',
            url: ''
        },
        {
            name: 'Professionals',
            url: ''
        },
        {
            name: 'Careers',
            url: ''
        },
        {
            name: 'Site Map',
            url: ''
        }
    ],

    quick_links2: [
        {
            name: "How it's Work",
            url: ''
        },
        {
            name: 'Testimonials',
            url: ''
        },
        {
            name: 'HR Solutions',
            url: ''
        },
        {
            name: 'Case Studies',
            url: ''
        },
        {
            name: 'Partners',
            url: ''
        },
        {
            name: 'Key Areas',
            url: ''
        },
        {
            name: 'Pricing',
            url: ''
        }
    ]

}