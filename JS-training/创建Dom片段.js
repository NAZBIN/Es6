`使用DocumentFragment``descibe: 一个轻量版的Document,与Document相比,它的变化不会导致性能问题，它的变化也不会触发DOM树的重新渲染`;

`优点: 1.不会触发DOM重新渲染
       2.轻量版的document，不会导致性能问题
`;

window.onload = () => {
  const fragment = document.createDocumentFragment();
  let Div = document.createElement("div");
  Div.setAttribute("id", "example");
  let P = document.createElement("p");
  P.className = "slogan";
  P.innerHTML = "XXX";
  Div.appendChild(P);
  fragment.appendChild(Div);
  document.body.appendChild(fragment);
};
