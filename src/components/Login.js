import React, {Component} from 'react';
import { Form , Button} from 'react-bootstrap';
export default class Logina extends Component {
    render() {
        return (
            <div id="login">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Е-адреса: </Form.Label>
                        <Form.Control type="email" placeholder="Внеси е-адреса" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Лозика: </Form.Label>
                        <Form.Control type="password" placeholder="Внеси лозинка: " />
                    </Form.Group>
                    <Button id="singlebutton" variant="outline-primary" type="submit">
                        Најави се
                    </Button>
                </Form>
            </div>
        );
    }
}

