export const types = {
  BET_ADD_REQUEST: 'BET_ADD_REQUEST',
  BETS_CLEAR_REQUEST: 'BETS_CLEAR_REQUEST',
  COMMUNITY_CARDS_UPDATE_REQUEST: 'COMMUNITY_CARDS_UPDATE_REQUEST',
  DEALER_PLAYER_INDEX_UPDATE_REQUEST: 'DEALER_PLAYER_INDEX_UPDATE_REQUEST',
  DECK_UPDATE_REQUEST: 'DECK_UPDATE_REQUEST',
  IN_TURN_PLAYER_INDEX_UPDATE_REQUEST: 'IN_TURN_PLAYER_INDEX_UPDATE_REQUEST',
  PLAYER_ADD_REQUEST: 'PLAYER_ADD_REQUEST',
  PLAYERS_CLEAR_REQUEST: 'PLAYERS_CLEAR_REQUEST',
  POT_UPDATE_REQUEST: 'POT_UPDATE_REQUEST'
}

export function betAdd(player, chips) {
  return {
    type: types.BET_ADD_REQUEST,
    payload: {
      player,
      chips
    }
  };
}

export function betsClear() {
  return {
    type: types.BETS_CLEAR_REQUEST,
    payload: {}
  }
}

export function communityCardsUpdate(cards) {
  return {
    type: types.COMMUNITY_CARDS_UPDATE_REQUEST,
    payload: {
      cards
    }
  }
};

export function dealerPlayerIndexUpdate(playerIndex) {
  return {
    type: types.DEALER_PLAYER_INDEX_UPDATE_REQUEST,
    payload: {
      playerIndex
    }
  };
}
export function deckUpdate(deck) {
  return {
    type: types.DECK_UPDATE_REQUEST,
    payload: {
      deck
    }
  };
}

export function inTurnPlayerIndexUpdate(playerIndex) {
  return {
    type: types.IN_TURN_PLAYER_INDEX_UPDATE_REQUEST,
    payload: {
      playerIndex
    }
  };
}

export function playerAdd(player) {
  return {
    type: types.PLAYER_ADD_REQUEST,
    payload: {
      player
    }
  };
}

export function playersClear() {
  return {
    type: types.PLAYERS_CLEAR_REQUEST,
    payload: {}
  }
};

export function potUpdate(pot) {
  return {
    type: types.POT_UPDATE_REQUEST,
    payload: {
      pot
    }
  };
}
