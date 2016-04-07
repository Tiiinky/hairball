/**
 * Created by Daniel Friedel on 30.03.2016.
 */
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from  'react-router';
export default class HeaderNavigation extends React.Component {
    render() {
        return (
            <div id="root">
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"><h3>Hairball Remedy</h3></Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem> <Link to="/band"><h3>Band</h3></Link></NavItem>
                        <NavItem> <Link to="/concert"><h3>Konzerte</h3></Link></NavItem>
                        <NavItem> <Link to="/gallery"><h3>Galerie</h3></Link></NavItem>
                        <NavItem> <Link to="/music"><h3>Musik</h3></Link></NavItem>
                        <NavItem> <Link to="/contact"><h3>Kontakt</h3></Link></NavItem>
                        <NavItem> <Link to="/about"><h3>Impressum</h3></Link></NavItem>
                    </Nav>
                </Navbar>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}