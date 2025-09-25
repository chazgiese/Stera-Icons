import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalStarFilled = memo(
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
          d="M11.064 9.762c.427-.683 1.444-.682 1.871 0l.082.156 1.433 3.314 3.61.333c.963.09 1.363 1.291.627 1.935l-2.72 2.38.795 3.518c.216.954-.816 1.687-1.645 1.197L12 20.75l-3.117 1.844c-.83.49-1.862-.242-1.646-1.197l.795-3.518-2.719-2.38c-.736-.644-.336-1.845.628-1.935l3.608-.333 1.433-3.314z"
        />
        <path
          fill="currentColor"
          d="m16.25 11.523-.864.539-.083-.007-1.138-2.633-.082-.172c-.875-1.666-3.29-1.666-4.165 0l-.083.172-1.14 2.633-.081.007-.863-.54V1h8.5zM6.25 10.585 4.223 9.318c-.22-.137-.517-.311-.74-.57a2 2 0 0 1-.39-.704c-.102-.327-.091-.672-.091-.93V3.6c0-.264-.002-.522.016-.739.019-.228.063-.498.201-.77.192-.375.498-.682.874-.873.271-.138.542-.183.77-.201C5.079.999 5.337 1 5.6 1h.65zM18.4 1c.264 0 .523-.001.74.017.228.018.498.063.769.2.329.169.605.424.797.737l.077.138.087.203c.071.2.1.395.114.566.018.217.017.475.017.739v3.513c0 .26.01.604-.092.931a2 2 0 0 1-.39.703c-.222.26-.52.434-.74.571l-2.028 1.267V1z"
        />
      </svg>
    ))
);
MedalStarFilled.displayName = "MedalStarFilled";
export { MedalStarFilled };
