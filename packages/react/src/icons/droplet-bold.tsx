import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconBold = memo(
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
          d="M11.378 1.218a1 1 0 0 1 1.244 0l.003.002.006.004.02.017.072.058q.095.077.266.221a36.78 36.78 0 0 1 3.762 3.684c1.028 1.168 2.078 2.536 2.875 3.985.792 1.44 1.374 3.032 1.374 4.63C21 18.869 16.991 23 12 23s-9-4.132-9-9.181c0-1.598.582-3.19 1.374-4.63.797-1.45 1.847-2.817 2.875-3.985a37 37 0 0 1 3.762-3.684q.171-.144.266-.22l.073-.06.02-.016.005-.004zm.045 2.602A35 35 0 0 0 8.75 6.525c-.972 1.104-1.922 2.35-2.625 3.628C5.418 11.439 5 12.689 5 13.819 5 17.806 8.155 21 12 21s7-3.194 7-7.181c0-1.13-.419-2.38-1.126-3.666-.703-1.278-1.653-2.524-2.625-3.628A35 35 0 0 0 12 3.308a34 34 0 0 0-.577.512"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.378 1.217a1 1 0 0 1 1.244 0l.003.002.006.004.02.017.072.058q.095.077.266.221a36.781 36.781 0 0 1 3.762 3.684c1.028 1.168 2.078 2.536 2.875 3.985.792 1.44 1.374 3.032 1.374 4.63C21 18.868 16.991 23 12 23s-9-4.133-9-9.182c0-1.598.582-3.19 1.374-4.63.797-1.45 1.847-2.817 2.875-3.985a37 37 0 0 1 3.762-3.684q.171-.144.266-.22l.073-.06.02-.016.005-.004zm.045 2.602A35 35 0 0 0 8.75 6.524c-.972 1.104-1.922 2.35-2.625 3.628C5.418 11.438 5 12.688 5 13.818 5 17.805 8.155 21 12 21s7-3.195 7-7.182c0-1.13-.419-2.38-1.126-3.666-.703-1.278-1.653-2.524-2.625-3.628A35 35 0 0 0 12 3.307q-.251.218-.577.512"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DropletIconBold.displayName = "DropletIconBold";
export { DropletIconBold };
