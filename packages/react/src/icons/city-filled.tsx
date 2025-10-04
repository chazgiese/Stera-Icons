import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CityFilled = memo(
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
          d="M7.4 3c.264 0 .522-.001.739.017.228.018.498.063.77.2a2 2 0 0 1 .796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v5.41c.184-.008.39-.01.6-.01h2.8c.21 0 .415.002.6.01V9.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201.216-.018.474-.017.738-.017h2.8c.264 0 .522-.001.739.017.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739V19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V5.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C4.077 2.999 4.335 3 4.6 3zM6 14.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m6 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m6 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-12-4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m12 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m-12-4a.75.75 0 0 0-.75.75v1a.75.75 0 1 0 1.5 0V7A.75.75 0 0 0 6 6.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CityFilled.displayName = "CityFilled";
export { CityFilled };
