const menu = document.getElementById('menu');

menu.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link || !menu.contains(link)) return;

    e.preventDefault();//prevents browser's default actions. Here default hash navigation jump is prevented

    const current = menu.querySelector('a.active');
    if (current) {
        // classList is a DOM API that lets you add/remove/toggle CSS classes on an element.
      current.classList.remove('active');//removes the CSS class named active from the element referenced by current.
    }
    link.classList.add('active');
});