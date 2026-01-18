import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinAltIconDuotone = memo(
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
          d="M12.307 2.326a1.96 1.96 0 0 1 2.771 0l6.597 6.596a1.96 1.96 0 0 1-2.006 3.245l-.634-.21a.5.5 0 0 0-.512.12l-2.443 2.442a.5.5 0 0 0-.136.452l.43 2.15a2 2 0 0 1-.548 1.806l-.72.72a2 2 0 0 1-2.827 0l-7.925-7.925a2 2 0 0 1 0-2.828l.72-.72a2 2 0 0 1 1.806-.547l2.15.43a.5.5 0 0 0 .452-.137l2.442-2.442a.5.5 0 0 0 .12-.512l-.21-.635a1.96 1.96 0 0 1 .473-2.005m1.71 1.06a.46.46 0 0 0-.76.472l.21.634c.24.718.053 1.51-.482 2.046l-2.443 2.443a2 2 0 0 1-1.806.547l-2.15-.43a.5.5 0 0 0-.452.137l-.72.72a.5.5 0 0 0 0 .707l7.925 7.924a.5.5 0 0 0 .707 0l.72-.72a.5.5 0 0 0 .137-.452l-.43-2.149a2 2 0 0 1 .547-1.807l2.442-2.442a2 2 0 0 1 2.047-.482l.634.21a.46.46 0 0 0 .472-.762z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m8.846 16.215-3.623 3.624a.751.751 0 0 1-1.06-1.062l3.621-3.624z"
        />
      </svg>
    ))
);
PushPinAltIconDuotone.displayName = "PushPinAltIconDuotone";
export { PushPinAltIconDuotone };
