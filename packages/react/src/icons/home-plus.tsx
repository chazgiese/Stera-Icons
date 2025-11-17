import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomePlusIcon = memo(
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
          d="M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.697 2.841a3.75 3.75 0 0 1 4.606 0l6 4.666a3.75 3.75 0 0 1 1.447 2.96V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-7.533a3.75 3.75 0 0 1 1.447-2.96zm3.685 1.184a2.25 2.25 0 0 0-2.764 0l-6 4.667a2.25 2.25 0 0 0-.868 1.775V18A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18v-7.533c0-.694-.32-1.35-.868-1.775z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomePlusIcon.displayName = "HomePlusIcon";
export { HomePlusIcon };
