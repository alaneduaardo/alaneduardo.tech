import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';

import './ImageCard.scss';

const ImageCard = ( props ) => {
  let { title, subtitle, text, footerText, img } = props;

  return (
    <Card className="ImageCard" inverse>
      { (img) ? <CardImg width="100%" src={img} alt={title ? title : ''} /> : '' }
      <CardImgOverlay>

        { (title) ? <CardTitle>{title}</CardTitle> : '' }
        { (subtitle) ? <CardSubtitle>{subtitle}</CardSubtitle> : '' }

        { (text) ? <CardText>{text}</CardText> : ''}

        { (footerText) ?
          <CardFooter>
            <small>{footerText}</small>
          </CardFooter>
        : '' }

      </CardImgOverlay>
    </Card>
  );
}

export default ImageCard;
