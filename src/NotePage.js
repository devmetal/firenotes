import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <div className="ui container" id="sticker">
        <div className="ui sticky attached top menu">
          <a className="item active">
            My Note Title
            </a>
          <a className="item">
            <i className="icon plus"></i> Write new
            </a>
          <a className="item">Upload file</a>
          <a className="item">Add link</a>
          <a className="item">Close this note</a>
        </div>
        <div className="ui bottom attached segment">
          <div className="ui container">
            <form className="ui form">
              <div className="field">
                <label>Files</label>
                <input type="file" />
              </div>
              <div className="field">
                <label>Text</label>
                <textarea rows="4"></textarea>
              </div>
              <button className="ui button">Submit</button>
            </form>
          </div>
          <div className="ui segment">
            <div className="ui very relaxed list">
              <div className="item">
                <div className="header">New York City</div>
                I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                </div>
              <div className="item">
                <div className="header">New York City</div>
                I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                </div>
              <div className="item" data-content="Click here to edit">
                <div className="header">New York City</div>
                I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                </div>
              <div className="item">
                <form className="ui form">
                  <div className="field">
                    <textarea rows="5">I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.</textarea>
                  </div>
                  <button className="ui button red">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="ui segment">
            <div className="ui relaxed list large">
              <div className="item">
                <i className="download icon"></i>
                File name
                </div>
              <div className="item">
                <i className="download icon"></i>
                File name
                </div>
            </div>
          </div>
          <div className="ui feed">
            <div className="event">
              <div className="label">
                <i className="pencil icon"></i>
              </div>
              <div className="content">
                <div className="summary">
                  You submitted a new post to the page
                    <div className="date">
                    3 days ago
                    </div>
                </div>
                <div className="extra text">
                  I'm having a BBQ this weekend. Come by around 4pm if you can.
                  </div>
                <div className="meta">
                  <a className="like">
                    <i className="like icon"></i> 11 Likes
                    </a>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="label">
                <i className="pencil icon"></i>
              </div>
              <div className="content">
                <div className="summary">
                  You submitted a new post to the page
                    <div className="date">
                    3 days ago
                    </div>
                </div>
                <div className="extra text">
                  I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                    I'm having a BBQ this weekend. Come by around 4pm if you can. I'm having a BBQ this weekend. Come by around 4pm if you can.
                  </div>
                <div className="meta">
                  <a className="like">
                    <i className="like icon"></i> 11 Likes
                    </a>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="label">
                <i className="pencil icon"></i>
              </div>
              <div className="content">
                <div className="summary">
                  You submitted a new post to the page
                    <div className="date">
                    3 days ago
                    </div>
                </div>
                <div className="extra text">
                  I'm having a BBQ this weekend. Come by around 4pm if you can.
                  </div>
                <div className="meta">
                  <a className="like">
                    <i className="like icon"></i> 11 Likes
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}