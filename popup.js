// popup.js

document.getElementById("save").addEventListener("click", async () => {
  const sessionName = document.getElementById("sessionName").value;
  if (sessionName) {
    await browser.runtime.sendMessage({ action: "saveSession", sessionName });
    document.getElementById("sessionName").value = "";
    loadSessions();
  }
});

async function loadSessions() {
  const sessions = await browser.storage.local.get("sessions");
  const sessionList = document.getElementById("sessionList");
  sessionList.innerHTML = "";

  if (sessions.sessions) {
    for (const [name, tabs] of Object.entries(sessions.sessions)) {
      const listItem = document.createElement("li");

      const listItemContainer = document.createElement("div");
      listItemContainer.classList.add("list-item-container");

      const text = document.createElement("p");
      text.textContent = name;
      text.classList.add("list-item-text");

      const container = document.createElement("div");
      container.classList.add("list-item-buttons-container");

      const textContainer = document.createElement("div");
      textContainer.classList.add("list-item-text-container");

      const restoreButton = document.createElement("button");
      restoreButton.classList.add("button-2");
      restoreButton.textContent = "Restore";
      restoreButton.addEventListener("click", () => {
        browser.runtime.sendMessage({
          action: "restoreSession",
          sessionName: name,
        });
      });

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("button-2");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", async () => {
        await browser.runtime.sendMessage({
          action: "deleteSession",
          sessionName: name,
        });
        loadSessions();
      });

      container.appendChild(restoreButton);
      container.appendChild(deleteButton);
      textContainer.appendChild(text);

      listItemContainer.appendChild(textContainer);
      listItemContainer.appendChild(container);

      listItem.appendChild(listItemContainer);

      sessionList.appendChild(listItem);
    }
  }
}

// Load sessions when the popup opens
loadSessions();
