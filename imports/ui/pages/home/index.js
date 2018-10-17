import React from "react";
import { Sender } from "/imports/ui/components/sender";
import { Alert } from "/imports/ui/components/alert";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationId: null
    };
    this.onCopyClick.bind(this);
    this.onSendClick.bind(this);
  }

  onCopyClick = (registrationId, event) => {
    let input = document.createElement('input');
    input.value = registrationId;
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  onSendClick = (registrationId, event) => {
    this.setState({
      registrationId: registrationId
    });
  }

  render() {
    return (<div className="home">
      {this.props.message &&
        <Alert type={this.props.message.type}>{this.props.message.text}</Alert>
      }
      <Sender senderId={this.props.senderId} onSendClick={this.props.onSendClick} registrationId={this.state.registrationId}/>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>registration id</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.registrations.map((r, index) => {
            return (<tr key={index}>
              <td>{index}</td>
              <td>{r.registrationId}</td>
              <td><a className="copy_link" href="#send={{reg.registrationId}}" onClick={(e) => this.onCopyClick(r.registrationId, e)} >copy</a></td>
              <td><a className="send_link" href="#send={{reg.registrationId}}" onClick={(e) => this.onSendClick(r.registrationId, e)} >send</a></td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>);
  }
}
