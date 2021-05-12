import React, { Component } from "react";
import axios from "axios";

export default class APIC extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios({
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      url: "/v1/processformdata",
      data: formData,
    }).then(function (response) {
      console.log(response.data);
    });

    //    axios.post("http://localhost:8080/v1/processformdata", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <form>
          <div className="form-group">
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        </form>
      );
    } else {
      return (
        <form>
          <div className="form-group">
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        </form>
      );
    }
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Jira #</label>
          <input
            type="text"
            className="form-control"
            placeholder="Please provide jira id"
          />
        </div>
        <div className="form-group">
          <div id="block-3" className="form-group">
            <label>Provide a template yaml file</label>
          </div>

          <div className="form-group" id="block-4">
            <input
              type="file"
              className="form-control"
              placeholder="Template yaml"
              onChange={this.onFileChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div id="block-1" className="form-group">
            <label>Yaml file to be validated:</label>
          </div>

          <div className="form-group" id="block-2">
            <input
              type="file"
              className="form-control"
              placeholder="file"
              onChange={this.onFileChange}
            />
          </div>
        </div>
        <span></span>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.onFileUpload}
          >
            Validate
          </button>
        </div>
      </form>
    );
  }
}