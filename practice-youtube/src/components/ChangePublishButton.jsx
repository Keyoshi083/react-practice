const ChangePublishButton = (props) => {
  return (
    <button onClick={props.changeIsPublish}>
      {/* <button
      onClick={() => {
        props.changeIsPublish();
      }}
    > */}
      公開情報：{props.isPublished.toString()}
    </button>
  );
};

export default ChangePublishButton;
