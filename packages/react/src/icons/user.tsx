import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserIcon = memo(
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
          d="M12 3.25a5.25 5.25 0 0 1 3.187 9.42c2.204.627 3.92 1.948 4.841 3.903.12.254.254.532.327.834.08.331.082.657.019 1.04-.058.351-.24.72-.421 1.007-.182.287-.44.609-.733.81-.74.51-1.49.486-2.42.486H7.2c-.928 0-1.68.024-2.419-.485-.293-.202-.55-.524-.732-.81s-.363-.657-.421-1.008a2.5 2.5 0 0 1 .018-1.04c.073-.302.208-.58.327-.834.92-1.955 2.637-3.276 4.84-3.903A5.25 5.25 0 0 1 12 3.25m0 10.5c-3.328 0-5.662 1.323-6.67 3.462-.136.291-.196.423-.226.548-.023.095-.035.212.003.443.011.066.075.237.208.447s.262.341.317.38c.284.195.522.22 1.569.22h9.6c1.046 0 1.284-.024 1.569-.22.055-.039.183-.17.316-.38.134-.21.198-.381.208-.447.038-.23.026-.348.003-.443-.03-.125-.09-.257-.226-.548-1.007-2.139-3.342-3.462-6.67-3.462m0-9a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserIcon.displayName = "UserIcon";
export { UserIcon };
