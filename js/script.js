document.addEventListener('DOMContentLoaded', () => {
  const torch = document.createElement('div');
  torch.classList.add('torch-light');
  document.body.appendChild(torch);

  document.addEventListener('mousemove', e => {
    torch.style.left = `${e.pageX - 100}px`;
    torch.style.top = `${e.pageY - 100}px`;
  });
});
