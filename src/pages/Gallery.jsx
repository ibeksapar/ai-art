import { List, Card } from "antd";
import { Link } from "react-router-dom";
import { images } from "../data/images";

import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={images}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/item/${item.id}`}>
              <Card hoverable cover={<img alt={item.title} src={item.image} />}>
                <Card.Meta title={item.title} />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Gallery;
