import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentCopyIconFilltone = memo(
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
          d="M14.172 1c.258 0 .55-.006.836.062q.347.084.65.27c.25.153.453.364.635.547l3.828 3.828c.183.182.394.384.547.635.123.2.214.42.27.65.068.285.062.578.062.836v6.771c0 .404.001.768-.023 1.068a2.5 2.5 0 0 1-.25.967c-.24.47-.622.854-1.092 1.093a2.5 2.5 0 0 1-.968.25 9 9 0 0 1-.667.02v-5.17c0-.21.013-.641-.09-1.068a3.3 3.3 0 0 0-.265-.717l-.123-.223-.09-.137c-.216-.31-.474-.552-.604-.682L13 6.172c-.13-.13-.373-.388-.683-.604l-.136-.09-.223-.124a3 3 0 0 0-.472-.195l-.245-.07-.16-.033C10.71 4.99 10.356 5 10.171 5H7v-.6c0-.403-.001-.767.023-1.067a2.5 2.5 0 0 1 .25-.968c.24-.47.622-.853 1.092-1.093.325-.165.656-.223.968-.249C9.633 1 9.997 1 10.4 1zM15 5c0 .7 0 1.05.137 1.317.12.235.31.427.546.547C15.95 7 16.3 7 17 7h2.5L15 2.5z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.172 6c.258 0 .55-.006.836.062q.347.085.65.27c.25.153.453.364.635.547l3.828 3.828c.183.182.394.384.547.635.123.2.214.42.27.65.068.286.062.578.062.836V19.6c0 .403.001.767-.023 1.067a2.5 2.5 0 0 1-.25.968 2.5 2.5 0 0 1-1.092 1.092 2.5 2.5 0 0 1-.968.25c-.3.024-.664.023-1.067.023H6.4c-.403 0-.767.001-1.067-.023a2.5 2.5 0 0 1-.968-.25 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.249-.968C3 20.367 3 20.003 3 19.599V9.4c0-.403-.001-.767.023-1.067.026-.312.084-.643.25-.968.24-.47.622-.853 1.092-1.093.325-.165.656-.223.968-.249C5.633 6 5.997 6 6.4 6zm.808 4.04c.007.687.01 1.032.146 1.295.12.231.309.42.54.539.263.135.607.138 1.294.145l2.54.027L10.955 7.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DocumentCopyIconFilltone.displayName = "DocumentCopyIconFilltone";
export { DocumentCopyIconFilltone };
