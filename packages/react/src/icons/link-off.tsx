import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkOffIcon = memo(
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
          d="M5.579 10.532a.75.75 0 0 1 1.06 1.06L4.945 13.29a4.078 4.078 0 0 0 5.767 5.767l1.696-1.696a.75.75 0 1 1 1.06 1.061l-1.696 1.695a5.578 5.578 0 0 1-7.887-7.887zM3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06M12.228 3.884a5.577 5.577 0 1 1 7.888 7.888l-1.695 1.696a.75.75 0 0 1-1.06-1.06l1.694-1.697a4.078 4.078 0 0 0-5.766-5.767L11.593 6.64a.75.75 0 0 1-1.06-1.06z"
        />
      </svg>
    ))
);
LinkOffIcon.displayName = "LinkOffIcon";
export { LinkOffIcon };
