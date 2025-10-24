import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconFilled = memo(
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
          d="M8.93 3.122a5 5 0 0 1 6.14 0l5 3.888A5 5 0 0 1 22 10.957V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.043c0-1.543.713-3 1.93-3.947zM13.905 10c-.845 0-1.573.496-1.904 1.21a2.1 2.1 0 0 0-1.904-1.21C8.939 10 8 10.93 8 12.077c0 .897.49 1.603.688 1.879C9.64 15.276 10.963 16.178 12 17c1.037-.822 2.36-1.723 3.313-3.044.198-.276.687-.982.687-1.88a2.087 2.087 0 0 0-2.096-2.075"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.93 3.121a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044c0-1.542.713-2.999 1.93-3.946zm4.974 6.88c-.845 0-1.573.496-1.904 1.21a2.1 2.1 0 0 0-1.904-1.21C8.939 10 8 10.93 8 12.076c0 .897.49 1.603.688 1.878C9.64 15.276 10.963 16.178 12 17c1.037-.822 2.36-1.724 3.313-3.045.198-.275.687-.982.687-1.879A2.087 2.087 0 0 0 13.904 10"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconFilled.displayName = "HomeHeartIconFilled";
export { HomeHeartIconFilled };
