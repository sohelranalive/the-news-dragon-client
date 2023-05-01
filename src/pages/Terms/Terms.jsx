import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Read the agreement</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam animi accusantium reiciendis repellendus architecto sit consectetur quasi mollitia aspernatur.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed pariatur officia excepturi molestias reiciendis voluptatum, laudantium fuga quasi dolores sint, minus corrupti, dolorum est repellat eos exercitationem odit laborum eveniet nemo corporis porro obcaecati esse! Incidunt ea aut exercitationem sapiente non nostrum, temporibus ratione.</p>

            <Link to='/registration'>Go back registration</Link>
        </Container>
    );
};

export default Terms;