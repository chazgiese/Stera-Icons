import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleOffIconBold = memo(
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
          d="M1.293 1.293a1 1 0 0 1 1.414 0l19 19a1 1 0 1 1-1.414 1.414l-2.442-2.442A11.9 11.9 0 0 1 12 20.777c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889c0-2.324.89-4.446 2.356-6.118L1.293 2.707a1 1 0 0 1 0-1.414m3.482 4.896C3.652 7.513 3 9.14 3 10.89c0 1.521.492 2.947 1.355 4.162.81 1.138.976 1.965.888 2.539-.016.108-.043.199-.057.248l-.01.035-.008.025-.004.014v.005l-.556 2.216 3.55-1.775.09-.039a1 1 0 0 1 .663-.018 10.1 10.1 0 0 0 3.089.476c1.592 0 3.08-.364 4.37-.994z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 1c5.961 0 11 4.32 11 9.889 0 2.13-.75 4.096-2.007 5.698a1 1 0 0 1-1.573-1.235C20.423 14.076 21 12.538 21 10.89 21 6.639 17.084 3 12 3a9.96 9.96 0 0 0-4.284.95 1 1 0 1 1-.86-1.805A11.96 11.96 0 0 1 12 1"
        />
      </svg>
    ))
);
ChatBubbleOffIconBold.displayName = "ChatBubbleOffIconBold";
export { ChatBubbleOffIconBold };
