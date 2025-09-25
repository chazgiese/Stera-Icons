import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleBold = memo(
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
          d="M10.367 2.395a4 4 0 0 1 3.267 0c.7.314 1.223.897 1.705 1.586.486.694 1.024 1.638 1.697 2.816l3.729 6.525c.664 1.162 1.197 2.093 1.545 2.855.345.758.58 1.497.498 2.253a4 4 0 0 1-1.63 2.809c-.616.446-1.374.61-2.203.686-.834.076-1.908.075-3.246.075H8.272c-1.339 0-2.412.001-3.246-.075-.83-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.809c-.082-.756.152-1.495.498-2.253.347-.761.88-1.693 1.545-2.855l3.728-6.525c.673-1.178 1.212-2.122 1.697-2.816.483-.689 1.006-1.272 1.706-1.586m2.45 1.826a2 2 0 0 0-1.633 0c-.194.086-.46.301-.884.907-.42.6-.907 1.449-1.6 2.66l-3.728 6.526c-.683 1.196-1.16 2.034-1.461 2.693-.302.662-.352.997-.33 1.208a2 2 0 0 0 .815 1.404c.172.124.487.247 1.212.313C5.93 20 6.894 20 8.272 20h7.457c1.377 0 2.342-.002 3.063-.068.726-.066 1.04-.189 1.212-.313a2 2 0 0 0 .815-1.404c.022-.21-.027-.546-.33-1.208-.3-.66-.777-1.497-1.46-2.693L15.3 7.79c-.693-1.212-1.179-2.06-1.6-2.661-.423-.606-.69-.82-.883-.907"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TriangleBold.displayName = "TriangleBold";
export { TriangleBold };
