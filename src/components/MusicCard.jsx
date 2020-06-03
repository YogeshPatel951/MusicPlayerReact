import React from 'react'
import { Card } from 'react-bootstrap';
import './TrendingStyles.css'

export function MusicCard(props) {
  function handleClick(e) {
    props.passData(e.currentTarget.dataset.id)
  }
  return (
    <>
      <Card className="h-50 c bg-white mb-0 pb-0 rounded border-0" data-id={props.data.id} onClick={handleClick}>
        <Card.Img varaint="top" className="image-fluid" src={props.data.image} />
        <Card.Body   style={{paddingLeft:"0"}} className="d-flex flex-column">
          <div className="d-flex  justify-content-between" >
            <Card.Title className=" White" style={{fontFamily:"M PLUS Rounded 1c",fontWeight:"200"}}>{props.data.name}<br /><p className=" desc pt-2" style={{fontFamily:"M PLUS Rounded 1c",fontWeight:"100"}}>{props.data.description}</p></Card.Title>
          </div>
        </Card.Body>
      </Card>
      
    </>
  );
}