import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MatchaIconFilled = memo(
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
          d="M12 3c2.55 0 4.894.286 6.632.769.862.239 1.632.543 2.21.922C21.379 5.044 22 5.634 22 6.5q-.001.158-.026.304l-.226 2.138a9 9 0 0 1-.677 2.601C22.201 12.436 23 13.603 23 15c0 1.963-1.566 3.472-3.481 4.43C17.543 20.418 14.883 21 12 21s-5.543-.582-7.519-1.57C2.566 18.472 1 16.963 1 15c0-1.396.799-2.564 1.928-3.457a9 9 0 0 1-.676-2.6l-.226-2.14A2 2 0 0 1 2 6.5c0-.866.621-1.456 1.158-1.809.578-.38 1.348-.683 2.21-.922C7.106 3.286 9.451 3 12 3m8.066 10.306A9 9 0 0 1 12.798 17h-1.596a9 9 0 0 1-7.27-3.694C3.27 13.896 3 14.488 3 15c0 .798.673 1.789 2.376 2.64C7.019 18.463 9.36 19 12 19s4.98-.538 6.624-1.36C20.327 16.79 21 15.799 21 15c0-.512-.27-1.103-.934-1.694M12 5c-2.421 0-4.578.273-6.097.695-.766.213-1.314.449-1.647.667a2 2 0 0 0-.183.138q.06.055.183.138c.333.218.88.454 1.647.667C7.423 7.727 9.58 8 12 8s4.578-.273 6.097-.695c.766-.213 1.314-.449 1.647-.667.083-.055.14-.102.182-.138a2 2 0 0 0-.182-.138c-.333-.218-.88-.454-1.647-.667C16.577 5.273 14.42 5 12 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MatchaIconFilled.displayName = "MatchaIconFilled";
export { MatchaIconFilled };
