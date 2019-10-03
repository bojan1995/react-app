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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Потврди лозика: </Form.Label>
                        <Form.Control type="password" placeholder="Внеси лозинка: " />
                    </Form.Group>
                    <Button id="singlebutton1" variant="outline-primary" type="submit">
                        Регистрирај се
                    </Button>
                </Form>
            </div>
        );
    }
}

