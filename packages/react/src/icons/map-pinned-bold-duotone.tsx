import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinnedIconBoldDuotone = memo(
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
          d="M21.484 3.143A1.001 1.001 0 0 1 23 4L23 9.269a1 1 0 0 1-2 0l-.001-3.503-5.151 3.091a1 1 0 0 1-1.03 0L9.667 5.766v9.668l2.416 1.45a1 1 0 0 1-1.03 1.715l-2.387-1.433-6.151 3.691A1.001 1.001 0 0 1 1 20V8a1 1 0 0 1 .485-.857L8.157 3.14l.016-.01q.034-.019.07-.034l.036-.018.062-.022q.034-.013.07-.023l.008-.002.105-.02.005-.001.083-.007L8.654 3h.025l.042.003.08.007q.025.003.05.01.03.004.062.011l.024.006.067.024.042.014q.035.016.07.033l.043.022.012.007.01.006 6.151 3.69zM3 8.565v9.668l4.666-2.8V5.767z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 10c2.782 0 5 2.3 5 5.09 0 .917-.332 1.798-.749 2.557-.422.767-.972 1.481-1.5 2.082a19 19 0 0 1-1.934 1.893q-.088.075-.14.115l-.037.033-.012.008-.003.003-.002.001-.006.002a.99.99 0 0 1-1.235 0q-.002 0-.004-.002h-.003l-.003-.004-.012-.008q-.013-.013-.038-.033l-.14-.115a18.913 18.913 0 0 1-1.934-1.894c-.527-.6-1.077-1.314-1.499-2.081-.417-.76-.749-1.64-.749-2.556C13 12.3 15.217 10 18 10m0 2c-1.636 0-3 1.363-3 3.09 0 .449.168.988.501 1.593.328.596.778 1.188 1.25 1.724.448.51.9.948 1.249 1.269.35-.32.801-.76 1.249-1.269.472-.536.922-1.128 1.25-1.724.333-.605.501-1.144.501-1.592C21 13.363 19.636 12 18 12"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapPinnedIconBoldDuotone.displayName = "MapPinnedIconBoldDuotone";
export { MapPinnedIconBoldDuotone };
