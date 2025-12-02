import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookOpenFoldIcon = memo(
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
          d="M18 .75a.75.75 0 0 1 .75.75v1.763c1.042.042 2.194.221 3.46.593a.75.75 0 0 1 .54.72v13.367a.75.75 0 0 1-.96.72c-3.327-.977-5.637-.476-7.094.215-.736.35-1.27.755-1.616 1.067a5 5 0 0 0-.46.478l-.015.02-.002.001a.75.75 0 0 1-1.21-.003l.002.002-.017-.02-.084-.1a5 5 0 0 0-.376-.378 6.7 6.7 0 0 0-1.615-1.067c-1.456-.691-3.766-1.192-7.092-.215a.75.75 0 0 1-.961-.72V4.576a.75.75 0 0 1 .54-.72c3.673-1.079 6.363-.552 8.156.3.586.277 1.07.587 1.456.88.098-.41.254-.866.5-1.324a5.1 5.1 0 0 1 2.054-2.066C14.957 1.091 16.276.75 18 .75M9.303 5.51c-1.376-.652-3.515-1.135-6.553-.362v11.827c3.186-.731 5.563-.227 7.196.548.511.243.944.51 1.303.767V6.907a5 5 0 0 0-.331-.329 6.7 6.7 0 0 0-1.615-1.067m9.447 7.99a.75.75 0 0 1-.75.75c-2.362 0-3.604.925-4.299 1.958-.389.579-.621 1.218-.76 1.807l-.039.167c.327-.224.71-.45 1.15-.66 1.635-.775 4.012-1.278 7.198-.547V5.146a12.5 12.5 0 0 0-2.5-.383zm-1.5-11.22c-1.132.08-1.96.342-2.566.678a3.6 3.6 0 0 0-1.461 1.463 4.2 4.2 0 0 0-.455 1.494 4 4 0 0 0-.024.618l.002.028q.003.028.002.055l.001.017v8.344c.918-1.145 2.346-2.03 4.501-2.196z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookOpenFoldIcon.displayName = "BookOpenFoldIcon";
export { BookOpenFoldIcon };
