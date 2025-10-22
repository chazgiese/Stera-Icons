import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlienIconBold = memo(
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
          d="M12 2c4.992 0 9 4.132 9 9.182 0 2.215-1.113 4.188-2.427 5.757-1.323 1.58-2.941 2.86-4.159 3.712a4.19 4.19 0 0 1-4.828 0C8.369 19.8 6.75 18.52 5.426 16.94 4.114 15.369 3 13.397 3 11.182 3 6.132 7.008 2 12 2m0 2c-3.845 0-7 3.194-7 7.182 0 1.542.785 3.069 1.96 4.472 1.166 1.392 2.628 2.557 3.772 3.358a2.19 2.19 0 0 0 2.536 0c1.144-.801 2.606-1.966 3.772-3.358 1.175-1.403 1.96-2.93 1.96-4.472C19 7.194 15.845 4 12 4"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13.197 15.201a.646.646 0 0 1 .803.626c0 .395-.269.74-.652.836l-.863.216c-.318.08-.652.08-.97 0l-.863-.216a.86.86 0 0 1-.652-.836c0-.42.395-.728.803-.626l.784.195c.271.068.555.068.826 0zM8 9a3 3 0 0 1 3 3 1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 0 1 1-1M16 9a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3"
        />
      </svg>
    ))
);
AlienIconBold.displayName = "AlienIconBold";
export { AlienIconBold };
