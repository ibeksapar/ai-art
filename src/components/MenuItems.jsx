import {
  HomeOutlined,
  UserOutlined,
  PictureOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "/about",
    icon: <InfoCircleOutlined />,
    label: <Link to="/about">About</Link>,
  },
  {
    key: "/gallery",
    icon: <PictureOutlined />,
    label: <Link to="/gallery">Gallery</Link>,
  },
  {
    key: "/contact",
    icon: <UserOutlined />,
    label: <Link to="/contact">Contact</Link>,
  },
];

export default items;
