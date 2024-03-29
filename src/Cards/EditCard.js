import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import CardForm from "./CardForm";

export default function EditCard({ selectedDeck }) {
  const { params } = useRouteMatch();
  var { deckId, cardId } = params;

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
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      <CardForm />
    </div>
  );
}
