import React from 'react'
import { Grid } from 'semantic-ui-react'
export default function Content() {
    return (
        <div>
            <p>The following grid has vertical gutters.</p>

            <Grid columns={2} padded='vertically'>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
                <Grid.Column>
                    <p></p>
                </Grid.Column>
            </Grid>
        </div>
       
    )
}
