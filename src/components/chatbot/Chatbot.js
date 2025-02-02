import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    // Add the script dynamically
    const script = document.createElement("script");
    script.id = "messenger-widget-b";
    script.src = "https://cdn.botpenguin.com/website-bot.js";
    script.defer = true;
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.getElementById("messenger-widget-b")?.remove();
    };
  }, []);

  return (
    <script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>67674415b57ceddd2b27ef9c,67672a9c29c567839c9452c9</script>
  );
}

export default Chatbot;
