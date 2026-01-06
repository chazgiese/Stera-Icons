import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleSquareIconFillDuotone = memo(
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
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zm-.731 3.537a.3.3 0 0 0-.538 0l-1.468 2.937a4 4 0 0 1-1.788 1.789L5.537 11.73a.3.3 0 0 0 0 .538l2.938 1.468a4 4 0 0 1 1.788 1.79l1.468 2.936a.3.3 0 0 0 .538 0l1.468-2.937a4 4 0 0 1 1.79-1.789l2.936-1.468a.3.3 0 0 0 0-.538l-2.937-1.468a4 4 0 0 1-1.789-1.79z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.732 5.537a.3.3 0 0 1 .536 0l1.47 2.937a4 4 0 0 0 1.788 1.789l2.937 1.469a.3.3 0 0 1 0 .536l-2.937 1.47a4 4 0 0 0-1.789 1.788l-1.469 2.937a.3.3 0 0 1-.536 0l-1.469-2.937a4 4 0 0 0-1.789-1.789l-2.937-1.469a.3.3 0 0 1 0-.536l2.937-1.469a4 4 0 0 0 1.789-1.789z"
        />
      </svg>
    ))
);
SparkleSquareIconFillDuotone.displayName = "SparkleSquareIconFillDuotone";
export { SparkleSquareIconFillDuotone };
