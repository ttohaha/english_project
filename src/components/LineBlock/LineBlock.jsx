import React from "react";
import "./LineBlock.less";
// import ray from '../../img/ray.png'

interface LintBlockProps{
    text:String;
    srcImg:String;
    imgType:String;
}

const LineBlock: React.FC<LintBlockProps> = ({text, srcImg, imgType}) => {
  return (
    <div className="line_block">
      <div className="line_block_content">
        {/* <img src={srcImg} alt="" className="" /> */}
        <img src={srcImg} alt="" className={`${imgType} line_block_image`} />
        <div className="line_block_text">{text}</div>
      </div>
    </div>
  );
};

export default LineBlock;