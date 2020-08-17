import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav, Button,  } from "react-bootstrap";
import styled from "styled-components";
import API from "../../utils/API";
import { json } from "express";
// import "../../style.css"

const Styles = styled.div`
  .cardInfo {
    width: 60%;
    min-width: 294px !important;
    height: auto;
    background-color: #fff8f0ff;
    margin: 70px;
    color: #111d4aff;
    border-radius: 4px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  }

  .cardImg {
    width: 20%;
    min-width: 273px !important;
    height: auto;
    margin: 70px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 2;
  }

  .card-header {
    background-color: #ffcf99ff;
  }

  .imgDiv {
    float: right;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

 function Home() {
  const [post, setPosts] = useState({
    results: [],
  });
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadPosts();
  }, []);

  function loadPosts() {
    API.getUsers()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  function savePost(id) {
    function checkPost(post) {
      return post.id == id;
    }
    let savedPost = post.filter(savePost);
    API.savePost({
      user: savedPost[0].volumeInfo.user,
      location: savedPost[0].volumeInfo.location,
      description: savedPost[0].volumeInfo.description,
      image: savedPost[0].volumeInfo.image,
      experience: savedPost[0].volumeInfo.experience,
    }).catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.user &&
      formObject.location &&
      formObject.description &&
      formObject.image &&
      formObject.experience
    ) {
      API.savePost({
        user: formObject.user,
        location: formObject.location,
        description: formObject.description,
        image: formObject.image,
        experience: formObject.experience,
      })
        .then((res) => loadPosts())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Styles className="body">
      <Container fluid>
        <NavBar />
        <h2>Public Feed</h2>
        <div className="row">
          <form>
            <textarea
              onChange={handleInputChange}
              name="user"
              placeholder="Username (required)"
            />
            <input
              onChange={handleInputChange}
              name="location"
              placeholder="Location of encounter (required)"
            />
            <textarea
              onChange={handleInputChange}
              name="description"
              placeholder="Description of event (required)"
            />
            <input
              onChange={handleInputChange}
              name="picture"
              placeholder="Do you take a picture? (optional)"
            />
            <input
              onChange={handleInputChange}
              name="experience"
              placeholder="What was your experience with the officer? (required)"
            />
            <formbtn disabled={!formObject.query} onClick={handleFormSubmit}>
              Submit Post
            </formbtn>
          </form>
          <h3>Posts</h3>
          {post.length ? (
            <list>
              {post.map((post) => {
                return (
                  <listitem key={post._id}>
                    <Card className="card cardInfo border-dark rounded">
                      <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first">Active</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="#link">Map</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>User:{post.user}</Card.Title>
                        <Card.Text>Location:{post.location}</Card.Text>
                        <Card.Text>Description:{post.description}</Card.Text>
                        <Card.Text>Image:{post.image}</Card.Text>
                        <Card.Text>Experience:{post.experience}</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="cardImg">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="placeholder"
                      />
                    </Card>
                  </listitem>
                );
              })}
            </list>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </Container>
      <Footer />;
    </Styles>
  );
}
export default Home;
{
  /* <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div>
        <div className="row">
            <Card className="card cardInfo border-dark rounded">
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Map</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>User: </Card.Title>
                    <Card.Text>
                    Location:
                    </Card.Text>
                    <Card.Text>
                    Description: 
                    </Card.Text>
                    <Card.Text>
                    Image:
                    </Card.Text>
                    <Card.Text>
                    Experience:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cardImg">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </Card>
        </div> */
}
