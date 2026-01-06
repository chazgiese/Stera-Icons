import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayIconBoldDuotone = memo(
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
          d="M4.38 3.996c-.123.172-.246.487-.313 1.212C4.001 5.928 4 6.894 4 8.271v7.458c0 1.377.001 2.341.067 3.062.067.726.19 1.041.314 1.213l-.81.586-.81.587c-.446-.616-.61-1.374-.686-2.203C2 18.14 2 17.067 2 15.729V8.27c0-1.338-.001-2.412.075-3.246.076-.829.24-1.587.686-2.203z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.57 1.193c.756-.082 1.495.152 2.252.498.762.347 1.694.88 2.856 1.544l6.524 3.73c1.178.672 2.123 1.21 2.817 1.696.689.483 1.272 1.006 1.586 1.705a4 4 0 0 1 0 3.267c-.314.7-.897 1.223-1.586 1.705-.694.486-1.639 1.024-2.817 1.697l-6.524 3.729c-1.162.664-2.094 1.198-2.856 1.545-.757.345-1.496.58-2.253.498a4 4 0 0 1-2.808-1.63l1.619-1.174c.332.458.842.755 1.404.816.21.022.545-.028 1.208-.33.659-.3 1.497-.778 2.693-1.461l6.525-3.729c1.212-.693 2.061-1.179 2.662-1.6.605-.423.82-.689.906-.882a2 2 0 0 0 0-1.634c-.086-.194-.301-.46-.906-.883-.6-.42-1.45-.907-2.662-1.6L9.685 4.972C8.489 4.289 7.65 3.81 6.992 3.51c-.663-.302-.997-.352-1.208-.33a2 2 0 0 0-1.404.815L2.76 2.822a4 4 0 0 1 2.81-1.63"
        />
      </svg>
    ))
);
PlayIconBoldDuotone.displayName = "PlayIconBoldDuotone";
export { PlayIconBoldDuotone };
