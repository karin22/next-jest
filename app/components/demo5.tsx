"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
type Response = {
  name: string;
};

const Demo5 = () => {
  const [item, setItem] = useState<Response[]>([]);
  useEffect(() => {
    fetData();
  }, []);

  const fetData = async () => {
    const res = await axios.get(
      "https://66a222f5967c89168f1eeea1.mockapi.io/api/user"
    );

    setItem(res.data);
  };
  if (!item.length) return <div>loading..</div>;
  return (
    <div>
      {item.map((x) => (
        <div key={x.name}>{x.name}</div>
      ))}
    </div>
  );
};

export default Demo5;
