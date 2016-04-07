/**
 * Created by Gaming on 31.03.2016.
 */
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
export default class Band extends React.Component {
    render() {
        return (
            <div id="content">
                <Grid>
                    <h1>Die Band</h1>
                    <Row>
                        <Col sm={12} md={6}>
                            <p> Hairball Remedy, die Band, die so heißt, wie sie aussieht? – „Auf jeden Fall hat sich in
                                unserer Gegenwart noch keine Katze an ihrem Haarknäul erbrochen!“
                                Gegründet irgendwann im April 2014, auf einem Bauernhof mitten im Schwarzwald.
                                Angetrieben von dem Wunsch, endlich das zu machen, was sie immer machen wollten, führt
                                das Leben vier junge Menschen zusammen.
                                Inspiriert von einer Packung Katzenfutter, entfaltet sich eine kreative Energie, die in
                                kurzer Zeit 13 Songs entstehen lässt.
                                Das Leben schreibt die besten Lieder, und diese passen nun mal nicht immer in eine
                                Schublade. So kommt es, dass aus den vielen verschiedenen Einflüssen,
                                die von Jazz, Blues und Folk über Roots und Rock bis hin zu Klassik und Bluegrass
                                reichen, etwas Neues entsteht. Akustisch, mit viel Humor und noch mehr
                                Leidenschaft fühlen sie sich auf der Bühne am wohlsten. Hairball Remedy: das sind vier
                                junge Musiker*Innen, vier Freunde, die gemeinsam das tun, was sie
                                am liebsten tun… Musik mit Herz, Hirn und Humor. </p>
                        </Col>
                        <Col sm={12} md={6}>
                            <img src="../images/Band_Couch.jpg" width="500"/>
                        </Col>
                    </Row>

                    <h1>Laura</h1>
                    <Row>
                        <Col sm={12} md={6}>
                            <img src="../images/Laura_Couch.jpg" width="500"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <p className="left">“Nicht nur durch ihre atemberaubende Schönheit sind schon manche im
                                Publikum hingerissen;
                                Nein, wer einmal ihre bezaubernde Stimme gehört hat, kommt nicht mehr davon los.
                                Und das ist noch nicht alles, denn ihrer Geige entlockt sie auch noch die allerschönsten
                                Töne,
                                sodass dem Hörer nichts anderes übrig bleibt als zu staunen.” </p>
                        </Col>

                    </Row>

                    <h1>Hannes</h1>
                    <Row>
                        <Col sm={12} md={6}>
                            <p className="left">Der begnadete Ausnahmegitarrist und Sänger besticht mit seiner offenen und humorvollen Art und Weise.

                                Nicht nur die Damenwelt frohlockt beim Anblick seiner Performance,

                                auch der Kenner weiß diesen talentierten jungen Mann zu schätzen. </p>
                        </Col>
                        <Col sm={12} md={6}>
                            <img src="../images/Johannes_Couch.jpg" width="500"/>
                        </Col>
                    </Row>

                    <h1>Simon</h1>
                    <Row>
                        <Col sm={12} md={6}>
                            <img src="../images/Simon_Couch.jpg" width="500"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <p className="left">“Ein Meister der tiefen Töne. <br />

                                Niemand kann so beherzt in Seiten dick wie Stahlseile greifen wie er und dabei gestandene Heavy-Metal-Fans in Extase bringen.

                                Mit seinem Kontrabass ist er der tragende Pfeiler der Band.”</p>
                        </Col>

                    </Row>

                    <h1>Malte</h1>
                    <Row>
                        <Col sm={12} md={6}>
                            <p className="left"></p>
                        </Col>
                        <Col sm={12} md={6}>
                            <img src="../images/Malte_Couch.jpg" width="500"/>
                        </Col>
                    </Row>


                </Grid>
            </div>
        );
    }
}