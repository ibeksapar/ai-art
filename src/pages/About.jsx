import { Component } from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "antd";
import styles from "./About.module.css";

const { Title, Paragraph, Text } = Typography;

class About extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className={styles.about}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="img/mudreishiy.webp"
              alt="Gallery"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.textContainer}>
            <Title level={1}>{title} 🎨</Title>
            <Divider />
            <Paragraph>
              <Text strong>The AI Paintings Gallery</Text> {description} Each
              piece is a testament to the limitless possibilities when
              technology meets creativity. 🤖🖌️
            </Paragraph>
            <Divider />
            <Paragraph>
              Our mission is to explore and promote the intersection of art and
              technology. We believe that AI can be a powerful tool for artists,
              offering new ways to create, experiment, and innovate. By
              providing a platform for AI-generated art, we aim to inspire both
              artists and technologists to think outside the box. 🌐🎨
            </Paragraph>
            <Divider />
            <Title level={2}>What We Offer ✨</Title>
            <Paragraph>
              <ul className={styles.list}>
                <li>
                  <Text strong>Curated Collections:</Text> Explore themed
                  collections that highlight different styles and techniques in
                  AI-generated art. 🖼️📚
                </li>
                <li>
                  <Text strong>Exhibitions:</Text> Participate in virtual
                  exhibitions that showcase the latest works from AI artists
                  around the world. 🌍🖼️
                </li>
                <li>
                  <Text strong>Workshops and Talks:</Text> Join our events to
                  learn more about the technology behind AI art and meet the
                  creators. 🗣️💡
                </li>
              </ul>
            </Paragraph>
            <Divider />
            <Title level={2}>Join Us 🚀</Title>
            <Paragraph>
              Whether you are an artist, a technologist, or simply an art
              enthusiast, we invite you to join us in this exciting journey.
              Discover the beauty of AI-generated art and be part of a community
              that celebrates innovation and creativity. 🤝🌟
            </Paragraph>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
