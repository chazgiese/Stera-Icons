import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconDuotone = memo(
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
          d="M4.925 2.386c1.922-.241 3.27-.207 4.333-.001 1.076.208 1.814.585 2.488.94.667.35 1.26.672 2.142.894.885.223 2.097.353 3.96.24.994-.061 1.902.712 1.902 1.761v7.918c0 .892-.68 1.659-1.59 1.73-2.032.156-3.447.045-4.55-.218-1.108-.265-1.86-.675-2.53-1.033-.66-.352-1.237-.652-2.089-.826-.754-.153-1.76-.214-3.241-.07v-1.504c1.511-.137 2.63-.08 3.54.104 1.08.22 1.82.613 2.496.973.667.356 1.27.681 2.173.897.908.216 2.16.33 4.085.181a.23.23 0 0 0 .206-.234V6.22c0-.132-.127-.276-.311-.265-1.97.12-3.344-.011-4.417-.282-1.077-.271-1.816-.675-2.473-1.02-.65-.341-1.226-.63-2.076-.795-.753-.146-1.755-.2-3.223-.055v-.67a.75.75 0 0 0-.825-.747"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5 2.383a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0V3.133a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
FlagIconDuotone.displayName = "FlagIconDuotone";
export { FlagIconDuotone };
