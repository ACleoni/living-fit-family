import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import Stream from '../map/Stream';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <Grid stackable columns={2}>
      <Grid.Column>
        <Segment>
          <Image src='https://res.cloudinary.com/dq0fvempx/image/upload/v1604765261/group-training_pcl77h.jpg' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        {/* <Segment> */}
        <Image src='/images/wireframe/paragraph.png' />
        {/* </Segment> */}
      </Grid.Column>
    </Grid>
  );
}
