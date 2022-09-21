import "./styles/main.css";
import rocketImg from "/rocket.svg";

import * as Dialog from "@radix-ui/react-dialog";

import { TwoDigitTimer } from "./components/TwoDigitTimer";
import { Input } from "./components/Input";
import { useState } from "react";
import { Separator } from "./components/Separator";

export function App() {
  const [timeToEndArray, setTimeToEndArray] = useState([
    "00",
    "00",
    "00",
    "00",
  ]);
  const countdownDate = new Date("Nov 25, 2022 18:07:25").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const timeleft = countdownDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    const timeToEndCountdown = [days, hours, minutes, seconds];
    setTimeToEndArray(timeToEndCountdown);
  }, 1000);

  const days = String(timeToEndArray[0]).padStart(2, "0");
  const hours = String(timeToEndArray[1]).padStart(2, "0");
  const minutes = String(timeToEndArray[2]).padStart(2, "0");
  const seconds = String(timeToEndArray[3]).padStart(2, "0");

  return (
    <div className="flex justify-center gap-8 pl-28 pr-14 py-28 ">
      <div>
        <h2 className="uppercase font-bold text-4xl leading-[3rem] tracking-widest text-purple">
          Ready to launch in...
        </h2>
        <div className="flex justify-between items-end mt-3">
          <TwoDigitTimer title="Dias" time={days} />
          <Separator />
          <TwoDigitTimer title="Horas" time={hours} />
          <Separator />
          <TwoDigitTimer title="Minutos" time={minutes} />
          <Separator />
          <TwoDigitTimer title="segundos" time={seconds} />
        </div>
        <p className="text-center py-8 text-textColor">
          Inscreva-se para saber mais sobre o lançamento
        </p>
        <Dialog.Root>
          <Dialog.Trigger className="m-auto py-4 px-8 bg-purple text-white rounded-xl flex">
            Inscreva-se
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/70 inset-0 fixed" />
            <Dialog.Content className="fixed bg-modalBg py-4 px-6 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[24rem] shadow-lg shadow-black/25">
              <Dialog.Title />
              <form action="" className="flex flex-col gap-4">
                <p className="text-center text-lg font-bold text-lightGrey">
                  Preencha com seus dados para entrar na lista de espera
                </p>
                <Input
                  name="name"
                  labelTitle="Nome"
                  type="text"
                  placeholder="Digite seu nome aqui"
                />
                <Input
                  name="email"
                  labelTitle="E-mail"
                  type="text"
                  placeholder="Use seu melhor email"
                />
                <button
                  type="submit"
                  className="mt-4 m-auto py-4 px-8 bg-indigo-500 rounded-xl font-bold"
                >
                  Enviar
                </button>
              </form>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <img src={rocketImg} alt="" className="w-[25rem]" />
    </div>
  );
}
