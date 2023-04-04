import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BlockchainQuiz from "./BlockchainQuiz";
// const myCarouselElement = document.querySelector("#myCarousel");
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   wrap: false,
// });

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  CarouselItems;

  return (
    BlockchainQuiz.map((  {quest_id, quest_className,quest_alt,question,ans_key1,ans_key2,ans_key3,ans_key4,bookmark}) => {

        return(
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                key={quest_id},
                quest_className={quest_className},
                alt={quest_alt},
                answer={ans_key1},
                <Carousel.Caption>
                <h3>{quest_id}/BlockchainQuiz.length()</h3>

                if ({quest_type} == "text") {
                        
                }

                <p>question={question}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
      }));
  );
}

render(<ControlledCarousel />);
