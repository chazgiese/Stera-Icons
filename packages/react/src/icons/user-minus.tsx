import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserMinusIcon = memo(
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
          d="M12 3.25a5.25 5.25 0 0 1 3.09 9.491.746.746 0 0 1-.683 1.274A10.5 10.5 0 0 0 12 13.75c-3.329 0-5.664 1.323-6.671 3.462-.137.291-.196.423-.226.548-.023.095-.035.212.003.443.011.066.075.237.208.447.134.21.262.341.317.38.284.195.522.22 1.569.22h5.124a.75.75 0 0 1 0 1.5H7.2c-.929 0-1.68.024-2.42-.485-.293-.202-.55-.524-.732-.81s-.363-.657-.421-1.008a2.5 2.5 0 0 1 .018-1.04c.073-.302.208-.58.327-.834.92-1.955 2.637-3.276 4.84-3.903A5.25 5.25 0 0 1 12 3.25m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M21 16.745a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
UserMinusIcon.displayName = "UserMinusIcon";
export { UserMinusIcon };
