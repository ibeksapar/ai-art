import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  List,
  Typography,
  Popconfirm,
  message,
} from "antd";
import styles from "./Contact.module.css";

const { Paragraph } = Typography;

function Contact() {
  const [form] = Form.useForm();
  const [reviews, setReviews] = useState([]);
  const [editingKey, setEditingKey] = useState(null);
  const [user, setUser] = useState(null);

  const defaultUser = { email: "ibek@test.com", password: "ibek123" };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const saveReviews = (newReviews) => {
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    setReviews(newReviews);
  };

  const onFinish = (values) => {
    if (!user) {
      message.error("You must be signed in to leave a review");
      return;
    }

    if (editingKey !== null) {
      const newReviews = reviews.map((review) =>
        review.id === editingKey
          ? { ...values, id: editingKey, user_id: user.email }
          : review
      );
      saveReviews(newReviews);

      message.success("Review updated successfully");
      setEditingKey(null);
    } else {
      const newReview = { ...values, id: Date.now(), user_id: user.email };

      saveReviews([...reviews, newReview]);
      message.success("Review added successfully");
    }

    form.resetFields();
  };

  const handleEdit = (id) => {
    const review = reviews.find((review) => review.id === id);

    form.setFieldsValue(review);
    setEditingKey(id);
  };

  const handleDelete = (id) => {
    const newReviews = reviews.filter((review) => review.id !== id);

    saveReviews(newReviews);
    message.success("Review deleted successfully");
  };

  const handleSignIn = (email, password) => {
    if (email === defaultUser.email && password === defaultUser.password) {
      const user = { email };
      setUser(user);

      localStorage.setItem("user", JSON.stringify(user));
      message.success("Signed in successfully");
    } else {
      message.error("Invalid email or password");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    message.success("Signed out successfully");
  };

  return (
    <div className={styles.contact}>
      {!user ? (
        <Form
          name="auth"
          onFinish={({ email, password }) => handleSignIn(email, password)}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Input your email!" }]}
            initialValue={defaultUser.email}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Input your password!" }]}
            initialValue={defaultUser.password}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <>
          <Button onClick={handleSignOut}>Sign Out</Button>
          <Form
            form={form}
            name="contact"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Input your message!" }]}
            >
              <Input.TextArea className={styles.textArea} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                {editingKey !== null ? "Save" : "Submit"}
              </Button>
              {editingKey !== null && (
                <Button
                  onClick={() => {
                    setEditingKey(null);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
              )}
            </Form.Item>
          </Form>

          <List
            itemLayout="horizontal"
            dataSource={reviews}
            renderItem={(review) => (
              <List.Item
                actions={
                  review.user_id === user.email
                    ? [
                        <Button
                          key="edit"
                          onClick={() => handleEdit(review.id)}
                        >
                          Edit
                        </Button>,
                        <Popconfirm
                          key="delete"
                          title="Do you want to delete this review?"
                          onConfirm={() => handleDelete(review.id)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button danger>Delete</Button>
                        </Popconfirm>,
                      ]
                    : null
                }
              >
                <List.Item.Meta
                  title={review.name}
                  description={
                    <>
                      <Paragraph>{review.message}</Paragraph>
                      <Paragraph type="secondary">{review.email}</Paragraph>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </>
      )}
    </div>
  );
}

export default Contact;
