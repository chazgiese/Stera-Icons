import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ClipboardIconBold = memo(
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
          d="M14.75 1a2.25 2.25 0 0 1 2.235 2h.765A3.25 3.25 0 0 1 21 6.25v13.5A3.25 3.25 0 0 1 17.75 23H6.25A3.25 3.25 0 0 1 3 19.75V6.25A3.25 3.25 0 0 1 6.25 3h.765A2.25 2.25 0 0 1 9.25 1zm-8.5 4C5.56 5 5 5.56 5 6.25v13.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V6.25C19 5.56 18.44 5 17.75 5h-.765a2.25 2.25 0 0 1-2.235 2h-5.5a2.25 2.25 0 0 1-2.235-2zm3-2a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ClipboardIconBold.displayName = "ClipboardIconBold";
export { ClipboardIconBold };
