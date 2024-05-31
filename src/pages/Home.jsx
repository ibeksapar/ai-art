import { Typography, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { images } from "../data/images";

const { Title, Paragraph } = Typography;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Home() {
  const previewImages = shuffleArray([...images]).slice(0, 4);

  return (
    <div className={styles.home}>
      <Title>Welcome to the AI Gallery</Title>
      <Paragraph>
        Explore a collection of stunning paintings created by artificial
        intelligence.
      </Paragraph>
      <div className={styles.galleryPreview}>
        {previewImages.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.previewImageContainer} ${
              index >= 2 ? styles.blurred : ""
            }`}
          >
            <img
              src={image.image}
              alt={image.title}
              className={styles.previewImage}
            />
          </div>
        ))}
      </div>
      <Link to="/gallery">
        <Button type="primary" className={styles.viewMoreButton}>
          View More
        </Button>
      </Link>
    </div>
  );
}

export default Home;
