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
          d="M14.054 4.155c1.794-.851 4.483-1.378 8.157-.299a.75.75 0 0 1 .539.72v13.367a.75.75 0 0 1-.96.72c-3.327-.977-5.638-.476-7.094.215-.736.349-1.27.755-1.615 1.067a5 5 0 0 0-.46.478l-.016.02v.001a.75.75 0 0 1-1.154.067l-.056-.068-.016-.02-.084-.1a5 5 0 0 0-.376-.378 6.7 6.7 0 0 0-1.615-1.067c-1.456-.691-3.767-1.192-7.093-.215a.75.75 0 0 1-.961-.72V4.576a.75.75 0 0 1 .54-.72c3.673-1.079 6.362-.552 8.156.299a8.2 8.2 0 0 1 1.979 1.31l.075.072.075-.071a8.2 8.2 0 0 1 1.979-1.311m-4.75 1.356c-1.376-.654-3.515-1.137-6.554-.363v11.826c3.186-.73 5.562-.226 7.196.55.512.242.945.509 1.304.767V6.907a5 5 0 0 0-.331-.33 6.7 6.7 0 0 0-1.615-1.066m11.946-.363c-3.038-.774-5.178-.29-6.554.363-.736.349-1.27.754-1.615 1.067-.143.13-.252.243-.331.329v11.384a8.4 8.4 0 0 1 1.304-.769c1.633-.775 4.01-1.279 7.196-.548z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookOpenIcon.displayName = "BookOpenIcon";
export { BookOpenIcon };
