import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenIcon = memo(
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
          d="M14.054 4.156c1.794-.852 4.483-1.379 8.157-.3a.75.75 0 0 1 .539.72v13.368a.75.75 0 0 1-.96.72c-3.327-.978-5.638-.477-7.094.214-.736.35-1.27.755-1.615 1.068a5 5 0 0 0-.46.477l-.016.02v.002a.75.75 0 0 1-1.154.066l-.056-.067-.016-.02-.084-.1a5 5 0 0 0-.376-.378 6.7 6.7 0 0 0-1.615-1.068c-1.456-.69-3.767-1.192-7.093-.215a.75.75 0 0 1-.961-.72V4.577a.75.75 0 0 1 .54-.72c3.673-1.078 6.362-.552 8.156.3a8.2 8.2 0 0 1 1.979 1.31l.075.071.075-.07a8.2 8.2 0 0 1 1.979-1.311M9.304 5.51c-1.376-.653-3.515-1.136-6.554-.362v11.826c3.186-.731 5.562-.227 7.196.549.512.242.945.51 1.304.767V6.907a5 5 0 0 0-.331-.329 6.7 6.7 0 0 0-1.615-1.067m11.946-.362c-3.038-.774-5.178-.291-6.554.362-.736.35-1.27.755-1.615 1.067-.143.13-.253.244-.331.33V18.29a8.4 8.4 0 0 1 1.304-.768c1.633-.776 4.01-1.28 7.196-.548z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookOpenIcon.displayName = "BookOpenIcon";
export { BookOpenIcon };
