import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ApertureIconFill = memo(
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
          d="M12 1c2.658 0 5.098.944 6.999 2.514A10.98 10.98 0 0 1 23 12q0 .929-.15 1.817a11.02 11.02 0 0 1-7 8.49c-1.2.448-2.497.693-3.85.693-2.658 0-5.098-.944-6.999-2.514A10.98 10.98 0 0 1 1 12q0-.929.15-1.817a11.02 11.02 0 0 1 7-8.49C9.35 1.245 10.647 1 12 1m2.5 14.741a4 4 0 0 1-.227.142l-.023.015-.06.034-6.692 3.863A8.95 8.95 0 0 0 12 21c.869 0 1.707-.125 2.5-.354zm1.99-4.015q.01.135.01.273v7.796a9.02 9.02 0 0 0 4.238-5.637l-4.248-2.453zM3 12a8.97 8.97 0 0 0 2.765 6.486l4.243-2.45a5 5 0 0 1-.234-.126l-.024-.012-.025-.015-.01-.006-.024-.014zm4.5-7.796a9.02 9.02 0 0 0-4.24 5.637l4.249 2.453-.002-.041A5 5 0 0 1 7.5 12zm6.49 3.759q.12.06.237.127l.023.013.026.015.053.03.005.003L20.999 12a8.97 8.97 0 0 0-2.765-6.486zm-4.283.164.001-.001.005-.001q.016-.011.05-.03l.006-.003.047-.028 6.685-3.86A8.96 8.96 0 0 0 12 3c-.869 0-1.707.124-2.5.353v4.905l.031-.02q.085-.056.172-.107z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ApertureIconFill.displayName = "ApertureIconFill";
export { ApertureIconFill };
