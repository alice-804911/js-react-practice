import ThemeGroup from "./ThemeGroup";
import { useState, useEffect } from "react";
import axios from "axios";

// 抓取線上資料
const Content = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getAllDatas();
  }, []);

  const getAllDatas = () => {
    axios
      .get("/index/stage/v1/data&27655702")
      .then((response) => {
        setSections(response.data.window2.Blocks);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  return (
    <div className="c-content">
      <ThemeGroup sections={sections} />
    </div>
  );
};
export default Content;
