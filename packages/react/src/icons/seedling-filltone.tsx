import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SeedlingIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2 7c3.01 0 5.66 1.003 7.071 2.414a4 4 0 0 1 .618 4.861l-2.482-2.482a1 1 0 1 0-1.414 1.414l2.482 2.483a4 4 0 0 1-4.86-.619C2.002 13.661 1 11.01 1 8V7zM22.985 4.016c0 2.555-.326 4.418-.897 5.877-.577 1.473-1.38 2.47-2.224 3.315a5 5 0 0 1-6.033.796c.32-.598.73-1.151 1.219-1.64l1.657-1.657a1 1 0 0 0-1.414-1.414l-1.657 1.657a9 9 0 0 0-1.328 1.695 5 5 0 0 1 .485-6.507c.845-.845 1.841-1.648 3.315-2.225 1.459-.57 3.322-.897 5.877-.897h1z" />
        </g>
        <path
          fill="currentColor"
          d="M15.293 9.293a1 1 0 1 1 1.414 1.414l-1.657 1.657a7 7 0 0 0-2.05 4.95V21a1 1 0 0 1-.364.772.997.997 0 0 1-1.408-.136A1 1 0 0 1 11 21v-1.343c0-.795-.316-1.56-.879-2.122l-4.328-4.328a1 1 0 1 1 1.414-1.414l3.936 3.936a9 9 0 0 1 2.493-4.779z"
        />
      </svg>
    ))
);
SeedlingIconFilltone.displayName = "SeedlingIconFilltone";
export { SeedlingIconFilltone };
