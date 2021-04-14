import React from "react";

function SavedCards(props) {
  return (
    <>
      <div className="card" key={props.id}>
        <div className="card-image">
          <figure className="image is-50">
            <img src={props.image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <button onClick={() => props.delete(props.id)} class="button is-warning">
                Remove
              </button>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.title}</p>
              <p className="subtitle is-6">{props.author}</p>
            </div>
          </div>

          <div className="content">
            {props.description}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedCards;
