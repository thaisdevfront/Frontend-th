const { db, doc, getDoc, setDoc, updateDoc, increment, onSnapshot } = window.firebaseDB;

function setupLike(card, projectId) {
  const likeBtn = card.querySelector(".like");
  const countSpan = card.querySelector(".like-count");
  const likeRef = doc(db, "likes", projectId);

  // Atualiza em tempo real
  onSnapshot(likeRef, (docSnap) => {
    if (docSnap.exists()) {
      countSpan.innerText = docSnap.data().count;
    }
  });

  likeBtn.addEventListener("click", async (e) => {
    e.stopPropagation();

    const snap = await getDoc(likeRef);

    if (!snap.exists()) {
      await setDoc(likeRef, { count: 1 });
    } else {
      await updateDoc(likeRef, { count: increment(1) });
    }

    likeBtn.classList.add("active");
  });
}
card.innerHTML = `
  <img src="${project.image}">
  <div class="like">❤️ <span class="like-count">0</span></div>
`;

setupLike(card, project.id);