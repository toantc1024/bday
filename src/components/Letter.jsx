"use client";
import React, { Fragment, useState } from "react";

const Letter = () => {
  const fx = (x) => {
    return (-1 / 2500) * x * x + (1 / 25) * x;
  };
  let emojis = ["💻", "👨‍💻", "🎤", "🌼", "☕", "🎧", "📷"];

  return (
    <div
      id="thank-you-section"
      className={`w-full overflow-hidden h-screen relative flex items-center justify-center  border-t-[1px] border-[rgba(255,255,255,.2)]`}
    >
      <Fragment>
        <span className="p-2 text-yellow-800 py-6 rounded-2xl z-[100] absolute text-2xl xl:text-9xl shadow-2xl font-extrabold bg-white ">
          Be <span className="underline decoration-yellow-500">opti</span>mistic
        </span>
        {
          <div className="flex flex-wrap items-center shadow-xl justify-center gap-4 ">
            {[...new Array(100)].map((_, i) => (
              <span
                key={`emoji-${i}`}
                className={`flex items-center justify-center text-2xl md:text-6xl w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-xl shadow-2xl transition-all ease-in-out duration-500 `}
                style={{
                  opacity: i % 2 == 0 ? 0 : fx(i),
                  transform:
                    i % 3 == 0
                      ? "scale(0.9)"
                      : i % 5 == 0
                      ? "scale(1.1)"
                      : "scale(1)",
                }}
              >
                <span className="">{emojis[i % emojis.length]}</span>
              </span>
            ))}
          </div>
        }
      </Fragment>
    </div>
  );
};

export default Letter;
