import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M15.44 18.187c-.363.156-.762.232-1.23.27-.524.043-1.178.043-2.01.043H6.8c-.832 0-1.486 0-2.01-.043-.532-.043-.976-.133-1.379-.339a3.5 3.5 0 0 1-1.53-1.53c-.205-.402-.295-.846-.338-1.377-.043-.525-.043-1.18-.043-2.01V10.8c0-.832 0-1.486.043-2.01.043-.532.133-.976.339-1.379q.069-.136.15-.265zM21.375 6.219A1.002 1.002 0 0 1 23 7v10a1.001 1.001 0 0 1-1.625.781l-2.706-2.165q.02-.152.034-.303c.048-.588.047-1.302.047-2.113v-2.4c0-.81.001-1.525-.047-2.113-.008-.1-.022-.202-.034-.304zM12.2 5.5c.832 0 1.486 0 2.01.043.532.043.976.133 1.379.339a3.5 3.5 0 0 1 1.53 1.53c.205.402.295.846.338 1.377.043.525.043 1.18.043 2.01V13.2c0 .832 0 1.486-.043 2.01-.043.532-.133.976-.339 1.379a4 4 0 0 1-.151.265L3.559 5.813c.363-.158.763-.232 1.23-.27C5.314 5.5 5.97 5.5 6.8 5.5z" />
        </g>
        <path
          fill="currentColor"
          d="M.229 4.365a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.271 1.543l-17-14a1 1 0 0 1-.136-1.407"
        />
      </svg>
    ))
);
VideoOffIconFillDuotone.displayName = "VideoOffIconFillDuotone";
export { VideoOffIconFillDuotone };
