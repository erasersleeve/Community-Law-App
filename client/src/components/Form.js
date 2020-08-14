import React from 'react';
import {Form, FormGroup, Label, Input, CustomInput} from 'reactstrap';

const submissionForm = (props) => {
  return (
    <Form>
        <FormGroup>
        <Label for="userName">User: (prop a name)</Label>
        <Input plaintext value="Enter username here" />
      </FormGroup>
      <FormGroup>
        <Label for="incidentDescription">Text Area</Label>
        <Input type="textarea" name="text" id="description" />
      </FormGroup>
      <FormGroup>
        <Label for="badgeNum">Police Badge #</Label>
        <Input
          type="number"
          name="number"
          id="num"
          placeholder="Enter number"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Good || Bad</Label>
        <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Inline</Label>
        <div>
          <CustomInput type="checkbox" id="exampleCustomInline" label="Good" inline />
          <CustomInput type="checkbox" id="exampleCustomInline2" label="bad" inline />
        </div>
        </FormGroup>
    </Form>
  );
}

export default submissionForm;