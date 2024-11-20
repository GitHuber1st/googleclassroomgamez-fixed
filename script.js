// You can add interactivity here if you want to track games played, add a counter, etc.
document.addEventListener('DOMContentLoaded', function() {
  // Example: Display a message when a game button is clicked
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Enjoy your game!');
    });
  });
});
