import React, { Component } from 'react';

class RefPrac1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWriter: '',
      inputTitle: '',
      comment: [],
    };

    this.writerInputElem = React.createRef();
    this.titleInputElem = React.createRef();
  }

  checkInputValue = () => {
    if (this.state.inputWriter.trim().length === 0) {
      this.writerInputElem.current.focus();
      return false;
    }

    if (this.state.inputTitle.trim().length === 0) {
      this.titleInputElem.current.focus();
      return false;
    }

    return true;
  };

  addComment = () => {
    if (!this.checkInputValue()) {
      return;
    }

    let newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };

    this.setState({
      comment: [...this.state.comment, newComment],
      inputWriter: '',
      inputTitle: '',
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="writer3">작성자:</label>
          <input
            ref={this.writerInputElem}
            id="writer3"
            type="text"
            name="writer"
            value={this.state.inputWriter}
            onChange={(e) => this.setState({ inputWriter: e.target.value })}
          />
          <label htmlFor="title3">제목:</label>
          <input
            ref={this.titleInputElem}
            id="title3"
            type="text"
            name="title"
            value={this.state.inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>

        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {this.state.comment.map((value, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RefPrac1;
