document.addEventListener('DOMContentLoaded', function() {
    function setImageHeight() {
        const panel = document.querySelector('.panel.color5-alt');

        // Check if the panel element exists before proceeding
        if (panel) {
            const image = panel.querySelector('img');

            // Check if the image element exists before proceeding
            if (image) {
                const panelHeight = panel.offsetHeight;
                image.style.height = panelHeight + 'px';
            } else {
                console.error("Image element not found within the panel.");
            }
        } else {
            console.error("Panel element not found.");
        }
    }

    setImageHeight();
    window.addEventListener('resize', setImageHeight);
});
