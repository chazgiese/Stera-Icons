import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BasketFilled = memo(
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
          d="M11.398 1.701a1 1 0 0 1 1.278.062L18.39 7h.835c.45 0 .854-.001 1.182.028.291.026.62.083.935.247l.134.077.174.125c.394.307.676.737.798 1.225.102.406.047.791-.03 1.116-.076.32-.205.704-.347 1.13l-2.028 6.086c-.367 1.1-.621 1.915-1.137 2.532-.43.514-.981.912-1.604 1.157-.749.294-1.603.277-2.762.277H9.46c-1.159 0-2.013.017-2.762-.277a4 4 0 0 1-1.604-1.157c-.516-.617-.77-1.433-1.137-2.532l-2.028-6.086c-.143-.426-.271-.81-.347-1.13-.077-.325-.132-.71-.03-1.116l.062-.205c.167-.47.486-.874.91-1.144l.134-.078c.314-.164.643-.22.935-.247C3.92 6.998 4.325 7 4.774 7h.836l5.714-5.237zM12 10a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m-4.53.758a1 1 0 1 0-1.94.484l1.5 6a1 1 0 1 0 1.94-.484zm10.272-.728a1 1 0 0 0-1.212.728l-1.5 6a1 1 0 1 0 1.94.484l1.5-6a1 1 0 0 0-.728-1.212M8.572 7h6.857l-3.43-3.144z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BasketFilled.displayName = "BasketFilled";
export { BasketFilled };
