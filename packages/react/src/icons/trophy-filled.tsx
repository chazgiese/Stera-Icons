import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrophyFilled = memo(
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
          d="M15.5 1.25c1.348 0 2.47.97 2.714 2.25h2.31a2.25 2.25 0 0 1 2.22 2.62l-.454 2.723a5 5 0 0 1-2.36 3.465l-2.915 1.75a1 1 0 0 1-.155.073 21 21 0 0 1-1.63 3.326A3.75 3.75 0 0 1 17.75 21v1a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-1a3.75 3.75 0 0 1 2.519-3.542 21 21 0 0 1-1.631-3.327 1 1 0 0 1-.153-.073l-2.916-1.75A5 5 0 0 1 1.71 8.843L1.256 6.12a2.25 2.25 0 0 1 2.22-2.62h2.31a2.77 2.77 0 0 1 2.713-2.25zm2.768 4.25c-.014 1.869-.117 3.793-.562 5.81l1.195-.717a3 3 0 0 0 1.416-2.08l.454-2.722a.25.25 0 0 0-.247-.291zm-14.792 0a.25.25 0 0 0-.247.291l.454 2.723a3 3 0 0 0 1.416 2.079l1.192.716c-.444-2.017-.546-3.94-.56-5.809z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TrophyFilled.displayName = "TrophyFilled";
export { TrophyFilled };
