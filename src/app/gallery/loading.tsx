import { Loader2 } from "lucide-react";
import React from "react";

type Props = {};

const LoadingComponent = (props: Props) => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default LoadingComponent;
