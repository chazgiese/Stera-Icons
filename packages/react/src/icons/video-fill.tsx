import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoIconFill = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M12.2 5.5c.832 0 1.486 0 2.01.043.532.043.976.133 1.379.339a3.5 3.5 0 0 1 1.53 1.53c.205.402.295.846.338 1.377.043.525.043 1.18.043 2.01V13.2c0 .832 0 1.486-.043 2.01-.043.532-.133.976-.339 1.379a3.5 3.5 0 0 1-1.53 1.53c-.402.205-.846.295-1.377.338-.525.043-1.18.043-2.01.043H6.8c-.832 0-1.486 0-2.01-.043-.532-.043-.976-.133-1.379-.339a3.5 3.5 0 0 1-1.53-1.53c-.205-.402-.295-.846-.338-1.377-.043-.525-.043-1.18-.043-2.01V10.8c0-.832 0-1.486.043-2.01.043-.532.133-.976.339-1.379a3.5 3.5 0 0 1 1.53-1.53c.402-.205.846-.295 1.377-.338C5.314 5.5 5.97 5.5 6.8 5.5zM21.375 6.218A1.002 1.002 0 0 1 23 7v10a1 1 0 0 1-1.625.78l-2.706-2.164q.02-.153.034-.304c.048-.588.047-1.301.047-2.112v-2.4c0-.811.001-1.525-.047-2.113-.008-.101-.022-.202-.034-.305z"
        />
      </svg>
    ))
);
VideoIconFill.displayName = "VideoIconFill";
export { VideoIconFill };
