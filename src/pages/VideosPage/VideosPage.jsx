import React from "react";
import PageHeader from "../../components/Header/Header";
import { Grid, Card } from "semantic-ui-react";
import Videos from '../../components/Videos/Videos'


export default function VideosPage({ loggedUser, handleLogout }) {

    return (
        <>
            <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            <div>
                <Grid style={{ justify: "center", display:'flex', marginLeft:'10rem' }} textAlign='center' columns={4}>
                    <Grid.Row>
                        <Card.Group className="cards" itemsPerRow={5} stackable>
                            <Videos />
                        </Card.Group>
                    </Grid.Row>
                </Grid>
            </div>
        </>

    );
}
