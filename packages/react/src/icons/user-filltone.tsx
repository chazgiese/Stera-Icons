import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserIconFilltone = memo(
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
          d="M12 12c4.432 0 7.979 1.917 9.377 5.503.116.297.247.627.315.965.077.38.07.747-.018 1.16-.082.384-.284.76-.48 1.049-.198.288-.476.613-.803.828-.8.528-1.656.495-2.591.495H6.2c-.935 0-1.79.033-2.592-.495-.326-.215-.605-.54-.802-.828-.196-.288-.398-.666-.48-1.048a2.8 2.8 0 0 1-.019-1.161c.068-.338.2-.668.316-.965C4.02 13.917 7.567 12 12 12"
          opacity={0.4}
        />
        <path fill="currentColor" d="M12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12" />
      </svg>
    ))
);
UserIconFilltone.displayName = "UserIconFilltone";
export { UserIconFilltone };
