import { useState } from "react";
import { Title, Content, ChangePublishButton } from "./index";

const Article = (props) => {
  //Stateの使い方
  const [isPublished, setIsPublished] = useState(false);
  console.info(isPublished);
  const changeIsPublish = () => {
    setIsPublished(!isPublished);
  };
  return (
    <div>
      <Title img={props.img} title={props.title} />
      <Content content={props.content} />
      <button onClick={changeIsPublish}>公開切り替え</button>
      <ChangePublishButton
        isPublished={isPublished}
        changeIsPublish={changeIsPublish}
      />
    </div>
  );
};

export default Article;
