/* eslint import/no-named-as-default: 0 */
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import AppBarContainer from '../../containers/AppBarContainer';
import { routingComponent } from '../../routes';

const TemplateDefault = ({ ...props }) => (
  <React.Fragment>
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <AppBarContainer {...props} />
        </Grid.Column>
        <Grid.Column>
          <Container className="content-container">
            {routingComponent({ ...props })}
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);


export default TemplateDefault;
