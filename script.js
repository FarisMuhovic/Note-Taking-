const bgCover = document.getElementById("bgcover");
// === SIMPLE SIGN UP FORM === //
const usernameInput = document.getElementById("usernameinput");
const confirmUsernameBtn = document.getElementById("usernamebtn");
const userNametext = document.getElementById("username");
userNametext.innerText = "Hello, " + localStorage.getItem("name");
confirmUsernameBtn.addEventListener("click", function () {
  const usernameid = document.getElementById("nameinput").value;
  localStorage.setItem("name", usernameid);
  userNametext.innerText = "Hello, " + localStorage.getItem("name");
  usernameInput.style.display = "none";
  bgCover.style.display = "none";
});
if (localStorage.getItem("name") == null) {
  window.onload = function () {
    userNametext.innerText = "Hello ";
    usernameInput.style.display = "flex";
    bgCover.style.display = "block";
  };
}

// === NAVIGATION ADD NEW NOTE BUTTON === //
const createNoteBtn = document.getElementById("createnotebtn");
const noteCreationBox = document.getElementById("notecreatebox");
const noteCreationBtn = document.getElementById("boxbtnnote");

createNoteBtn.addEventListener("click", function () {
  noteCreationBox.style.display = "grid";
  bgCover.style.display = "block";
  let noteTitle = (document.getElementById("notetitle").value = "");
  let noteDesc = (document.getElementById("notedesc").value = "");
  // === EXIT NOTE CREATION BUTTON === //
  const exitBtn = document.getElementById("exitboxnote");
  exitBtn.addEventListener("click", () => {
    noteCreationBox.style.display = "none";
    bgCover.style.display = "none";
  });
});
// === NOTE CREATE FUNCTIONALITY === //
const notesContainer = document.getElementById("notesbox");
noteCreationBtn.addEventListener("click", function () {
  let noteTitle = document.getElementById("notetitle").value;
  let noteDesc = document.getElementById("notedesc").value;
  let dateCreated = new Date();
  if (noteDesc == "") {
    window.alert("Please enter description");
  } else {
    if (noteTitle == "") {
      noteTitle = "No Title";
    } else {
      notesContainer.innerHTML += `
    <div class="note">
      <p class="title">${noteTitle}</p>
      <p class="desc">${noteDesc}</p>
        <p class="date">${dateCreated.toLocaleString("en-GB")}</p>
        <button id="delbtn">DELETE</button>
    </div>`;
      noteCreationBox.style.display = "none";
      bgCover.style.display = "none";
    }
    // === DELETE A NOTE === //
    const delBtn = document.querySelectorAll(".note #delbtn");
    delBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });
    });

    /*
    // === EDIT A NOTE === //
    // same like add a new note but with exisiting values inside it ??? //
    // when i click the edit btn - open a window that edits me values //
    const editBtn = document.querySelectorAll(".note #editbtn");
    const noteEditBox = document.getElementById("noteditbox");
    console.log(editBtn);
    editBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        noteEditBox.style.display = "block";
        bgCover.style.display = "block";
        let noteTitle = document.getElementById("notetitle").value;
        let noteDesc = document.getElementById("notedesc").value;
        document.getElementById("notetitleedit").value = noteTitle;

        console.log(noteTitle);
      });
    });
    */
  }
});
