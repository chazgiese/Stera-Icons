import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsCurlyCircle = memo(
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
          d="M9.5 6.75a.75.75 0 0 1 0 1.5h-.59a.16.16 0 0 0-.16.16v1.509c0 .799-.323 1.541-.862 2.081.54.54.862 1.282.862 2.081v1.51c0 .088.071.159.16.159h.59a.75.75 0 0 1 0 1.5h-.59a1.66 1.66 0 0 1-1.66-1.66v-1.509c0-.621-.398-1.173-.987-1.37a.75.75 0 0 1 0-1.423c.59-.196.987-.748.987-1.369v-1.51c0-.916.743-1.659 1.66-1.659zM15.09 6.75c.917 0 1.66.743 1.66 1.66v1.509c0 .621.398 1.173.987 1.37a.75.75 0 0 1 0 1.423c-.59.196-.987.748-.987 1.37v1.509a1.66 1.66 0 0 1-1.66 1.659h-.59a.75.75 0 0 1 0-1.5h.59a.16.16 0 0 0 .16-.16v-1.509c0-.799.323-1.541.862-2.081a2.94 2.94 0 0 1-.862-2.081v-1.51a.16.16 0 0 0-.16-.159h-.59a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BracketsCurlyCircle.displayName = "BracketsCurlyCircle";
export { BracketsCurlyCircle };
