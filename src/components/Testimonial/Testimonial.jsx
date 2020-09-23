import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import web from "../../image/20859.jpg";
import web2 from "../../image/631.jpg";
import web3 from "../../image/632.jpg";
import web4 from "../../image/6547.jpg";
import "./Testimonial.css";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <>
      <div className="Testimonial_bg">
        <div className=" py-md-5 py-3">
          <h2>
            <span className="theme_color">Testimonials</span>
          </h2>
        </div>

        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={20}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
            infiniteLoop={true}
          >
            <div className="Testimonial_bg_content">
              <div>
                <img src={web} alt="" className="img-fluid Avtar-img" />
                <h1>Robert Wilson</h1>
                <p>
                  <span>** Professional Science Teacher **</span>
                </p>
                <p>
                  “ You may have read or heard that the ideal paragraph consists
                  of one thought.1 Clearly, there are various ways to begin and
                  end a thought. One way is to start with a claim or topic
                  sentence,2 offer examples for your claim, explain how your
                  examples support the claim ”
                </p>
              </div>
            </div>
            <div className="Testimonial_bg_content">
              <div>
                <img src={web2} alt="" className="img-fluid Avtar-img" />
                <h1>Robert Wilson</h1>
                <p>
                  <span>** Professional Devloper Teacher **</span>
                </p>
                <p>
                  “ You may have read or heard that the ideal paragraph consists
                  of one thought.1 Clearly, there are various ways to begin and
                  end a thought. One way is to start with a claim or topic
                  sentence,2 offer examples for your claim, explain how your
                  examples support the claim ”
                </p>
              </div>
            </div>
            <div className="Testimonial_bg_content">
              <div>
                <img src={web4} alt="" className="img-fluid Avtar-img" />
                <h1>Robert Wilson</h1>
                <p>
                  <span>** Professional English Teacher **</span>
                </p>
                <p>
                  “ You may have read or heard that the ideal paragraph consists
                  of one thought.1 Clearly, there are various ways to begin and
                  end a thought. One way is to start with a claim or topic
                  sentence,2 offer examples for your claim, explain how your
                  examples support the claim ”
                </p>
              </div>
            </div>
            <div className="Testimonial_bg_content">
              <div>
                <img src={web3} alt="" className="img-fluid Avtar-img" />
                <h1>Robert Wilson</h1>
                <p>
                  <span>** Professional Mathematician Teacher **</span>
                </p>
                <p>
                  “ You may have read or heard that the ideal paragraph consists
                  of one thought.1 Clearly, there are various ways to begin and
                  end a thought. One way is to start with a claim or topic
                  sentence,2 offer examples for your claim, explain how your
                  examples support the claim ”
                </p>
              </div>
            </div>
          </ItemsCarousel>
        </div>
      </div>
    </>
  );
};
