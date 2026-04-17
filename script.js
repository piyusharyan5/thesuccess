
let defaultPosts = [
    {
        title: "Simple Living Tips",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        category: "Lifestyle",
        date: "April 16, 2026"
    },
    {
        title: "Travel the World",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        category: "Travel",
        date: "April 14, 2026"
    },
    {
        title: "Fashion Trends",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        category: "Fashion",
        date: "April 10, 2026"
    }
];


let posts = [...defaultPosts];


function displayPosts() {
    let blog = document.getElementById("blog");
    if (!blog) {
        console.log("❌ .blog section not found");
        return;
    }

    blog.innerHTML = "";

    posts.forEach(post => {
        let card = document.createElement("div");
        card.classList.add("blog-card");

        card.innerHTML = `
    <img src="${post.image}">
    <div class="card-content">
        <p class="category">${post.category}</p>
        <h3>${post.title}</h3>
        <p class="date">${post.date}</p>

        <button onclick="readMore(${index})">Read More</button>
    </div>
`;

        blog.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", displayPosts);

function addPost() {
    let title = document.getElementById("title").value;
    let image = document.getElementById("image").value;
    let category = document.getElementById("category").value;
    let content = document.getElementById("content").value;

    if (!title || !image || !category || !content) {
        alert("Fill all fields");
        return;
    }

    let newPost = {
        title,
        image,
        category,
        date: new Date().toLocaleDateString(),
        content
    };

    posts.push(newPost);

    displayPosts();


    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("category").value = "";
    document.getElementById("content").value = "";
}
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let targetId = this.getAttribute("href");
        let section = document.querySelector(targetId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        function showPopup() {
            document.getElementById("popup").style.display = "flex";
        }

        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }

    });
});

