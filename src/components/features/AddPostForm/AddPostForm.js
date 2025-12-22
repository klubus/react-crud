import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [mainComment, setMainComment] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, author, published, shortDesc, mainComment }));
    setTitle('');
    setAuthor('');
    setPublished('');
    setShortDesc('');
    setMainComment('');
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          value={author}
          placeholder="Enter author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPublished">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="text"
          value={published}
          placeholder="Enter date"
          onChange={(e) => setPublished(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Leave a comment here"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMainComment">
        <Form.Label>Main comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Leave a comment here"
          value={mainComment}
          onChange={(e) => setMainComment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default AddPostForm;
