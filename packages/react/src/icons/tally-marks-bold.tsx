import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TallyMarksIconBold = memo(
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
          d="M6 3a1 1 0 0 0-1 1v11.033l-3.515 2.11a1 1 0 0 0 1.03 1.714L5 17.365V20a1 1 0 1 0 2 0v-3.835l2-1.2V20a1 1 0 1 0 2 0v-6.235l2-1.2V20a1 1 0 1 0 2 0v-8.635l2-1.199V20a1 1 0 1 0 2 0V8.966l3.516-2.109a1 1 0 0 0-1.03-1.713L19 6.634V4a1 1 0 0 0-2 0v3.834l-2 1.2V4a1 1 0 0 0-2 0v6.233l-2 1.2V4a1 1 0 0 0-2 0v8.633l-2 1.2V4a1 1 0 0 0-1-1"
        />
      </svg>
    ))
);
TallyMarksIconBold.displayName = "TallyMarksIconBold";
export { TallyMarksIconBold };
