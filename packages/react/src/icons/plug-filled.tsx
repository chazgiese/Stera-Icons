import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugIconFilled = memo(
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
          d="M5.466 10.098a1.5 1.5 0 0 1 2.083.037l6.317 6.317A1.5 1.5 0 0 1 14 18.421l-.097.115-.635.68q-.012.015-.025.027a6 6 0 0 1-7.718.647l-2.817 2.817a1 1 0 0 1-1.414-1.414l2.817-2.817a6 6 0 0 1 .647-7.718l.026-.024zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.525a6 6 0 0 1-.672 7.743l-.683.635a1.5 1.5 0 0 1-2.083-.037l-.952-.952-.792.793a1 1 0 0 1-1.414-1.414l.792-.793L12.5 9.914l-.792.793a1 1 0 0 1-1.414-1.414l.792-.793-.95-.951a1.5 1.5 0 0 1-.038-2.082l.637-.684.023-.025a6 6 0 0 1 7.718-.647z"
        />
        <path
          fill="currentColor"
          d="M5.466 10.098a1.5 1.5 0 0 1 2.083.037l6.317 6.317A1.5 1.5 0 0 1 14 18.421l-.097.115-.635.68q-.012.015-.025.027a6 6 0 0 1-7.718.647l-2.817 2.817a1 1 0 1 1-1.414-1.414l2.817-2.817a6 6 0 0 1 .647-7.718l.026-.025zM21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.524a6 6 0 0 1-.672 7.744l-.683.635a1.5 1.5 0 0 1-2.083-.037l-.952-.952-.792.793a1 1 0 0 1-1.414-1.414l.792-.793L12.5 9.914l-.792.793a1 1 0 0 1-1.414-1.414l.792-.793-.95-.951a1.5 1.5 0 0 1-.038-2.082l.637-.684.023-.025a6 6 0 0 1 7.718-.648z"
        />
      </svg>
    ))
);
PlugIconFilled.displayName = "PlugIconFilled";
export { PlugIconFilled };
