import React from 'react';
import { Grid } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

          <Grid.Column>
            <h1>Welcome to the Local Kine Grinds App!</h1>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
