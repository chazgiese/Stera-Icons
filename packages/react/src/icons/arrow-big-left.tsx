import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigLeftIcon = memo(
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
          d="M12.117 2.323c.787-.786 2.133-.229 2.133.884V7.25H18A2.75 2.75 0 0 1 20.75 10v4A2.75 2.75 0 0 1 18 16.75h-3.75v4.043c0 1.114-1.346 1.671-2.133.884l-8.263-8.263a2 2 0 0 1 0-2.828zm-7.203 9.324a.5.5 0 0 0 0 .707l7.836 7.836V16a.75.75 0 0 1 .75-.75H18c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-4.5a.75.75 0 0 1-.75-.75V3.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigLeftIcon.displayName = "ArrowBigLeftIcon";
export { ArrowBigLeftIcon };
