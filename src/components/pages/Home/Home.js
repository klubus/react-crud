import { getAllPosts } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="m-4">All posts</h2>
        <Button as={Link} to={`/post/add`} variant="outline-info">
          Add post
        </Button>
      </div>
      <Container>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>

                  <Card.Text as="div">
                    <p className="mb-1">
                      <strong>Author:</strong> {post.author}
                    </p>
                    <p className="mb-2">
                      <strong>Published:</strong> {post.publishedDate}
                    </p>
                    <p className="text-muted">{post.shortDescription}</p>
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="bg-white border-0">
                  <Button as={Link} to={`/post/${post.id}`} variant="primary">
                    Read more
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
