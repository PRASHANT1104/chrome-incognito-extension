chrome.commands.onCommand.addListener(function(command) {
    if (command == "toggle-feature-foo"){
    console.log('Command:', command);
    chrome.windows.getAll({populate: false, windowTypes: ['normal']}, function(windows) {
        console.log(windows);
        for (let w of windows) {
            if (w.incognito) {
                // Use this window.
                chrome.tabs.create({windowId: w.id});
                chrome.windows.update(w.id,{"focused":true})
                return;
            }
        }
    
        // No incognito window found, open a new one.
        chrome.windows.create({incognito: true});
    });
  }});
