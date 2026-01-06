import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserIconDuotone = memo(
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
          d="M15.187 12.67c2.203.627 3.92 1.948 4.84 3.903.12.254.255.532.328.834.08.331.081.657.018 1.04-.058.351-.239.72-.42 1.007-.182.287-.44.609-.733.81-.74.51-1.491.486-2.42.486H7.2c-.928 0-1.68.024-2.42-.485-.293-.202-.55-.524-.732-.81s-.363-.657-.42-1.008a2.5 2.5 0 0 1 .018-1.04c.073-.302.207-.58.327-.834.92-1.955 2.636-3.276 4.839-3.903A5.23 5.23 0 0 0 12 13.75a5.23 5.23 0 0 0 3.187-1.08M12 13.75c-3.328 0-5.663 1.323-6.67 3.462-.137.291-.196.423-.226.548-.023.095-.035.212.003.443.01.066.074.237.208.447.133.21.261.341.316.38.285.195.523.22 1.57.22H16.8c1.047 0 1.284-.024 1.57-.22a1.5 1.5 0 0 0 .316-.38c.133-.21.197-.381.208-.447.038-.23.026-.348.003-.443-.03-.125-.09-.257-.227-.548-1.007-2.139-3.341-3.462-6.67-3.462"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserIconDuotone.displayName = "UserIconDuotone";
export { UserIconDuotone };
