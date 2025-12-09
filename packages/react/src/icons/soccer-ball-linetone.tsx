import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m20.93 10.874-.98-.822.371-1.487a9 9 0 0 0-1.464-2.395l-.864 3.467-2.271.737L13 8.04V5.554l2.768-1.73a9 9 0 0 0-2.58-.746L12 3.82l-1.188-.742c-.91.12-1.777.375-2.58.746L11 5.554V8.04l-2.723 2.334-2.27-.737-.864-3.467a9 9 0 0 0-1.464 2.395l.37 1.487-.98.822a9 9 0 0 0 .047 2.573l2.273-1.908 2.37.77 1.098 2.563-1.398 1.925-3.213-.225A9 9 0 0 0 5.99 18.7l1.26.088.454 1.123c.78.424 1.63.737 2.527.916l-1.153-2.854L10.511 16h2.978l1.434 1.973-1.153 2.853a9 9 0 0 0 2.527-.916l.454-1.123 1.26-.088a9 9 0 0 0 1.743-2.127l-3.213.225-1.4-1.925 1.1-2.563 2.37-.77 2.273 1.908a9 9 0 0 0 .046-2.573m-11.222.907L10.659 14h2.682l.95-2.219L12 9.816z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBallIconLinetone.displayName = "SoccerBallIconLinetone";
export { SoccerBallIconLinetone };
