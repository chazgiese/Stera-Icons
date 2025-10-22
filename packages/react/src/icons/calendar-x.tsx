import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalendarXIcon = memo(
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
          d="M13.97 10.97a.75.75 0 1 1 1.06 1.06L13.06 14l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 15.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L10.94 14l-1.97-1.97a.75.75 0 1 1 1.06-1.06L12 12.94z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.6 2.25c1.107 0 1.984 0 2.688.057.713.058 1.317.18 1.868.46a4.75 4.75 0 0 1 2.076 2.077c.305.597.415 1.271.465 1.933q.017.215.027.44c.026.608.026 1.327.026 2.183v5.2c0 1.107 0 1.984-.057 2.688-.058.713-.18 1.317-.46 1.868a4.75 4.75 0 0 1-2.077 2.076c-.55.281-1.155.403-1.868.461-.704.058-1.58.057-2.688.057H9.4c-1.107 0-1.983 0-2.688-.057-.713-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.077c-.281-.55-.403-1.155-.461-1.868-.058-.704-.057-1.58-.057-2.688V9.4c0-.856 0-1.575.026-2.182q.01-.228.026-.44c.05-.664.16-1.336.466-1.934a4.75 4.75 0 0 1 2.076-2.076c.55-.281 1.155-.403 1.868-.461.705-.058 1.58-.057 2.688-.057zM3.75 9.4v5.2c0 1.132 0 1.937.052 2.566.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.252 1.31.302.63.052 1.434.052 2.566.052h5.2c1.132 0 1.937 0 2.566-.052.62-.05 1.005-.147 1.31-.303a3.25 3.25 0 0 0 1.42-1.42c.155-.304.252-.688.302-1.309.052-.63.052-1.434.052-2.566V9.4c0-.534-.001-.996-.007-1.4H3.757c-.006.404-.007.866-.007 1.4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalendarXIcon.displayName = "CalendarXIcon";
export { CalendarXIcon };
