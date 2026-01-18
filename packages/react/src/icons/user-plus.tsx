import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserPlusIcon = memo(
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
          d="M17.495 13.25a.75.75 0 0 1 .75.75v2.745H21a.75.75 0 0 1 0 1.5h-2.755V21a.75.75 0 0 1-1.5 0v-2.755H14a.75.75 0 0 1 0-1.5h2.745V14a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3.25a5.25 5.25 0 0 1 3.091 9.491.746.746 0 0 1-.683 1.274A10.5 10.5 0 0 0 12 13.75c-3.328 0-5.664 1.323-6.67 3.462-.138.291-.196.423-.226.548-.023.095-.035.212.003.443.01.066.074.237.208.447.133.21.261.341.316.38.285.195.523.22 1.57.22h5.124a.75.75 0 0 1 0 1.5H7.2c-.928 0-1.68.024-2.42-.485-.292-.202-.55-.524-.732-.81s-.363-.657-.42-1.008a2.5 2.5 0 0 1 .018-1.04c.073-.302.207-.58.327-.834.92-1.955 2.636-3.276 4.839-3.903A5.25 5.25 0 0 1 12 3.25m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserPlusIcon.displayName = "UserPlusIcon";
export { UserPlusIcon };
