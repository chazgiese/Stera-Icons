import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreePalmIcon = memo(
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
          d="M14.404 2.038C16.811.642 19.8 1.155 21.561 3.14a.75.75 0 0 1-.185 1.147L16.99 6.83a5.8 5.8 0 0 1 1.605.636C21 8.86 22.05 11.712 21.22 14.234a.75.75 0 0 1-1.09.414l-7.014-4.067c.134 2.74.09 6.474-2.198 11.812a1 1 0 0 1-1.838-.787c2.185-5.098 2.165-8.463 2.023-11.155l-7.237 4.197a.75.75 0 0 1-1.088-.414c-.83-2.522.22-5.373 2.625-6.768a5.8 5.8 0 0 1 1.604-.636L2.624 4.287a.75.75 0 0 1-.186-1.147C4.2 1.155 7.19.642 9.595 2.038A5.82 5.82 0 0 1 12 4.708a5.82 5.82 0 0 1 2.405-2.67m-4.625 6.4a4.27 4.27 0 0 0-3.622.325 4.3 4.3 0 0 0-2.144 4.067l6.671-3.87zm8.064.325a4.27 4.27 0 0 0-3.623-.327l-.905.526 6.67 3.868a4.3 4.3 0 0 0-2.142-4.067m-9-5.427a4.25 4.25 0 0 0-4.576.17l6.718 3.896a4.3 4.3 0 0 0-2.142-4.066m10.888.17a4.25 4.25 0 0 0-4.574-.17 4.3 4.3 0 0 0-2.143 4.066z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreePalmIcon.displayName = "TreePalmIcon";
export { TreePalmIcon };
