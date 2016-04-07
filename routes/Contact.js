/**
 * Created by Gaming on 31.03.2016.
 */
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';

export default class Band extends React.Component {
    render() {
        return (
            <div id="content">
                <Grid>
                    <h1>Kontakt</h1>
                    <Row>
                        <Col sm={12} md={6}>
                            <p>Ihr wollt uns buchen?</p>

                            <p>Dann schreibt uns einfach eine Mail an <b>booking@hairballremedy.de</b>, oder nutzt das Kontaktformular nebenan!</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <form>
                                <Input type="text" label="Name" placeholder="Ihr Name" />
                                <Input type="email" label="Email Addresse" placeholder="Ihre E-Mail Adresse" />
                                <Input type="text" label="Betreff" placeholder="Der Betreff der Nachricht" />
                                <Input type="textarea" label="Nachricht" placeholder="Ihre Nachricht.." />
                                <ButtonInput type="submit" value="Senden" />
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}