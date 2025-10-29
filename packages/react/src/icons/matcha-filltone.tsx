import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MatchaIconFilltone = memo(
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
          d="M21.071 11.546C22.211 12.446 23 13.608 23 15c0 1.963-1.566 3.472-3.481 4.43C17.543 20.418 14.883 21 12 21s-5.543-.582-7.519-1.57C2.566 18.472 1 16.963 1 15c0-1.392.787-2.554 1.928-3.454q.179.416.396.81A9 9 0 0 0 11.202 17h1.596a9 9 0 0 0 8.273-5.454"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3c2.55 0 4.894.286 6.632.769.862.239 1.632.543 2.21.922C21.379 5.044 22 5.634 22 6.5q0 .162-.027.312l-.225 2.13a9 9 0 0 1-1.072 3.413A9 9 0 0 1 12.798 17h-1.596a9 9 0 0 1-7.878-4.645 9 9 0 0 1-1.072-3.413l-.225-2.13A2 2 0 0 1 2 6.5c0-.866.621-1.456 1.158-1.809.578-.38 1.348-.683 2.21-.922C7.106 3.286 9.451 3 12 3m0 2c-2.421 0-4.578.273-6.097.695-.766.213-1.314.449-1.647.667q-.122.082-.18.135c.056.051.146.124.292.21.363.212.915.43 1.647.625l.195.05C7.708 7.758 9.739 8 12 8s4.291-.242 5.79-.618l.194-.05c.733-.196 1.284-.413 1.648-.626.144-.085.233-.157.29-.208a2 2 0 0 0-.178-.136c-.333-.218-.88-.454-1.647-.667C16.577 5.273 14.42 5 12 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MatchaIconFilltone.displayName = "MatchaIconFilltone";
export { MatchaIconFilltone };
