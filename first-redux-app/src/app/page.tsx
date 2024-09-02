"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { increment } from "../store/actions/increment";
import { decrement } from "../store/actions/decrement";
import { login } from "../store/actions/login";
import type { RootState } from "../store/reducers/index";

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <main>
      <div>
        <h1>Hello World</h1>
        <h3>カウント: {counter}</h3>
        {isLogin ? <h3>ログインに成功</h3> : <h3>ログインしてください</h3>}
        <IconButton color="primary" onClick={() => dispatch(increment(5))}>
          <AddCircleIcon />
        </IconButton>
        <IconButton color="error" onClick={() => dispatch(decrement())}>
          <RemoveCircleIcon />
        </IconButton>
        <br />
        <Button variant="contained" onClick={() => dispatch(login())}>
          ログイン or ログアウト
        </Button>
      </div>
    </main>
  );
}
