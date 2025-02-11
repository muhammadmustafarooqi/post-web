// // Signout
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getAuth,
signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBQ1vpxNtStGxf6vllhApngmUc_wOOi4rw",
authDomain: "post-web-117d8.firebaseapp.com",
projectId: "post-web-117d8",
storageBucket: "post-web-117d8.appspot.com",
messagingSenderId: "339707830",
appId: "1:339707830:web:6fbd5046d77d0474466317",
measurementId: "G-HL3HWZFMR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// alert("dkldsm")

let logoutBtn = document.getElementById("logoutBtn");
// console.log(logoutBtn);
logoutBtn.addEventListener("click", ()=>{
signOut(auth)
.then(() => {
Toastify({
    text: "Logout successfully completed",
    duration: 3000
}).showToast();
window.location.href = "../Login/index.html"
})
.catch((error) => {
Toastify({
    text: "Logout Failed: " + error.message,
    duration: 3000
}).showToast();
});
});





//import { db, collection, addDoc, getDocs, deleteDoc, doc,onAuthStateChanged } from "../firebase.js";

const postContainer = document.getElementById("postContainer");
const addPostBtn = document.getElementById("addPostBtn");

const addPost = async () => {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    
    if (!title || !content) {
        Toastify({ text: "Title and content are required!", duration: 3000 }).showToast();
        return;
    }
    try {
        const user = auth.currentUser;
        if (!user) {
            Toastify({ text: "You must be logged in!", duration: 3000 }).showToast();
            return;
        }

        await addDoc(collection(db, "posts"), {
            title,
            content,
            userId: user.uid,
            createdAt: new Date()
        });

        Toastify({ text: "Post added successfully!", duration: 3000 }).showToast();
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        fetchPosts();
    } catch (error) {
        console.error("Error adding post: ", error);
        Toastify({ text: "Error adding post!", duration: 3000 }).showToast();
    }
};

const fetchPosts = async () => {
    postContainer.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        const post = doc.data();
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Posted on: ${post.createdAt.toDate().toLocaleString()}</small>
            <button class="delete-btn" data-id="${doc.id}">Delete</button>
        `;
        postContainer.appendChild(postElement);
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", deletePost);
    });
};
const deletePost = async (event) => {
    const postId = event.target.getAttribute("data-id");
    try {
        await deleteDoc(doc(db, "posts", postId));
        Toastify({ text: "Post deleted!", duration: 3000 }).showToast();
        fetchPosts();
    } catch (error) {
        console.error("Error deleting post: ", error);
        Toastify({ text: "Error deleting post!", duration: 3000 }).showToast();
    }
};

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../Login/index.html";
    } else {
        fetchPosts();
    }
});

addPostBtn.addEventListener("click", addPost);
