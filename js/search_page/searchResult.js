//SearchResult model for storage of finded cards


function SearchResult () {
  var cards_hash;

  this.setAllCards = function (cards_array) {
    this.cards_hash = cards_array;
  }

  this.getAllCards = function () {
    return cards_array;
  }
  return this;
}