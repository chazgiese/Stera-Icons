import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinAltIcon = memo(
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
          d="M12.307 2.326a1.96 1.96 0 0 1 2.772 0l6.596 6.596a1.96 1.96 0 0 1-2.005 3.245l-.635-.21a.5.5 0 0 0-.512.12l-2.442 2.442a.5.5 0 0 0-.137.452l.43 2.15a2 2 0 0 1-.547 1.806l-.72.72a2 2 0 0 1-2.828 0l-3.433-3.432-3.623 3.623a.75.75 0 0 1-1.06-1.06l3.622-3.624-3.43-3.432a2 2 0 0 1 0-2.828l.719-.72a2 2 0 0 1 1.807-.547l2.149.43a.5.5 0 0 0 .452-.137l2.443-2.442a.5.5 0 0 0 .12-.512l-.211-.635a1.96 1.96 0 0 1 .473-2.005m1.711 1.06a.46.46 0 0 0-.761.472l.21.634c.24.718.053 1.51-.482 2.046l-2.442 2.443a2 2 0 0 1-1.807.547l-2.15-.43a.5.5 0 0 0-.452.137l-.72.72a.5.5 0 0 0 0 .707l7.926 7.924a.5.5 0 0 0 .707 0l.72-.72a.5.5 0 0 0 .136-.452l-.43-2.149a2 2 0 0 1 .547-1.807l2.443-2.442a2 2 0 0 1 2.046-.482l.634.21a.46.46 0 0 0 .472-.762z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PushPinAltIcon.displayName = "PushPinAltIcon";
export { PushPinAltIcon };
