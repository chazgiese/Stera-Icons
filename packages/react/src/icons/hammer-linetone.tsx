import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HammerIconLinetone = memo(
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
          d="M9 9a1 1 0 0 0 1 1h.959l-.355 8.544a1.398 1.398 0 1 0 2.793 0L13.04 10h1.46a1 1 0 0 0 .534-.157l.36 8.618a3.398 3.398 0 1 1-6.79 0l.394-9.467z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.5 2a1 1 0 0 1 .707.293l.99.99 1.356-.678.106-.045A1 1 0 0 1 18 2.5h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-.447-.105l-1.356-.678-.99.99A1 1 0 0 1 14.5 10H10a1 1 0 0 1-1-1c0-.12-.045-.244-.236-.38-.214-.152-.578-.284-1.064-.308-.972-.05-2.145.346-2.919 1.313a1.001 1.001 0 0 1-1.761-.821C4.102 3.392 7.469 2 9 2zM9 4c-.36 0-1.98.356-3.135 2.571A5.6 5.6 0 0 1 7.8 6.313c.763.039 1.524.25 2.124.677.36.257.665.597.857 1.01h3.305l1.207-1.207.121-.104a1 1 0 0 1 1.033-.084l1.79.895H19v-3h-.764l-1.789.895a1 1 0 0 1-1.154-.188L14.086 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HammerIconLinetone.displayName = "HammerIconLinetone";
export { HammerIconLinetone };
