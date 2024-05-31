import { useParams, useNavigate } from "react-router-dom";
import { Typography, Image, Button } from "antd";
import { images } from "../data/images";
import styles from "./ItemDetail.module.css";

const { Title, Paragraph } = Typography;

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = images.find((painting) => {
    return painting.id === parseInt(id);
  });

  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <div className={styles.itemDetail}>
        <Image className={styles.image} src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <Paragraph className={styles.p}>{item.description}</Paragraph>
      </div>
    </>
  );
}

export default ItemDetail;
