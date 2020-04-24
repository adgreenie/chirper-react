import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { deleteChirp, getChirpById, updateChirp } from "../services/api-helper";
import Comment from "./Comment";
import { formatDate } from "../services/formatDate";
import CommentForm from "./CommentForm";
import { Button, UncontrolledPopover, PopoverBody } from "reactstrap";


function Chirp({ chirp }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const [deleted, setDeleted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(chirp.numLikes);

  const date = formatDate(chirp.date);

  const comments = chirp.comments.map((comment, i) => {
    return <Comment key={i} id={comment} />;
  });

  const handleLike = () => {
    console.log("Chirp - handleLike - liked", liked);
    if (!liked) {
      chirp.numLikes++;
      setNumLikes(chirp.numLikes);
      setLiked(true);
      updateChirp(chirp._id, chirp);
    }
  };

  const handleDelete = () => {
    console.log("Chirp - handleDelete - deleted", deleted);
    if (!deleted) {
      deleteChirp(chirp._id);
      setDeleted(true);
    }
  };

  return (
    <>
      {!deleted && (
        <>
          <Link id="name" to={`/user/${chirp.username}`}>
            {chirp.username}
          </Link>{" "}
          <span id="date-time">
            | {date[0]}, {date[1]}
          </span>
          <p className="chirp-body">{chirp.body}</p>
          <div className="chirp-button-row">
            <button className="chirp-button" onClick={handleLike}>
              <i className="fas fa-hand-spock"></i>
            </button>{" "}
            {numLikes}
            <button className="chirp-button" id="Popover2" type="button">
              Add Comment
              <UncontrolledPopover
                trigger="legacy"
                placement="top"
                isOpen={popoverOpen}
                target="Popover2"
                toggle={toggle}
              >
                <PopoverBody>
                  <CommentForm />
                </PopoverBody>
              </UncontrolledPopover>
            </button>
            <button className="chirp-button">
              <FaTrash onClick={handleDelete} />
            </button>
          </div>
          <hr />
          <ul className="comment-list">{comments}</ul>
          <hr />
        </>
      )}
    </>
  );
}

export default Chirp;