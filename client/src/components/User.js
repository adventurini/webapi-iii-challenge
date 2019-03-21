import React from 'react';
import { Card, CardBody,
  CardTitle, Input, Form, Button} from 'reactstrap';

export default function User(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.user.name}</CardTitle>
          <Form>
          <Input>Card subtitle</Input>
          <Button>Submit</Button>
          <Button>Delete</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
