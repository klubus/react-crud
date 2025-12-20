import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById, deletePost } from '../../../redux/postsRedux.js';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));
  const [showModal, setShowModal] = useState(false);

  function showDeleteModal() {
    setShowModal(true);
  }

  function hideDeleteModal() {
    setShowModal(false);
  }

  function removePost() {
    dispatch(deletePost(id));
  }
  if (!postData) return <Navigate to="/" />;
  else {
    return (
      <Container className="w-50">
        {showModal && (
          <Modal show={true} onHide={hideDeleteModal}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                This operation will completely remove this post from the app.
                Are you sure you want to do that?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideDeleteModal}>
                Cancel
              </Button>
              <Button variant="danger" onClick={removePost}>
                Remove
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Card className="border-0">
          <Card.Body>
            <Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <h5>{postData.title}</h5>
                <div>
                  <button className="btn btn-outline-info me-2">Edit</button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={showDeleteModal}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Card.Title>

            <Card.Text as="div">
              <p className="mb-1">
                <strong>Author:</strong> {postData.author}
              </p>
              <p className="mb-2">
                <strong>Published:</strong> {postData.publishedDate}
              </p>
              <p className="text-muted">{postData.content}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default SinglePost;
