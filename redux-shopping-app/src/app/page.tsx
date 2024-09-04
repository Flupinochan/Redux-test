"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import CartContainer from "../components/CartContainer";
import { RootState } from "../store/index";

export default function Home() {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  return (
    <main>
      <div>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </div>
    </main>
  );
}
