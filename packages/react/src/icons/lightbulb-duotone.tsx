import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIconDuotone = memo(
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
          d="M12 1.25a6.75 6.75 0 0 1 6.018 9.812c-.217.424-.452.845-.68 1.253-.56 1.008-1.074 1.94-1.361 2.9a.75.75 0 0 0-.72-.965h-.536c.35-.945.849-1.839 1.307-2.663.23-.413.45-.811.653-1.207a5.25 5.25 0 1 0-9.361 0c.201.396.422.794.652 1.207.458.824.957 1.718 1.307 2.663h-.537a.75.75 0 0 0-.719.965c-.287-.96-.801-1.892-1.362-2.9-.227-.408-.462-.83-.679-1.253A6.75 6.75 0 0 1 12 1.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.258 14.25a.75.75 0 0 1 .718.965 5 5 0 0 0-.226 1.443V19c0 1.308-.914 2.4-2.138 2.679a1.75 1.75 0 0 1-3.226 0A2.75 2.75 0 0 1 8.25 19v-2.342c0-.482-.082-.96-.227-1.443a.75.75 0 0 1 .72-.965zm-5.58 1.5q.07.444.072.908V19c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2.342q.002-.464.071-.908z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LightbulbIconDuotone.displayName = "LightbulbIconDuotone";
export { LightbulbIconDuotone };
