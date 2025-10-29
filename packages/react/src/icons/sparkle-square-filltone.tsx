import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleSquareIconFilltone = memo(
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
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zm-1 3.5a1 1 0 0 0-.957.709l-.538 1.768a3.8 3.8 0 0 1-2.528 2.528l-1.768.538a1 1 0 0 0 0 1.914l1.768.538a3.8 3.8 0 0 1 2.528 2.528l.538 1.768a1 1 0 0 0 1.914 0l.538-1.768a3.8 3.8 0 0 1 2.528-2.528l1.768-.538a1 1 0 0 0 0-1.914l-1.768-.538a3.8 3.8 0 0 1-2.528-2.528l-.538-1.768A1 1 0 0 0 12 5.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5.5a1 1 0 0 1 .957.709l.538 1.768a3.8 3.8 0 0 0 2.528 2.528l1.768.538a1 1 0 0 1 0 1.914l-1.768.538a3.8 3.8 0 0 0-2.528 2.528l-.538 1.768a1 1 0 0 1-1.914 0l-.538-1.768a3.8 3.8 0 0 0-2.528-2.528l-1.768-.538a1 1 0 0 1 0-1.914l1.768-.538a3.8 3.8 0 0 0 2.528-2.528l.538-1.768A1 1 0 0 1 12 5.5"
        />
      </svg>
    ))
);
SparkleSquareIconFilltone.displayName = "SparkleSquareIconFilltone";
export { SparkleSquareIconFilltone };
