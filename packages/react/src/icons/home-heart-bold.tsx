import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconBold = memo(
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
          d="M13.904 9C15.605 9 17 10.367 17 12.075c0 1.239-.667 2.172-.877 2.463-1.057 1.467-2.54 2.482-3.502 3.243a1 1 0 0 1-1.242 0c-.961-.761-2.445-1.777-3.502-3.243-.21-.291-.877-1.224-.877-2.463 0-1.708 1.395-3.077 3.096-3.077.718 0 1.379.245 1.904.654a3.1 3.1 0 0 1 1.904-.654m0 2c-.444 0-.825.26-.997.631a1 1 0 0 1-1.814 0 1.1 1.1 0 0 0-.997-.632C9.482 11 9 11.49 9 12.075c0 .556.313 1.037.499 1.295.69.958 1.59 1.659 2.501 2.363.912-.704 1.81-1.405 2.501-2.363.186-.258.499-.739.499-1.294 0-.586-.482-1.077-1.096-1.077"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.954V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044A5 5 0 0 1 3.93 7.01zM13.843 4.7a3 3 0 0 0-3.684 0l-5 3.888A3 3 0 0 0 4 10.955V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.044c0-.925-.428-1.8-1.158-2.368z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.904 9C15.605 9 17 10.37 17 12.076c0 1.24-.667 2.172-.877 2.464-1.057 1.467-2.54 2.482-3.502 3.244a1 1 0 0 1-1.242 0c-.961-.762-2.445-1.778-3.502-3.244C7.667 14.25 7 13.316 7 12.077 7 10.369 8.395 9 10.096 9c.718 0 1.379.245 1.904.654A3.1 3.1 0 0 1 13.904 9m0 2c-.444 0-.825.261-.997.632a1 1 0 0 1-1.814 0 1.1 1.1 0 0 0-.997-.632C9.482 11 9 11.49 9 12.076c0 .556.313 1.037.499 1.295.69.958 1.59 1.659 2.501 2.363.912-.704 1.81-1.405 2.501-2.363.186-.258.499-.739.499-1.295 0-.585-.482-1.076-1.096-1.076"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.93 3.121a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044A5 5 0 0 1 3.93 7.01zM13.843 4.7a3 3 0 0 0-3.684 0l-5 3.888A3 3 0 0 0 4 10.956V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.044c0-.925-.428-1.8-1.158-2.368z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconBold.displayName = "HomeHeartIconBold";
export { HomeHeartIconBold };
