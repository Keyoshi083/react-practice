import { useState, useEffect } from "react";
import axios from "axios";

/**
 * useEffect API実行
 * @returns
 */
const GetUser = () => {
  const baseUrl = "https://api.github.com/users/";
  const [id, setId] = useState("Keyoshi083");
  const [name, setName] = useState("");
  async function getUserData(id) {
    return axios
      .get(baseUrl + id)
      .then((res) => res)
      .catch((err) => err);
  }

  function getRandomId() {
    const ids = ["Keyoshi083", "google", "aws", "facebook", "gaearon"];
    setId(ids[Math.floor(Math.random() * ids.length)]);
  }

  //IDが変更されるたびにGitHubAPIを叩いてユーザ情報を取得する。
  useEffect(() => {
    getUserData(id)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
      })
      .catch((err) => {
        console.error(err);
        setName("存在しないユーザ");
      });
  }, [id]);

  return (
    <div>
      <p>
        {id}のGitHub上の名前は{name}です
      </p>
      <button onClick={getRandomId}>別IDを検索</button>
    </div>
  );
};

export default GetUser;
