import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingCircleIcon = memo(
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
          d="M11.965 6.038c1.44-.207 3.088.428 4.1 2.055a.75.75 0 0 1-1.273.793c-.701-1.127-1.769-1.485-2.614-1.364-.851.123-1.428.695-1.428 1.518v2.004h2.393a.75.75 0 0 1 0 1.5H10.75v2.003c0 .58-.226 1.065-.52 1.453H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.287-1.443l.01-.004.048-.022q.069-.03.192-.094c.163-.086.376-.212.584-.37.459-.347.703-.703.703-1.02v-2.003H8a.75.75 0 0 1 0-1.5h1.25V9.04c0-1.715 1.28-2.795 2.715-3.002"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PoundSterlingCircleIcon.displayName = "PoundSterlingCircleIcon";
export { PoundSterlingCircleIcon };
