import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCubeIconFillDuotone = memo(
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
          d="M5.409 9.825c.148-.019.286.056.563.205l5.095 2.746v5.462c0 .284 0 .426-.068.538a.5.5 0 0 1-.373.224c-.131.006-.25-.057-.484-.184l-3.08-1.66c-.514-.276-.967-.507-1.303-.866a2.8 2.8 0 0 1-.614-1.028C4.99 14.794 5 14.285 5 13.702v-3.127c0-.29 0-.436.087-.557a.5.5 0 0 1 .322-.193M18.397 9.842c.24-.073.541.105.593.35.01.046.01.07.01.118v3.817c-.004.41-.028.784-.145 1.134a2.8 2.8 0 0 1-.613 1.029c-.337.358-.79.59-1.304.867l-3.08 1.66c-.234.126-.352.19-.482.183a.5.5 0 0 1-.374-.224c-.068-.112-.069-.254-.069-.538v-5.461l5.327-2.87c.062-.034.093-.051.137-.065M11.45 5.054a2.8 2.8 0 0 1 1.1 0c.442.089.843.316 1.308.567l3.08 1.66.103.054c.267.143.4.215.465.357a.5.5 0 0 1 0 .39c-.065.142-.21.22-.498.377L12 11.157l-5.007-2.7c-.289-.155-.434-.232-.499-.374a.5.5 0 0 1 0-.39c.065-.143.199-.214.465-.357l.103-.056 3.08-1.66c.465-.25.867-.477 1.309-.566"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
      </svg>
    ))
);
ScanCubeIconFillDuotone.displayName = "ScanCubeIconFillDuotone";
export { ScanCubeIconFillDuotone };
