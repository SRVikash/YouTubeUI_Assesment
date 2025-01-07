const menuItems = [
    { name: "Home", link: "src/pages/home.html", icon: "assets/icons/home.png" },
    { name: "Shorts", link: "src/pages/shorts", icon: "assets/icons/shorts.png" },
    { name: "Subscriptions", link: "src/pages/subscriptions", icon: "assets/icons/subscriptions.png" },
    { name: "Library", link: "src/pages/library", icon: "assets/icons/library.png" },
    { name: "History", link: "src/pages/history", icon: "assets/icons/history.png" }
];

const sidebar_container = document.getElementById("sidebar-container");

menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.innerHTML = `
    <a id="menu-item" class="sidebar-menu-item" href="${item.link}">
        <img style="height: 22px; width: 20px;" src="${item.icon}" alt="${item.name}" />
        <span class="sidebar-menu-text">${item.name}</span>
    </a>
    `;
    sidebar_container.appendChild(menuItem);
});


const titles = ["Purr-fectly Entertaining (Cat Adventures)",
    "Soft but Mighty (The Cotton Chronicles)",
    "Brewing Up Drama (Coffee Escapades)",
    "Underwater Gossip (Fish Library Tales)",
    "Humble Abode: Home of Hilarity",
    "Bone-tickling Laughs (Skeleton Shenanigans)"];

const imgPaths = [
    "assets/video_images/cat.jpg",
    "assets/video_images/cotton.jpg",
    "assets/video_images/coffee.jpg",
    "assets/video_images/fish.jpg",
    "assets/video_images/home.jpg",
    "assets/video_images/skeleton.jpg"
];

const videoItems = Array.from({ length: 20 }, (item, index) => ({
    title: titles[index % titles.length],
    img_src: imgPaths[index % imgPaths.length],
    channel_name: "Mr Beast",
    views: "10K",
    time: "1",
}));

const video_container = document.getElementById("video-container");

videoItems.forEach((item) => {
    const videoItems = document.createElement("div");
    videoItems.style.flexDirection = "column";
    videoItems.style.margin = "10px";
    videoItems.style.width = "26rem";
    videoItems.style.cursor = "pointer";
    videoItems.className = "video-item";
    videoItems.setAttribute("role", "video");
    videoItems.setAttribute("aria-label", item.title);

    videoItems.innerHTML = `
    <div tabindex="0" style="border-radius: 8px; padding: 10px; width: 100%;">
        <div style="position: relative; width: 100%;">
            <img 
                class="video-thumbnail" 
                src="${item.img_src}" 
                alt="${item.title}" 
                role="img" 
                aria-label="${item.title}" 
            />
        </div>
        <div 
            style="display: flex; align-items: flex-start; margin-top: 10px;" 
            role="group" 
            aria-label="Video details"
        >
            <img 
                class="channel-round-icon" 
                src="${item.img_src}" 
                alt="Channel Icon" 
                role="img" 
                aria-label="Channel Icon"
            />
            <div style="flex: 1;">
                <span class="bold-title" role="heading" aria-level="3">${item.title}</span>
                <span class="channel-details">${item.channel_name}</span>
                <span class="channel-details">${item.views} Views • ${item.time} year ago</span>
            </div>
        </div>
    </div>
    `;
    video_container.appendChild(videoItems);
});

function logSearchValue() {
    const searchInput = document.getElementById('search').value;
    console.log(`Search value : ${searchInput}`);
}

function toggleShowSearch() {
    const search = document.getElementsByClassName('search-view')[0];
    if (search.style.display === '') {
        search.style.display = 'flex';
        search.style.width = '70%';
        search.style.height = '35px';
    }
    else {
        search.style.display = '';
    }

    const elements = document.querySelectorAll('#logo-cont, #profile-cont ,#noti-cont, #cross-icon,#search-action-cont');

    elements.forEach(element => {
        if (element.style.display === '') {
            element.style.display = 'none';
        }
        else {
            element.style.display = '';
        }
    });

    const backIcon = document.getElementById('back-icon');
    if (backIcon.style.display === '') {
        backIcon.style.display = 'flex';
        backIcon.style.justifyContent = 'center';
        backIcon.style.alignItems = 'center';
        backIcon.style.cursor = 'pointer';
    }
    else {
        backIcon.style.display = '';
    }
}

// Need to refactor this code to make it more readable and maintainable.
// due to time constraints, I am unable to refactor the code.

function toggleMenu() {
    const sidebar = document.getElementById('sidebar-container');
    const sideBarMenuItems = document.querySelectorAll('.sidebar-menu-item');
    const sideBarMenuItemsText = document.querySelectorAll('.sidebar-menu-text');
    if (sidebar.style.display === '') {
        sidebar.style.display = 'flex';
        sidebar.style.position = 'fixed';
        sidebar.style.justifyContent = 'center';
        sidebar.style.alignItems = 'center';
        sidebar.style.flexDirection = 'column';
        sidebar.style.width = '100%';
        sidebar.style.height = '100%';
        sidebar.style.top = '0';
        sidebar.style.left = '0';
        sidebar.style.backgroundColor = '#0f0f0f';
        sidebar.style.zIndex = '9999';
        sideBarMenuItems.forEach((item) => {
            item.style.flexDirection = 'row';
        });
        sideBarMenuItemsText.forEach((item) => {
            item.style.marginTop = "0";
            item.style.marginLeft = "10px";
        });
    }
    else {
        sidebar.style.display = '';
    }
}

closeMenu = () => {
    const sidebar = document.getElementById('sidebar-container');
    console.log(sidebar.style.display);
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = '';
    }
    else {
        sidebar.style.display = 'flex';
    }
}