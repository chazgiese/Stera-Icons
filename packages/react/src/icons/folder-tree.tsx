import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderTreeIcon = memo(
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
          d="M14.831 13.25a2 2 0 0 1 1.664.89l.406.61h2.849a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2zm-.581 1.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H16.5a.75.75 0 0 1-.624-.334l-.629-.943a.5.5 0 0 0-.416-.223z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M3 2.25a.75.75 0 0 1 .75.75v1.5c0 .966.784 1.75 1.75 1.75H9a.75.75 0 0 1 0 1.5H5.5a3.23 3.23 0 0 1-1.75-.513V15.5c0 .966.784 1.75 1.75 1.75H9a.75.75 0 0 1 0 1.5H5.5a3.25 3.25 0 0 1-3.25-3.25V5q0-.082.018-.16a3 3 0 0 1-.018-.34V3A.75.75 0 0 1 3 2.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.831 2.25a2 2 0 0 1 1.664.89l.406.61h2.849a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2zm-.581 1.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H16.5a.75.75 0 0 1-.624-.334l-.629-.943a.5.5 0 0 0-.416-.223z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderTreeIcon.displayName = "FolderTreeIcon";
export { FolderTreeIcon };
