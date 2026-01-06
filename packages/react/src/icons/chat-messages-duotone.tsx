import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatMessagesIconDuotone = memo(
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
          d="M12 3.25A4.75 4.75 0 0 1 16.75 8v1q0 .126-.006.25H15.24q.01-.124.011-.25V8A3.25 3.25 0 0 0 12 4.75H6A3.25 3.25 0 0 0 2.75 8v4.786l.281-.14a3.75 3.75 0 0 1 1.677-.396h2.876c-.186.468-.3.973-.328 1.5H4.708c-.35 0-.694.081-1.006.237l-1.367.684A.75.75 0 0 1 1.25 14V8A4.75 4.75 0 0 1 6 3.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 9.25A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.085.67l-1.367-.683a2.25 2.25 0 0 0-1.006-.237H12A4.75 4.75 0 0 1 7.25 15v-1A4.75 4.75 0 0 1 12 9.25zm-6 1.5A3.25 3.25 0 0 0 8.75 14v1A3.25 3.25 0 0 0 12 18.25h7.292a3.75 3.75 0 0 1 1.677.395l.281.141V14A3.25 3.25 0 0 0 18 10.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatMessagesIconDuotone.displayName = "ChatMessagesIconDuotone";
export { ChatMessagesIconDuotone };
