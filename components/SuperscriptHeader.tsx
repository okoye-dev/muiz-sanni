import { cn } from "@/utils";
import React, { FC } from "react";

interface IProps {
  text: string;
  superscript?: string;
  className?: string;
  subscriptClasses?: string;
  plainSubscript?: boolean;
}

const SuperscriptHeader: FC<IProps> = ({
  text,
  superscript,
  className,
  plainSubscript,
  subscriptClasses,
}) => {
  return (
    <div className={cn("flex items-start tracking-tighter", className)}>
      {text}
      <small
        className={cn(
          plainSubscript
            ? "-translate-y-2 pl-2 text-[0.5rem] font-normal tracking-wide text-white/30"
            : "px-1 text-lg font-bold tracking-tighter text-white/50 xs:-translate-y-1 xs:text-2xl sm:text-3xl md:text-[3vw] lg:translate-y-[1vw] lg:px-4 lg:text-[4vw]",
          subscriptClasses,
        )}
      >
        {!plainSubscript && "0"}
        {superscript}
      </small>
    </div>
  );
};

export default SuperscriptHeader;
