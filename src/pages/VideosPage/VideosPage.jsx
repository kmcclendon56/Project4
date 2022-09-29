import React, { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import { Grid, Card } from "semantic-ui-react";
import Videos from '../../components/Videos/Videos'


export default function VideosPage({ loggedUser, handleLogout }) {

    return (
        <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <Grid textAlign='center' columns={4}>
                <Grid.Row>
                    <Card.Group itemsPerRow={4} stackable>
                        <Videos />
                    </Card.Group>
                </Grid.Row>
            </Grid>
        </>

    );
}

