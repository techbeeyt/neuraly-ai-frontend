"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [agentId, setAgentId] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    setAgentId(params.conversation_id[0]);
    if (params.conversation_id[1]) {
      setSessionId(params.conversation_id[1]);
      // call api to load the session
      // window.scrollTo(0, document.body.scrollHeight);
    } else {
      // logic to tell user start a new chat (like chatgpt)
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-col justify-center gap-4 items-center mb-[100px] pt-[24px]">
        <div className="lg:w-[700px] w-[90vw] flex justify-start items-end flex-col gap-3">
          <div className="flex justify-end items-center">
            <Image
              src="/images/profile-photo.png"
              height={36}
              width={36}
              alt="neuraly.ai"
              className="rounded-xl"
            />
          </div>

          <div className=" bg-slate-500 text-slate-100 p-4 rounded-xl">
            Write some lorem ipsum for me
          </div>
        </div>

        <div className="lg:w-[700px] w-[90vw] flex justify-start items-start flex-col gap-3">
          <div className="">
            <Image
              src="/icons/neuraly-icon.svg"
              height={36}
              width={36}
              alt="neuraly.ai"
            />
          </div>
          <div className="bg-gray-200 text-gray-700 p-4 rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            distinctio, excepturi autem aperiam, dolores soluta itaque
            consequuntur maiores sunt doloremque laboriosam molestias ab
            temporibus nam illum expedita amet rerum. Facilis. Voluptate
            expedita ipsam consectetur soluta rem dicta eum deleniti officia
            pariatur eaque nesciunt, velit perferendis culpa beatae voluptatem
            sunt aliquid mollitia similique. Blanditiis deleniti fugiat qui
            dolores ad sint recusandae! Sit reiciendis aliquid expedita ipsam
            recusandae ad repellendus ipsum eveniet officiis beatae, dolores
            culpa corrupti at animi accusantium, deserunt laborum nesciunt neque
            consequatur? Placeat vel quas hic quibusdam? Laborum, inventore.
            Laborum cum magni inventore quae animi officiis, quas, atque
            consequatur tempore, minus quam suscipit. Animi fuga, dolore
            perferendis numquam libero ducimus aperiam, sunt, in magni maxime
            earum quasi quibusdam rerum. Eligendi asperiores aspernatur dolore.
            Incidunt ratione tenetur deleniti pariatur porro doloremque eos
            tempora, obcaecati est perspiciatis ullam similique nemo! Officiis
            at hic ex? Voluptatibus nemo dolor, est harum illum amet! Incidunt
            consectetur nobis esse nihil numquam aliquam fuga, facere inventore
            odit deserunt vero vel impedit delectus commodi a porro ducimus
            dignissimos excepturi officia assumenda possimus quos. Aliquam
            ducimus laboriosam unde. Omnis perspiciatis modi optio. Unde
            corrupti provident est eligendi, quo maiores a dignissimos ab, earum
            autem quam, excepturi adipisci sequi voluptas commodi consectetur
            incidunt deserunt! Ipsum quis fugit sit nam. Commodi cupiditate,
            harum similique consequatur consectetur ea doloribus molestiae ullam
            reiciendis eius, iure ratione omnis aliquid nobis a molestias quas
            quia nesciunt optio eligendi unde. Facere, optio hic! Repellendus,
            aliquid? Qui eveniet ea consectetur non fuga voluptatum eligendi
            est. Laudantium numquam aut facere, voluptate harum laboriosam nihil
            qui facilis id officiis magni soluta, ad dicta iusto labore,
            consectetur quam asperiores. Fugit ullam, dignissimos, veniam
            molestias neque, facere officia corrupti hic laborum suscipit
            commodi quos sapiente saepe molestiae quod repellat aperiam
            provident iste error! Ex rerum soluta quia odio consectetur nulla!
          </div>
        </div>
      </div>
      <div className="fixed lg:left-[300px] left-0 bottom-0 right-0 h-[70px] bg-transparent flex justify-center items-start pt-1">
        <div className="lg:w-[700px] w-[90vw] flex justify-center items-center gap-3">
          <Link
            href="/dashboard/databases/:db_id:/open"
            className="bg-white border border-gray-700 rounded-full w-[44px] h-[44px] flex justify-center items-center"
          >
            <svg
              width="24"
              height="26"
              viewBox="0 0 30 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.4159 9.47742V6.54923C29.4159 5.30191 28.6561 4.34664 27.8225 3.68965C26.9723 3.01965 25.8329 2.48031 24.5553 2.05447C21.985 1.19768 18.5272 0.692871 14.7749 0.692871C11.0227 0.692871 7.5649 1.19768 4.99454 2.05447C3.71701 2.48031 2.57755 3.01965 1.72739 3.68965C0.89374 4.34664 0.134033 5.30191 0.134033 6.54923V9.47742C0.134033 10.721 0.885397 11.6765 1.71827 12.3365C2.56576 13.0081 3.7022 13.5479 4.97774 13.9737C7.54393 14.8304 11.0023 15.3338 14.7749 15.3338C18.5476 15.3338 22.006 14.8304 24.5721 13.9737C25.8477 13.5479 26.9841 13.0081 27.8316 12.3365C28.6645 11.6765 29.4159 10.721 29.4159 9.47742ZM3.06222 6.54963C3.06222 6.54963 3.06247 6.55779 3.06669 6.57162C3.07166 6.58794 3.08392 6.62017 3.11357 6.66846C3.17571 6.76969 3.30244 6.92189 3.53986 7.10899C4.02327 7.48996 4.8135 7.89708 5.92051 8.26608C8.11922 8.99898 11.2498 9.47742 14.7749 9.47742C18.3 9.47742 21.4307 8.99898 23.6294 8.26608C24.7364 7.89708 25.5266 7.48996 26.01 7.10899C26.2474 6.92189 26.3742 6.76969 26.4363 6.66846C26.466 6.62017 26.4782 6.58794 26.4832 6.57162C26.4875 6.5576 26.4877 6.54923 26.4877 6.54923C26.4877 6.54923 26.4878 6.542 26.4832 6.52685C26.4782 6.51053 26.466 6.4783 26.4363 6.43001C26.3742 6.32878 26.2474 6.17658 26.01 5.98948C25.5266 5.60851 24.7364 5.20139 23.6294 4.83239C21.4307 4.09948 18.3 3.62105 14.7749 3.62105C11.2498 3.62105 8.11922 4.09948 5.92051 4.83239C4.8135 5.20139 4.02327 5.60851 3.53986 5.98948C3.30244 6.17658 3.17571 6.32878 3.11357 6.43001C3.08392 6.4783 3.07166 6.51053 3.06669 6.52685C3.06219 6.5416 3.06222 6.54963 3.06222 6.54963Z"
                fill="#344054"
              />
              <path
                d="M28.818 14.6017C28.6452 14.6017 28.4822 14.678 28.3614 14.8016C28.1972 14.9695 28.0228 15.124 27.8447 15.2651C26.9963 15.9366 25.8587 16.4764 24.5819 16.9022C22.0132 17.7589 18.5513 18.2623 14.7749 18.2623C10.9985 18.2623 7.53669 17.7589 4.96792 16.9022C3.69112 16.4764 2.55353 15.9366 1.7052 15.2651C1.52706 15.124 1.35264 14.9695 1.18849 14.8016C1.06766 14.678 0.904696 14.6017 0.731847 14.6017C0.401684 14.6017 0.134033 14.8694 0.134033 15.1995V18.262C0.134033 19.5055 0.885397 20.4611 1.71827 21.1211C2.56576 21.7926 3.7022 22.3324 4.97774 22.7582C7.54393 23.615 11.0023 24.1183 14.7749 24.1183C18.5476 24.1183 22.006 23.615 24.5721 22.7582C25.8477 22.3324 26.9841 21.7926 27.8316 21.1211C28.6645 20.4611 29.4159 19.5055 29.4159 18.262V15.1996C29.4159 14.8694 29.1482 14.6017 28.818 14.6017Z"
                fill="#344054"
              />
              <path
                d="M28.818 23.3863C28.6452 23.3863 28.4822 23.4625 28.3614 23.5861C28.1972 23.7541 28.0228 23.9086 27.8447 24.0496C26.9963 24.7212 25.8587 25.2609 24.5819 25.6868C22.0132 26.5435 18.5513 27.0468 14.7749 27.0468C10.9985 27.0468 7.53669 26.5435 4.96792 25.6868C3.69112 25.2609 2.55353 24.7212 1.7052 24.0496C1.52706 23.9086 1.35264 23.7541 1.18849 23.5861C1.06766 23.4625 0.904696 23.3863 0.731847 23.3863C0.401684 23.3863 0.134033 23.6539 0.134033 23.9841V27.0465C0.134033 28.2901 0.885397 29.2456 1.71827 29.9056C2.56576 30.5772 3.7022 31.117 4.97774 31.5428C7.54393 32.3995 11.0023 32.9029 14.7749 32.9029C18.5476 32.9029 22.006 32.3995 24.5721 31.5428C25.8477 31.117 26.9841 30.5772 27.8316 29.9056C28.6645 29.2456 29.4159 28.2901 29.4159 27.0465V23.9841C29.4159 23.6539 29.1482 23.3863 28.818 23.3863Z"
                fill="#344054"
              />
            </svg>
          </Link>
          <div className="bg-white rounded-full h-[50px] flex-grow border border-gray-700 overflow-hidden flex justify-center items-center">
            <input
              className="flex-grow h-full border-none outline-none pl-5 pr-3"
              placeholder="Talk to agent"
            />

            <button className="bg-black text-white rounded-full h-[40px] w-[40px] flex-shrink-0 mr-1">{`->`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
