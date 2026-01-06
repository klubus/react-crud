import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="m-4">All categories</h2>
      </div>
      <Container>
        <Row>
          <Col md={12} className="mb-4 d-flex justify-content-evenly">
            {categories.map((cat) => (
              <Button
                as={Link}
                to={`/category/${cat.toLowerCase()}`}
                variant="primary"
              >
                <div key={cat}>{cat}</div>
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
