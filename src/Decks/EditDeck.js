import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";

export default function EditDeck({ selectedDeck, setSelectedDeck }) {
  const history = useHistory();
  let { params } = useRouteMatch();
  var { deckId } = params;

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{selectedDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <DeckForm handleCancel={handleCancel} />
    </div>
  );
}
