import React from 'react'
import {GridColumn, GridRow, Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn width={4}>
                    </GridColumn>
                    <GridColumn width={12}>
                        
                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
