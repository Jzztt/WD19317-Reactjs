import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  // local State
  // lưu trữ dữ lieu trong component
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  // xử lý sideEffect(call api)
  // kiểu 1: usEffect không có dependencies, ueEffect luôn chạy lại khi component render
  // kiểu 2: useEffect có dependencies là 1 mảng rỗng, chỉ chạy khi component render lần đầu
  // kiểu 3: useEffect có dependencies  là 1 mảng chứa giá trị, khi giá trị đó thay đổi thì useEffect chạy lại
  useEffect(() => {
    console.log("useEffect chạy");
  }, []);
  console.log("render");

  return (
    <>
      <button onClick={handleCount}>Click</button>
      <div>{count}</div>
    </>
  );
};

export default LifeCycle;
