import React from 'react';
import { Form, Button, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const submissionForm = (props) => {
  return (
    <Form onSubmit={props.submit}>
      <FormGroup>
        <Label>Incident Description</Label>
        <Input type="description" name="description" placeholder="Description of Event (Required)"></Input>
      </FormGroup>
      <FormGroup>
        <Label>Overall Experience</Label>
        <Input type="select" as="select" name="experience" defaultValue="Choose.">
          <option>Good</option>
          <option>Bad</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Officer Badge Number</Label>
        <Input type="badge" name="badge" placeholder="Enter Officer Badge Number"></Input>
      </FormGroup>
      <FormGroup>
        <Input type="file" name="file" label="Upload Image" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default submissionForm;