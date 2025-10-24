import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserIconLinetone = memo(
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
          d="M12 12c4.432 0 7.979 1.917 9.377 5.503.116.297.247.627.315.965.077.38.07.747-.018 1.16-.082.384-.284.76-.48 1.049-.198.288-.476.613-.803.828-.8.528-1.656.495-2.591.495H6.2c-.935 0-1.79.033-2.592-.495-.326-.215-.605-.54-.802-.828-.196-.288-.398-.666-.48-1.048a2.8 2.8 0 0 1-.019-1.161c.068-.338.2-.668.316-.965C4.02 13.917 7.567 12 12 12m0 2c-3.872 0-6.5 1.63-7.514 4.23-.135.346-.191.5-.218.631a.8.8 0 0 0 .024.38q.011.033.035.083a1.8 1.8 0 0 0 .382.511c.2.132.373.165 1.491.165h11.6c1.118 0 1.29-.033 1.49-.165q0 0 .027-.02a1.746 1.746 0 0 0 .401-.604.8.8 0 0 0 .013-.35c-.026-.131-.082-.285-.218-.631C18.5 15.63 15.871 14 12 14"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserIconLinetone.displayName = "UserIconLinetone";
export { UserIconLinetone };
