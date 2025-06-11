function addCard() {
    // Clone the template card and append it to the container
    var templateCard = document.querySelector('#cardContainer .card');
    var newCard = templateCard.cloneNode(true);
    document.getElementById('cardContainer').appendChild(newCard);

    // Add an event listener to the new card's title for tracking changes
    var editableCardName = newCard.querySelector('.editableCardName');
    editableCardName.addEventListener('input', function () {
      var editedCardName = this.innerText;
      console.log('Edited Card Name:', editedCardName);
    });

    // Clear the contenteditable text of the new card
    editableCardName.innerText = 'Default Card Name';
  }

  function deleteCard(button) {
    // Get the card element and remove it from the container
    var card = button.closest('.card');
    card.remove();
  }