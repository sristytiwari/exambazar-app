import React, { PureComponent } from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import "./styles.css";

class Question extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: [],
      questionIndex: 0,
    };
  }

  componentDidMount() {
    this.fetchRandomQuestion(true);
  }

  fetchRandomQuestion = (initial) => {
    let body = {
      api_key: "8971180896",
      api_secret: "5efdddd34359ac23b79b12fd",
      examId: this.props.match.params.id,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    console.log(body);
    fetch(
      "https://www.exambazaar.com/api/coding-round/routes/random-question",
      requestOptions
    ).then((result) =>
      result.json().then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            question: [...this.state.question, response.data.question],
            questionIndex: initial ? 0 : this.state.questionIndex + 1,
          });
        }
      })
    );
  };

  toPrevious = () => {
    if (this.state.questionIndex > 0) {
      this.setState({
        questionIndex: this.state.questionIndex - 1,
      });
    }
  };

  toNext = () => {
    if (this.state.questionIndex + 1 < this.state.question.length) {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
      });
    } else {
      this.fetchRandomQuestion(false);
    }
  };

  render() {
    const { question, questionIndex } = this.state;
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Exam Bazaar</Navbar.Brand>
        </Navbar>
        <div className="card-container">
          <Card style={{ width: "50%" }}>
            <Card.Body>
              <Card.Title>{question.exam}</Card.Title>
              <Card.Text>
                <strong>Question. </strong>
                {
                  (
                    (((question || [])[questionIndex] || {}).questions ||
                      [])[0] || {}
                  ).question
                }
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              {(
                (
                  (((question || {})[questionIndex] || {}).questions ||
                    [])[0] || {}
                ).options || []
              ).map((item, index) => {
                return (
                  <Card.Text key={index}>
                    Option {index + 1}.&nbsp;{item.option}
                  </Card.Text>
                );
              })}
              <div>
                <Card.Link href="#" onClick={() => this.toPrevious()}>
                  Previous
                </Card.Link>
                <Card.Link href="#" onClick={() => this.toNext()}>
                  Next
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Question;
