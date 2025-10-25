import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsCurlySquareIconFilltone = memo(
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
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.5 6.5a1 1 0 1 1 0 2H9v1.419A3.2 3.2 0 0 1 8.227 12 3.2 3.2 0 0 1 9 14.081V15.5h.5a1 1 0 1 1 0 2h-.59A1.91 1.91 0 0 1 7 15.59v-1.509c0-.514-.329-.97-.816-1.133a1 1 0 0 1 0-1.896c.487-.163.816-.62.816-1.133v-1.51A1.91 1.91 0 0 1 8.91 6.5zM15.09 6.5A1.91 1.91 0 0 1 17 8.41v1.509c0 .514.329.97.816 1.133a1 1 0 0 1 0 1.896c-.487.163-.816.62-.816 1.133v1.51a1.91 1.91 0 0 1-1.91 1.909h-.59a1 1 0 1 1 0-2h.5v-1.419c0-.783.287-1.515.773-2.081A3.2 3.2 0 0 1 15 9.919V8.5h-.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
BracketsCurlySquareIconFilltone.displayName = "BracketsCurlySquareIconFilltone";
export { BracketsCurlySquareIconFilltone };
