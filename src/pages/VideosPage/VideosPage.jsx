import React from "react";
import PageHeader from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";
import Videos from '../../components/Videos/Videos'


export default function VideosPage({ loggedUser, handleLogout }) {

    return (
        <>
            <Grid.Row columns={5} itemsPerRow={5}>
                <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
                <Videos />
            </Grid.Row>
        </>

    );
}

