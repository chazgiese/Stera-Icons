import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffIconFill = memo(
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
          d="M14.195 18.457c-.522.042-1.171.043-1.995.043H6.8c-.832 0-1.486 0-2.01-.043-.532-.043-.976-.133-1.379-.339a3.5 3.5 0 0 1-1.53-1.529c-.205-.403-.295-.847-.338-1.378-.043-.525-.043-1.179-.043-2.01V10.8c0-.832 0-1.486.043-2.01q.029-.361.095-.674zM21.375 6.219A1.002 1.002 0 0 1 23 7v10a1.001 1.001 0 0 1-1.625.781l-2.706-2.165q.02-.152.034-.303c.048-.588.047-1.302.047-2.113v-2.4c0-.81.001-1.525-.047-2.112-.008-.102-.022-.203-.034-.305zM12.2 5.5c.832 0 1.486 0 2.011.043.531.043.975.134 1.378.339a3.5 3.5 0 0 1 1.53 1.53c.205.402.295.846.338 1.377.043.525.043 1.18.043 2.01V13.2c0 .832 0 1.486-.043 2.011q-.029.36-.096.672L4.804 5.543C5.327 5.5 5.976 5.5 6.8 5.5zM.229 4.365a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.271 1.543l-17-14a1 1 0 0 1-.136-1.407"
        />
      </svg>
    ))
);
VideoOffIconFill.displayName = "VideoOffIconFill";
export { VideoOffIconFill };
