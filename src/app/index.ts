const render = async () => {
  const data = await env();
  for (const type in data) {
    const div = document.createElement("div");
    div.textContent = `${type}: ${data[type]}`;
    document.body.appendChild(div);
  }
};

render();
