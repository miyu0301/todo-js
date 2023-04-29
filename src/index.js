import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// delete div from incomplete list
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// add div to in complete list
const createIncompleteList = (text) => {
  // create div
  const div = document.createElement("div");
  div.className = "list-row";

  // create li
  const li = document.createElement("li");
  li.innerText = text;

  // create done button
  const doneButton = document.createElement("button");
  doneButton.innerText = "done";
  doneButton.addEventListener("click", () => {
    // delete div from not done list
    deleteFromIncompleteList(doneButton.parentNode);
    // add div to done list
    const addTarget = doneButton.parentNode;
    // get TODO context
    const text = addTarget.firstElementChild.innerText;
    // initialize div
    addTarget.textContent = null;
    // create li
    const li = document.createElement("li");
    li.innerText = text;
    // create undo buttonc
    const undoButton = document.createElement("button");
    undoButton.innerText = "undo";
    undoButton.addEventListener("click", () => {
      const undoTarget = undoButton.parentNode;
      const text = undoTarget.firstElementChild.innerText;
      undoTarget.textContent = null;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(undoButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // delete div from not done list
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // set elements after div
  div.appendChild(li);
  div.appendChild(doneButton);
  div.appendChild(deleteButton);

  // add not done list
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
