import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../JS/actions/todo";

function Edit({ task }) {
  const [show, setShow] = useState(false);
  const [newText, setnewText] = useState(task.text);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <input onChange={(e) => setnewText(e.target.value)} value={newText} />
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            onClick={() => {
              dispatch(editTask(task.id, newText));
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
