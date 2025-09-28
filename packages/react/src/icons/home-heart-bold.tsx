import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartBold = memo(
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
          d="M13.904 9C15.605 9 17 10.368 17 12.076c0 1.24-.667 2.172-.877 2.464-1.057 1.466-2.54 2.481-3.502 3.243a1 1 0 0 1-1.242 0c-.961-.762-2.445-1.777-3.502-3.243-.21-.292-.877-1.225-.877-2.464C7 10.368 8.395 9 10.096 9c.718 0 1.379.244 1.904.653A3.1 3.1 0 0 1 13.904 9m0 2c-.444 0-.825.26-.997.631a1 1 0 0 1-1.814 0 1.1 1.1 0 0 0-.997-.631C9.482 11 9 11.49 9 12.076c0 .555.313 1.036.499 1.295.69.958 1.59 1.658 2.501 2.362.912-.704 1.81-1.404 2.501-2.362.186-.259.499-.74.499-1.295C15 11.49 14.518 11 13.904 11"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044a5 5 0 0 1 1.93-3.947zM13.843 4.7a3 3 0 0 0-3.684 0l-5 3.888A3 3 0 0 0 4 10.956V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.044c0-.926-.428-1.8-1.158-2.369z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartBold.displayName = "HomeHeartBold";
export { HomeHeartBold };
