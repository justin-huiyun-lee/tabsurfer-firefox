// background.js

// Save the current session
async function saveSession(sessionName) {
  const tabs = await browser.tabs.query({});
  const sessionData = tabs.map((tab) => ({
    url: tab.url,
    title: tab.title,
    pinned: tab.pinned,
  }));

  let sessions = await browser.storage.local.get("sessions");
  sessions = sessions.sessions || {};
  sessions[sessionName] = sessionData;

  await browser.storage.local.set({ sessions });
  console.log(
    `Session "${sessionName}" saved with ${sessionData.length} tabs.`,
  );
}

// Restore a saved session
async function restoreSession(sessionName) {
  const sessions = await browser.storage.local.get("sessions");
  const sessionData = sessions.sessions[sessionName];

  if (sessionData) {
    for (const tab of sessionData) {
      await browser.tabs.create({ url: tab.url, pinned: tab.pinned });
    }
    console.log(`Session "${sessionName}" restored.`);
  } else {
    console.log(`No session found with name "${sessionName}".`);
  }
}

// Remove a session
async function deleteSession(sessionName) {
  let sessions = await browser.storage.local.get("sessions");
  sessions = sessions.sessions || {};
  delete sessions[sessionName];
  await browser.storage.local.set({ sessions });
  console.log(`Session "${sessionName}" deleted.`);
}

// Handle messages from the popup
browser.runtime.onMessage.addListener(async (message) => {
  if (message.action === "saveSession") {
    await saveSession(message.sessionName);
  } else if (message.action === "restoreSession") {
    await restoreSession(message.sessionName);
  } else if (message.action === "deleteSession") {
    await deleteSession(message.sessionName);
  }
});
