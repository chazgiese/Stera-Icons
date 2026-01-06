import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DropletIconFillDuotone = memo(
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
          d="M11.423 3.82A35 35 0 0 0 8.75 6.523c-.971 1.104-1.922 2.35-2.625 3.628C5.419 11.44 5 12.69 5 13.818 5 17.806 8.155 21 12 21s7-3.194 7-7.182c0-1.13-.419-2.38-1.126-3.666-.703-1.277-1.653-2.524-2.625-3.628A35 35 0 0 0 12 3.308q-.251.216-.577.511"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1q.053 0 .102.005l.062.009.01.002a1 1 0 0 1 .443.198l.014.01.02.016.072.059q.095.076.266.22a36.781 36.781 0 0 1 3.762 3.684c1.028 1.169 2.078 2.536 2.875 3.985.792 1.441 1.374 3.033 1.374 4.63C21 18.868 16.991 23 12 23s-9-4.132-9-9.182c0-1.597.582-3.189 1.374-4.63.797-1.449 1.847-2.816 2.875-3.985a37 37 0 0 1 3.762-3.683q.171-.144.266-.221l.073-.059q.011-.01.02-.016l.012-.01A1 1 0 0 1 12 1m-.577 2.82A35 35 0 0 0 8.75 6.523c-.971 1.104-1.922 2.35-2.625 3.628C5.419 11.44 5 12.69 5 13.818 5 17.806 8.155 21 12 21s7-3.194 7-7.182c0-1.13-.419-2.38-1.126-3.666-.703-1.277-1.653-2.524-2.625-3.628A35 35 0 0 0 12 3.308q-.251.216-.577.511"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DropletIconFillDuotone.displayName = "DropletIconFillDuotone";
export { DropletIconFillDuotone };
