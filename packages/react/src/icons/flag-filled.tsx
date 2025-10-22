import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconFilled = memo(
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
          d="M3.89 2.007c2.338-.26 4.022-.136 5.378.194 1.348.328 2.326.854 3.18 1.28.851.426 1.608.772 2.66.92 1.064.15 2.5.107 4.675-.377A1 1 0 0 1 21 5.001v11a1 1 0 0 1-.783.976c-2.325.517-4.014.598-5.388.405-1.385-.196-2.378-.663-3.276-1.112-.897-.448-1.67-.86-2.758-1.126-.926-.225-2.116-.348-3.795-.23v6.087a1 1 0 1 1-2 0V3l.005-.095a1 1 0 0 1 .885-.9"
        />
        <path
          fill="currentColor"
          d="M3.89 2.007c2.338-.26 4.022-.136 5.378.194 1.348.329 2.326.854 3.18 1.28.851.426 1.608.772 2.66.92 1.064.15 2.5.107 4.675-.376A1 1 0 0 1 21 5v11a1 1 0 0 1-.783.977c-2.325.516-4.014.598-5.388.404-1.385-.195-2.378-.662-3.276-1.111s-1.67-.861-2.758-1.126c-.926-.226-2.116-.35-3.795-.23v6.086a1 1 0 1 1-2 0v-18l.005-.095a1 1 0 0 1 .885-.899"
        />
      </svg>
    ))
);
FlagIconFilled.displayName = "FlagIconFilled";
export { FlagIconFilled };
