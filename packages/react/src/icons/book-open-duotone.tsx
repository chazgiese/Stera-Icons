import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenIconDuotone = memo(
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
          d="M12.75 18.291c-.265.19-.49.375-.675.542l-.075.071-.075-.071a8 8 0 0 0-.675-.542V6.907l.045.05q.06.066.084.098l.016.02a.75.75 0 0 0 1.21 0l.016-.02.084-.099.045-.049z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.054 4.156c1.794-.852 4.483-1.379 8.157-.3a.75.75 0 0 1 .539.72v13.368a.75.75 0 0 1-.96.72c-3.327-.978-5.638-.477-7.094.214-.736.35-1.27.755-1.615 1.067a5 5 0 0 0-.46.478l-.016.02v.002a.75.75 0 0 1-1.154.066l-.056-.067-.016-.02-.084-.1a5 5 0 0 0-.376-.379 6.7 6.7 0 0 0-1.615-1.067c-1.456-.69-3.767-1.192-7.093-.215a.75.75 0 0 1-.961-.72V4.577a.75.75 0 0 1 .54-.72c3.673-1.079 6.362-.552 8.156.3a8.2 8.2 0 0 1 1.979 1.31l.075.071.075-.07a8.2 8.2 0 0 1 1.979-1.311m7.196.993c-3.038-.774-5.178-.291-6.554.362-.736.35-1.27.755-1.615 1.067a5 5 0 0 0-.46.477l-.016.02a.75.75 0 0 1-1.21 0l-.016-.02-.084-.099a5 5 0 0 0-.376-.378 6.7 6.7 0 0 0-1.615-1.067c-1.376-.653-3.515-1.136-6.554-.362v11.826c3.186-.731 5.562-.227 7.196.549a8.2 8.2 0 0 1 1.979 1.31l.075.07.075-.07a8.2 8.2 0 0 1 1.979-1.311c1.633-.776 4.01-1.28 7.196-.548z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookOpenIconDuotone.displayName = "BookOpenIconDuotone";
export { BookOpenIconDuotone };
