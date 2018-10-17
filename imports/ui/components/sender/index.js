import React from "react";
import ace from "brace";
import "brace/mode/json";
import "brace/theme/monokai";

export class Sender extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }

  componentDidMount() {
    this.aceEditor = ace.edit(this.editor.current);
    this.aceEditor.setTheme("ace/theme/monokai");
    this.aceEditor.getSession().setMode("ace/mode/" + "json");
    this.aceEditor.getSession().on('change', () => {
      try {
        this.data = JSON.parse(this.aceEditor.getValue());
      } catch (e) {
      }
    });
  }

  render() {
    return (
      <div className="sender card text-white bg-warning o-hidden h-100">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="senderId">Sender ID</label>
            <input className="form-control" id="senderId" type="text" name="senderId" placeholder="senderId" defaultValue={this.props.senderId} />
          </div>
          <div className="form-group">
            <label htmlFor="senderId">Registration ID</label>
            <input className="form-control" id="registration" type="text" name="registration" placeholder="registrationId" defaultValue={this.props.registrationId}/>
          </div>
          <div className="form-group">
            <label htmlFor="data">Message</label>
            <div ref={this.editor} style={{height: "300px"}} className="json_editor"></div>
          </div>
          <button className="btn btn-primary" onClick={(event) => this.props.onSendClick({ senderId: senderId.value, registrationId: registration.value, data: this.data }) } >Send</button>
        </div>
        <a className="card-footer text-white clearfix small z-1" href="#">
          <span className="float-left">View Details</span>
          <span className="float-right">
            <i className="fa fa-angle-right"></i>
          </span>
        </a>
      </div>
    );
  }
}
