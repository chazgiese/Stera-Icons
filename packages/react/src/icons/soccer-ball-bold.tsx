import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIconBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11q0 .3-.018.596l.103.086-.12.141c-.338 4.582-3.481 8.383-7.72 9.69l-.027.067-.087-.035a11 11 0 0 1-6.263 0l-.086.035-.027-.067c-4.24-1.308-7.383-5.108-7.722-9.69l-.118-.141.102-.086Q1 12.3 1 12C1 5.925 5.925 1 12 1m-1.49 15-1.433 1.973 1.152 2.851a9 9 0 0 0 3.54 0l1.154-2.851L13.489 16zm6.241 2.787-.454 1.122a9 9 0 0 0 1.712-1.21zm-10.76-.089c.519.467 1.093.875 1.711 1.211l-.453-1.122zm-2.875-5.253a8.9 8.9 0 0 0 1.132 3.127l3.211.225 1.398-1.925L7.76 12.31l-2.37-.77zM16.24 12.31l-1.098 2.563 1.399 1.925 3.21-.225c.559-.945.95-2 1.132-3.127L18.61 11.54zm-6.532-.528L10.659 14h2.682l.95-2.219L12 9.816zm-6.03-3.215a9 9 0 0 0-.606 2.305l.978-.82zm16.272 1.486.977.82a9 9 0 0 0-.607-2.306zM8.234 3.825a9 9 0 0 0-3.091 2.348l.864 3.464 2.27.737L11 8.04V5.554zM13 5.554V8.04l2.722 2.334 2.271-.737.863-3.464a9 9 0 0 0-3.091-2.348zM12 3q-.603.002-1.185.08L12 3.82l1.185-.74A9 9 0 0 0 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBallIconBold.displayName = "SoccerBallIconBold";
export { SoccerBallIconBold };
