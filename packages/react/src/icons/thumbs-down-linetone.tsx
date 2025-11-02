import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsDownIconLinetone = memo(
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
          fillRule="evenodd"
          d="m11.5 2-.102.005a1 1 0 0 0 0 1.99L11.5 4a3 3 0 0 0-3 3v6.262a4.4 4.4 0 0 0-.855-.215 1 1 0 0 0-.29 1.978A2.5 2.5 0 0 0 7 15a4 4 0 0 1-4-4V7a5 5 0 0 1 5-5zM7.465 4.048A3 3 0 0 0 5 7v4l.01.204c.086.84.692 1.524 1.49 1.73V7c0-1.104.359-2.125.965-2.952"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.71 2a4 4 0 0 1 3.848 2.919h.002v.003l.003.008.01.03.035.117.127.423c.106.357.25.848.404 1.386.303 1.06.656 2.35.81 3.133.097.499.189 1.082.267 1.635.255 1.802-1.167 3.346-2.939 3.346h-1.82c.316 1.067.497 2.306.37 3.44-.097.865-.384 1.766-1.032 2.46-.671.719-1.621 1.1-2.795 1.1a1 1 0 0 1-.868-.504l-3.008-5.264a2.45 2.45 0 0 0-1.768-1.207 1 1 0 1 1 .289-1.978 4.45 4.45 0 0 1 3.216 2.193l2.688 4.705c.38-.078.62-.235.784-.41.255-.273.439-.708.507-1.317.14-1.24-.247-2.797-.734-3.77A1 1 0 0 1 15 13h3.278c.603 0 1.036-.515.957-1.065a31 31 0 0 0-.25-1.532c-.134-.684-.462-1.894-.769-2.967-.151-.53-.294-1.013-.398-1.365l-.125-.417-.035-.113-.008-.03-.002-.007-.001-.001-.01-.03A2 2 0 0 0 15.71 4H11.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ThumbsDownIconLinetone.displayName = "ThumbsDownIconLinetone";
export { ThumbsDownIconLinetone };
