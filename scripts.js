$(document).ready(function () {
    const $yesBtn = $(".yes-btn");
    const $noBtn = $(".no-btn");
    const $question = $(".question");
    const $gif = $(".gif");
    const $wrapper = $(".wrapper");

    // Change text and gif when the Yes button is clicked
    $yesBtn.on("click", function () {
        $question.html("Being with you is my biggest blessing. I love you.");
        $gif.attr(
            "src",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif"
        );

        // Hide the No button
        $noBtn.hide();
    });

    // Function to randomly move the No button
    function moveNoButton() {
        const wrapperRect = $wrapper[0].getBoundingClientRect();
        const noBtnRect = $noBtn[0].getBoundingClientRect();

        // Calculate max positions to ensure the button stays within the wrapper
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        // Generate random positions within bounds
        const randomX = Math.min(Math.random() * maxX, maxX);
        const randomY = Math.min(Math.random() * maxY, maxY);

        // Apply the random position to the "No" button
        $noBtn.css({
            left: randomX + "px",
            top: randomY + "px",
        });
    }

    // Make the No button move randomly on hover or click
    $noBtn.on("mouseover click", moveNoButton);
});
