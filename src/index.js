document.addEventListener("DOMContentLoaded", () => {
  const toolList = document.querySelector(".tool-list");

  fetch("data/content.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok"); 
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((tool) => {
        toolList.innerHTML += `
                <li>
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                </li>
            `;
      });
    })
    .catch((error) => console.error("Error:", error));
});
