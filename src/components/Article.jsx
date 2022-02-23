const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>基礎ナンバーは{props.number}です</p>
      <h4>オブジェクトの描画も可能です</h4>
      <p>{props.obj.data1}</p>
      <p>{props.obj.data2}</p>
    </div>
  );
};

export default Article;
