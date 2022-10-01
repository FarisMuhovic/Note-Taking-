// === SIGN UP FORM === ///
const usernameInput = document.getElementById("usernameinput");
const confirmUsernameBtn = document.getElementById("usernamebtn");
const userNametext = document.getElementById("username");
userNametext.innerText = "Hello, " + localStorage.getItem("name");
confirmUsernameBtn.addEventListener("click", function () {
  const usernameid = document.getElementById("nameinput").value;
  localStorage.setItem("name", usernameid);
  userNametext.innerText = "Hello, " + localStorage.getItem("name");
  usernameInput.style.display = "none";
});
const bgCover = document.getElementById("bgcover");
if (localStorage.getItem("name") == null) {
  window.onload = function () {
    userNametext.innerText = "Hello ";
    usernameInput.style.display = "flex";
    bgCover.style.display = "block";
  };
}

/*
const createNoteBtn = document.getElementById("createnotebtn");
const noteCreationBox = document.getElementById("notecreatebox");
const noteCreationBtn = document.getElementById("boxbtnnote");
const exitBtn = document.getElementById("exitboxnote");

createNoteBtn.addEventListener("click", function () {
  noteCreationBox.style.display = "block";
  bgCover.style.display = "block";
  let noteTitle = (document.getElementById("notetitle").value = "");
  let noteDesc = (document.getElementById("notedesc").value = "");
});

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
    }
    notesContainer.innerHTML += `
    <div class="note">
      <p>${noteTitle}</p>
      <p>${noteDesc}</p>
      <div class="footer">
        <p>${dateCreated}</p>
      </div>
    </div>`;
    noteCreationBox.style.display = "none";
    bgCover.style.display = "none";
  }
});
exitBtn.addEventListener("click", () => {
  noteCreationBox.style.display = "none";
  bgCover.style.display = "none";
});
*/
