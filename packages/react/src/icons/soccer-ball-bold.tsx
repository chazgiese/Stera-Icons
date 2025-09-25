import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11q0 .3-.018.598l.103.086-.12.141c-.34 4.582-3.482 8.381-7.72 9.688l-.027.066-.085-.034a11 11 0 0 1-6.267 0l-.084.034-.027-.066c-4.239-1.307-7.382-5.107-7.722-9.688l-.118-.141.102-.086Q1 12.3 1 12C1 5.925 5.925 1 12 1m-1.49 15-1.433 1.972 1.152 2.853a9 9 0 0 0 3.54 0l1.154-2.853L13.49 16zm-4.52 2.697c.52.468 1.094.876 1.713 1.213l-.454-1.124zm10.761.09-.455 1.123a9 9 0 0 0 1.714-1.213zm-13.635-5.34a8.9 8.9 0 0 0 1.131 3.124l3.212.225 1.397-1.925-1.096-2.56-2.371-.77zm13.123-1.136-1.097 2.56 1.399 1.925 3.211-.225a8.9 8.9 0 0 0 1.13-3.124l-2.27-1.906zm-6.531-.53L10.659 14h2.682l.95-2.219L12 9.816zm-6.03-3.214c-.299.726-.505 1.5-.606 2.306l.978-.82zm16.272 1.487.977.819a9 9 0 0 0-.607-2.306zM8.234 3.825a9 9 0 0 0-3.091 2.348l.864 3.466 2.268.736L11 8.04V5.554zM13 5.554V8.04l2.724 2.335 2.27-.736.862-3.466a9 9 0 0 0-3.091-2.348zM12 3q-.603.002-1.185.08L12 3.82l1.185-.74A9 9 0 0 0 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBallBold.displayName = "SoccerBallBold";
export { SoccerBallBold };
