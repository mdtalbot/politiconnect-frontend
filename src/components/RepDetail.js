import React from 'react';
import RepLinks from './RepLinks'
import {Container, Item, Image} from 'semantic-ui-react'


export default function RepDetail(props) {

  function getAltImg() {
    document.getElementsByClassName("rep-photo").src = '../../public/assets/unavailable.jpg'
  }

  console.log(props)
      if (props.selectedReps.length === 0) {
        return <h2>Click a representative to see their information!</h2>
    } else {
        return (
            <Item.Group relaxed>
              <Item>
              <Item.Image height="auto" width="auto" max-height="300" max-width="300" src={props.selectedReps.photoUrl ? props.selectedReps.photoUrl : require('../assets/unavailable.jpg')} />

              <Item.Content verticalAlign="middle" float="left">
                  <Item.Header>{props.selectedReps.name}</Item.Header>

                <Item.Meta>
                    {props.selectedReps.party}
                </Item.Meta>
                <Item.Description>
                    {props.selectedReps.address ? props.selectedReps.address[0].line1 : "Address unavailable."}
                    <br />
                    {props.selectedReps.address ? props.selectedReps.address[0].line2 : ''}
                    <br />
                    {props.selectedReps.address ? props.selectedReps.address[0].city : ''} {props.selectedReps.address ? props.selectedReps.address[0].state : ''} {props.selectedReps.address ? props.selectedReps.address[0].zip : ''}
                    <br />
                    {props.selectedReps.phones}
                    <br />
                    <a href={props.selectedReps.urls}>Website</a>
                    <br />
                    </Item.Description>
                    <Item.Extra>
                    {props.selectedReps.channels ? props.selectedReps.channels.map((channel, index) => <RepLinks key={index} type={channel.type} id={channel.id} />) : "No social media links available."}
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
        );
     }
}
