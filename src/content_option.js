const logotext = "PRJIN";   /*หัวลิ้ง*/
const meta = {
    title: "Prae",      /*ชื่อ Tab บน google*/
    description: "Web dev",
};

// ส่วนหน้า home //
const introdata = {
    title: "Recommended cafes in Kanchanaburi",
    animated: {
        first: "Personal preference",
        second: "It depends on your preference",
        third: "Kanchanaburi cafe only",
    },
    description: "This website is created to develop coding with Reactjs.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

// ส่วน About me //
const dataforme = {
    title: "Dinner and take photos often",
    formeonly: "One Tea Coffee and BaanBam Cafe & Bistro",
};

const worktimeline = [{
        jobtitle: "One Tea Coffee",
        where: "Mueang Kanchanaburi District",
        link: "<a href='https://www.facebook.com/profile.php?id=100064075150951&sk=menu'>Menu</a>",
    },
    {
        jobtitle: "BaanBam Cafe & Bistro ",
        where: "Tha Maka District",
        link: "<a href='https://www.facebook.com/baanbamcafe/posts/pfbid0UfzxZMKMvZTsETnNW6yk3C8A5uKKP3fsxQHBsTUxgtvzqf2RTD9hsm9ezJEQ6Ubdl'>Menu</a>",
    },
    {
        jobtitle: "Mana Manee Cafe | Amphoe Tha Muang",
        where: "Nong Khao,Tha Muang ",
        link:  "<a href=' https://www.facebook.com/ManaManee999/menu/?id=100075806215067&sk=menu'>Menu</a>",
       
    },
];

const skills = [{
        name: "CHAN nature cafe'",
        value: 90,
    },
    {
        name: "Kan Machi Cafe ",
        value: 95,
    },
    {
        name: "Boonsom | Amphoe Tha Muang",
        value: 92,
    },
    {
        name: "The Village Farm To Cafe' ",
        value: 90,
    },
    {
        name: "The KeeRee Cafe'",
        value: 85,
    },
];

const services = [{
    title: "Mulberry Mellow",
        description: "Very wide area and Covered with large 'Chamchuri trees' and surrounded by the Kwai Noi River.",
    },
 
    {
        title: "Meena Cafe",
        description: "Situated in Tha Muang District, the highlight of this place is the unique seating arrangements and the picturesque walkway that meanders down into the lush green rice fields. As you capture moments with your camera, you'll be immersed in a vibrant green atmosphere.",
    },
    {
        title: "Kan Machi Café",
        description: "The highlight of the cafe is the torii gate. A red Japanese-style arch at the entrance to the shop and a Japanese-style Zen garden with a small bridge, waterfall, and koi pond.",
    },
];

// ส่วน Port //
const datasuggest = [{
        img: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/122138158_2414248458883208_2864130221129058003_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFPyK3YwnkCHI4lJGtpuHdjYuMpafo4akBi4ylp-jhqQIOmi9ol1PAGo4jK_8PKtovDmSQut_qbrqGo0pdpoG2K&_nc_ohc=k3o9h27sKagAX-b6gIa&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfDk4l7zWquL3se8ZwG_E0VPTZNpRMuCn43HE8DDdisiFg&oe=6596F8A6",
        description: "💜 BaanBam Cafe & Bistro    🌷 Open: 9:00 AM - 8:00 PM (Closed every Tuesday)",
        link: "https://www.facebook.com/baanbamcafe?__tn__=-]K*F",
    },
    {
        img: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/122271711_2414248342216553_2977599815776152993_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeE2zfwztjpEiQJ8qtvyFCQDZ73IIz3gbY9nvcgjPeBtj0qWpuYWh74e7dhGu3krquLxT8LhPD_vCudj0JUZtdv2&_nc_ohc=mJKq6H3N3noAX97XtGs&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfDWRZuKRSJb-WDSmMVOcWwJPBifaqZm3XE6Zdjy9O19Dg&oe=6596E3C2",
        description: "💜 Lam Yuan Cafe Kanchanaburi 🌷 Open: 08:00 - 16:00 (Closed on Mondays)",
        link: "https://www.facebook.com/lumyuankanchanaburi?__tn__=-]K*F",
    },
    {
        img: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/297819505_2862099330764783_4215692082409826817_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFc6ZE6M511sj391twHbH12c5_DZWAg5q9zn8NlYCDmryuDF86ZDQwiQs1oPLunNY6jQrLcroedRlFKoZrXYF-s&_nc_ohc=E3QXzHwMGKMAX9IXe4y&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfCrwFp_bcPm479GIKjF9conpUyaQp8ZGazPvha7foOi6w&oe=65742031",
        description: "💜 RAVI RIVA CAFE Open: 10:00 a.m. - 8:00 p.m. (Everyday)",
        link: "https://www.facebook.com/ravirivacafekanchanaburi/?locale=th_TH",
    },
    {
        img: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/7c52e66e9b2742198745a1149f92342e~tplv-tej9nj120t-origin.webp",
        description: "💜 Trio Farm Cafe 🌷 Tuesday - Thursday open 9.00 close 18.00 Friday - Sunday open 8.30 close 18.00 Public holidays open at 8:30 a m., close at 6:00 p.m. ❌ Closed every Monday (except Mondays that fall on public holidays)",
        link: "https://www.facebook.com/triofarmcafe?__cft__[0]=AZV7mJjhH9Z2-euOij_E7EhEHWbd0olB3WDSLvBkA0hQ1fzPA5hkqLUrr6ZoVU2AgUxmAUNgH_kAS4rrwdl9a3lLmTfcYObZPiPXESQVf7lvTzswF-kg1c_IJjfO4IQPWm_6qPAo7f4TIlEhHKox2XYS&__tn__=-]C%2CP-R",
    },
    {
        img: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/294561284_1294174934690959_2930933361557329322_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGkzfER4WthMCX14tVqxv03DLZtBpW8efUMtm0Glbx59ZFHXF-d3L_GPP4sI8Y0nH9fGc2_Wms1mBmRGTUeA8bC&_nc_ohc=7uIO3vAXS-gAX_itCzg&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfBENVhSTiNLui_em43yzEcR1ycKed_N_fs5u-dEdHknWw&oe=65756118",
        description: "💜 Kan Machi Cafe🌷 Mon-Fri open 10:00 a.m. - 6:00 p.m.🌷Sat-Sun open 10:00 AM - 7:00 PM.❌Cafe is closed every Wednesday. (Except Wednesday which falls on a public holiday)",
        link: "https://www.facebook.com/kanmachicafe?__cft__[0]=AZWkEc_TxOvwEN3I6VDlCtvfT7AoWJRswkq_ZlZOzBlFxS7HGw4Li0TMlXx54cU95rm33U2DmSqdiFCnD9ujld0H2VkMMCLTW5b64ON9y0MI1iIcxmf_GmLsRmbEvTffOQrQTFGS94iirh-lz_Aij8cu&__tn__=-]C%2CP-R",
    },
    {
        img: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/6f6a5c826b8a479089d5ea19ae078c41~tplv-tej9nj120t-origin.webp",
        description: "💜 The Village Farm To Cafe' 🌷 Mon - Fri : 9:00 AM - 9:00 PM.🌷 Sat,Sun,Public Holiday : 8:00 AM - 9:00 PM.",
        link: "https://www.facebook.com/TheVillageFarmToCafe/?locale=th_TH",
    },

    {
        img: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/fb83afe655e04208acb0a8889c3c313d~tplv-tej9nj120t-origin.webp",
        description: "💜 Mulberry Mellow 🌷 Open every day 8:00 a.m. - 6:00 p.m.",
        link: "https://www.facebook.com/mulberrymellow/",
    },
    {
        img: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/273791465_2739753639666020_294304030894712578_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeELv8qBW532uuU9ajqo48yhayoBasMtpnVrKgFqwy2mdTA_BPVkSQ30rGaKvwE4-59tdJ5IWgURYs8oHpI0Sra6&_nc_ohc=3v1KyIvMcvkAX8nTpMB&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfBel0nbiunQcFUDWHgGy8z92YmJsVhoiMa3_feIXfOA4w&oe=6573F73B",
        description: "💜 The KeeRee Cafe'🌷 Weekdays open 10.00 a.m.-19.00 p.m.Saturday, Sunday and public holidays open 9:00 a.m. - 7:00 p.m.",
        link: "https://www.facebook.com/thekeeree/",
    },
    {
        img: "https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/oUkbJkoDh9KeEfdCNAQEAgBx6HAmCSzE9IItt5~tplv-sdweummd6v-shrink:640:0:q50.webp?source=seo_middle_feed_list&x-expires=1729900800&x-signature=PYieEfRtbXEDzjMrGinXulKfOR4%3D",
        description: "💜 linlin.café 🌷Open 9:00 AM - 5:00 PM (Closed every Tuesday)",
        link: "https://www.facebook.com/linlinKanchanaburi/",
    },
    {
        img: "https://img.salehere.co.th/p/1200x0/2022/07/02/d8pq6ruhplxl.jpg",
        description: "💜 Rainforest Café 🌷 Open Daily: 09:00 AM - 8:00 PM.",
        link: "https://www.facebook.com/rainforestcafekanchanaburi",
    },
    {
        img: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/363433582_749753777155381_294470007223197220_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHgDJf3h2laVFJsEryEEOPZRNSDw37rEeZE1IPDfusR5m9AH56ynsQpQKRoyxJEUk7jbMd1n64DTVIjlkZKfg5z&_nc_ohc=E8QmmjRDAVYAX9Vbhnk&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfDOENK2-67cdDCgXSPT2dTgB5jNlKEzkAJkMgb7K4gA3Q&oe=65750EAC",
        description: "💜 Thanya cafe🌷 𝖮𝗉𝖾𝗇 𝟢𝟫.𝟢𝟢 am-𝟣𝟫.𝟢𝟢 pm (Closed on Wednesday)",
        link: "https://www.facebook.com/thanyacafe/",
    },
    {
        img: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/83eb47b237814f3d9949e9869c1aa3e9~tplv-tej9nj120t-origin.webp",
        description: "💜 gloi cafe 🌷TUE - SUN 09.30 am - 17.30 pm (MON-CLOSED)",
        link: "https://www.facebook.com/gloi.cafe?__cft__[0]=AZVMQHzlanMe9BQUqyQFKr80RXoggnEAqeeiz_Z-z_iauOhUfzHz4r3i5o4HTR_yiE4x5rtwfLUw4BjE35A8XOpMrRRPtvnM9dRSlVhS4LPG6HwcUuiIjHKHaamqEd1upS96MBwMWKukmjjJQH2SNo6R&__tn__=-UC%2CP-R",
    },
];

// ส่วน Contact Me //
const contactConfig = {
    YOUR_EMAIL: "prae_fd@hotmai.com",
    YOUR_FONE: "090-142-44xx",
    description: "If you have any questions or if you want to contact me for anything, you can reach me using the information I provided. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

// ส่วนไอคอน social //
const socialprofils = {
    facebook: "https://www.facebook.com/ElectronicCom.EngineerSilpakorn/",
    instagram: "https://www.instagram.com/ppraejinn/?fbclid=IwAR29dcSn8LDwpcYLhVkK8-aZMfLOhfh-37gcUYUZjNgjM_mcqonP1Rnz-IA",
};
export {
    meta,
    dataforme,
    datasuggest,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};