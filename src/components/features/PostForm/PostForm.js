import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');
  const [contentError, setContentError] = useState();
  const [dateError, setDateError] = useState();

  const isEmpty = content.replace(/<(.|\n)*?>/g, '').trim() === '';
  const categories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(isEmpty);
    setDateError(!publishedDate);

    if (!isEmpty && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
    }
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 3 })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            Title is too short (min is 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 3 })}
          type="text"
          value={author}
          placeholder="Enter author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && (
          <small className="d-block form-text text-danger mt-2">
            Author is too short (min is 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPublished">
        <Form.Label>Published</Form.Label>
        <br></br>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
        />
        {dateError && (
          <small className="d-block form-text text-danger mt-2">
            Published date can't be empty
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          as="textarea"
          rows={3}
          placeholder="Leave a comment here"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            Short description is too short (min is 20){' '}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMainComment">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};
export default PostForm;
