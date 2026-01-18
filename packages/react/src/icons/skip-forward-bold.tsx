import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SkipForwardIconBold = memo(
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
          d="M4.857 2.837c.451-.032.84.135 1.125.283.293.152.64.376 1.024.623l9.441 6.07c.332.213.64.41.873.592.234.183.513.438.673.817a2 2 0 0 1 0 1.556c-.16.379-.439.634-.673.817-.233.182-.54.379-.873.592l-9.441 6.07c-.385.247-.731.47-1.024.623-.284.148-.674.315-1.125.283a2 2 0 0 1-1.458-.796c-.27-.362-.34-.78-.37-1.1C3 18.94 3 18.528 3 18.07V5.931c0-.458 0-.87.03-1.199.029-.32.098-.737.37-1.1a2 2 0 0 1 1.457-.795m.164 2.078C5 5.13 5 5.434 5 5.93v12.138c0 .497 0 .8.02 1.016l.005.035.034-.015c.191-.1.448-.262.866-.53l9.44-6.07c.365-.235.581-.375.726-.488l.02-.017-.02-.018c-.145-.113-.361-.253-.726-.487l-9.44-6.07a13 13 0 0 0-.866-.53q-.018-.01-.034-.016-.001.016-.004.036"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M20 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
SkipForwardIconBold.displayName = "SkipForwardIconBold";
export { SkipForwardIconBold };
