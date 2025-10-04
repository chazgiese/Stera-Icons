import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Pencil = memo(
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
          d="M15.97 2.47c.774-.773 1.734-1 2.661-.837.896.159 1.736.673 2.4 1.336.663.664 1.178 1.505 1.336 2.4.164.927-.063 1.888-.837 2.662l-12 12a.75.75 0 0 1-.348.197l-6 1.5a.75.75 0 0 1-.91-.91l1.5-6 .032-.096a.8.8 0 0 1 .166-.252zm-9.6 12.64c-.432-.076-.836 0-1.199.294l-1.14 4.564 4.566-1.141c.292-.363.369-.766.293-1.197-.092-.517-.413-1.093-.92-1.6s-1.083-.829-1.6-.92m9-9c-.488-.086-.942.023-1.34.42l-7.155 7.155c.804.202 1.552.681 2.155 1.284s1.082 1.352 1.284 2.156l7.158-7.158c.395-.397.504-.85.418-1.337a2.5 2.5 0 0 0-.304-.803 3.8 3.8 0 0 0-.616-.796q-.287-.286-.593-.49a2.7 2.7 0 0 0-1.008-.431m3-3c-.488-.086-.942.023-1.34.42l-1.155 1.155c.804.202 1.552.681 2.155 1.284.604.604 1.082 1.353 1.284 2.157L20.47 6.97c.398-.397.506-.852.42-1.34-.092-.517-.413-1.092-.92-1.6-.508-.507-1.083-.828-1.6-.92"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Pencil.displayName = "Pencil";
export { Pencil };
