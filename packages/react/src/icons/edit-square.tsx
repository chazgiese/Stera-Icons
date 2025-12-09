import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EditSquareIcon = memo(
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
          d="M11 2.25a.75.75 0 0 1 0 1.5H8A4.25 4.25 0 0 0 3.75 8v8A4.25 4.25 0 0 0 8 20.25h8A4.25 4.25 0 0 0 20.25 16v-3a.75.75 0 0 1 1.5 0v3A5.75 5.75 0 0 1 16 21.75H8A5.75 5.75 0 0 1 2.25 16V8A5.75 5.75 0 0 1 8 2.25z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.349 2.349a3.75 3.75 0 0 1 5.308 5.295h.001l-8.12 8.334a.75.75 0 0 1-.457.222l-5 .546a.75.75 0 0 1-.822-.863l.758-4.789.026-.112a.75.75 0 0 1 .178-.294l8.12-8.332zm4.242 1.06a2.25 2.25 0 0 0-3.182 0L9.46 11.565l-.566 3.584 3.756-.411 7.934-8.139.007-.007a2.25 2.25 0 0 0 0-3.181"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EditSquareIcon.displayName = "EditSquareIcon";
export { EditSquareIcon };
