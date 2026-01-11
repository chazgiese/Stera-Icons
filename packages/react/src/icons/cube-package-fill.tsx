import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageIconFill = memo(
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
          d="M11.194 1.514c.532-.11 1.08-.11 1.612 0 .636.13 1.216.466 2.01.907l4.2 2.333c.839.466 1.463.8 1.925 1.3.386.42.678.916.857 1.457.214.647.202 1.354.202 2.313v4.352c0 .959.012 1.666-.202 2.313a4 4 0 0 1-.857 1.456c-.462.502-1.086.835-1.924 1.301l-4.2 2.333c-.795.441-1.375.776-2.011.907-.532.11-1.08.11-1.612 0-.636-.13-1.216-.466-2.01-.907l-4.2-2.333c-.84-.466-1.463-.8-1.926-1.3a4 4 0 0 1-.856-1.457C1.988 15.842 2 15.135 2 14.176V9.824c0-.959-.012-1.666.202-2.313.179-.54.47-1.038.856-1.456.463-.502 1.087-.835 1.925-1.301l4.2-2.333c.795-.441 1.375-.776 2.011-.907m6.15 8.66c.163.604.156 1.27.156 2.15V13a1 1 0 0 1-2 0v-.676c0-.522-.003-.868-.016-1.117L13 12.587v7.7c.202-.103.47-.247.846-.456l4.2-2.334c.958-.532 1.233-.699 1.425-.907a2 2 0 0 0 .428-.728c.09-.269.1-.59.1-1.686V9.824c0-.522-.002-.868-.015-1.117zM5.954 6.503a29 29 0 0 0-.882.504L12 10.855l2.426-1.348a29 29 0 0 0-.88-.504L7.5 5.643zm6.45-3.03a2 2 0 0 0-.807 0c-.265.054-.536.192-1.443.696l-.596.33 4.959 2.755c.776.431 1.367.75 1.817 1.193l2.593-1.44a29 29 0 0 0-.881-.504l-4.2-2.334c-.907-.504-1.178-.642-1.443-.696"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CubePackageIconFill.displayName = "CubePackageIconFill";
export { CubePackageIconFill };
