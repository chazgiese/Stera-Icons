import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserIconFilled = memo(
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
          d="M12 2a6 6 0 0 1 3.89 10.565c2.566.81 4.53 2.483 5.487 4.938.116.297.247.627.315.965.077.38.07.747-.018 1.16-.082.384-.284.76-.48 1.049-.198.288-.476.613-.803.828-.8.528-1.656.495-2.591.495H6.2c-.935 0-1.79.033-2.592-.495-.326-.215-.605-.54-.802-.828-.196-.288-.398-.666-.48-1.048a2.8 2.8 0 0 1-.019-1.161c.068-.338.2-.668.316-.965.957-2.454 2.92-4.127 5.485-4.938A6 6 0 0 1 12 2"
        />
      </svg>
    ))
);
UserIconFilled.displayName = "UserIconFilled";
export { UserIconFilled };
