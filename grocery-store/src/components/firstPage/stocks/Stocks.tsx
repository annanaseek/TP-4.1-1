import React from "react";
import { Container } from "../../ui/grid";
import Title from "../../ui/title/Title";
import { Col } from "../../ui/grid";

import './Catalog.scss'

const Catalog = () => {
    return (
        <section className="catalog_section">
            <Container>
                <div className="catalogTitle">
                    <Title>
                        Каталог
                    </Title>
                </div>

            </Container>
        </section>
    );
}

export default Catalog;