import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import chevronUp from "../assets/chevron-up.svg";
import userIcon from "../assets/user.svg";
import locationIcon from "../assets/location.svg";
import fileIcon from "../assets/file.svg";
import clsx from "clsx";

export const Radix = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (value: string[]) => {
    setValue(value);
  };

  return (
    <div className="w-[300px]">
      <Accordion.Root
        type="multiple"
        value={value}
        onValueChange={handleChange}
        className="border px-3 py-2 rounded-xl"
      >
        <Accordion.Item value="item-1">
          <div>
            <div className="flex justify-between font-medium items-center">
              <div className="underline">#1234</div>
              <div className="flex gap-x-2">
                <span className="px-2 h-[24px] inline-flex items-center bg-gray-200 rounded-md">
                  Assigned
                </span>
                <span className="px-2 h-[24px] inline-flex items-centers bg-green-100 text-green-500 rounded-md">
                  100%
                </span>
                <Accordion.Trigger className="bg-gray-100 inline-flex items-center justify-center w-[24px] h-[24px] rounded-md">
                  <img
                    src={chevronUp}
                    className={clsx("transform ", {
                      "rotate-0": value.includes("item-1"),
                      "rotate-180": !value.includes("item-1"),
                    })}
                  />
                </Accordion.Trigger>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <div>Start time:</div>
              <div className="font-medium">10:15:21</div>
            </div>
            <div className="mt-1">2 3/8 Pipe Job</div>
            <div
              className={clsx("items-center mt-1", {
                "inline-flex": !value.includes("item-1"),
                hidden: value.includes("item-1"),
              })}
            >
              <img src={userIcon} />
              <span className="ml-[10px]">Chevron</span>
            </div>
          </div>
          <Accordion.Content>
            <div className="border-t border-gray-200 mt-3 pt-1 pb-1">
              <div>
                <div className="inline-flex items-center mt-1">
                  <img src={userIcon} />
                  <span className="ml-[10px]">Chevron</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center mt-1">
                  <img src={locationIcon} />
                  <span className="ml-[10px]">Avery 1A-B</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center mt-1">
                  <img src={fileIcon} />
                  <span className="ml-[10px]">Description</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div>
                <span>Engineer(s) 2</span>{" "}
                <span className="font-medium">Ashlynn Philips</span>
              </div>
              <div className="font-medium mt-2">Ashlynn Philips</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};
