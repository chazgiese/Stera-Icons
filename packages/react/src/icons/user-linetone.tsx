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
          d="M15.7 12.568c2.05.69 3.66 2 4.554 3.899.117.248.263.55.344.88.09.371.09.732.022 1.14-.066.399-.267.802-.457 1.1-.19.3-.469.654-.802.884-.815.561-1.652.529-2.561.529H7.2c-.909 0-1.746.032-2.561-.53-.333-.229-.612-.583-.802-.882s-.391-.702-.457-1.1a2.8 2.8 0 0 1 .022-1.14c.08-.332.228-.633.344-.881.894-1.899 2.504-3.21 4.553-3.899A5.48 5.48 0 0 0 12 14a5.48 5.48 0 0 0 3.7-1.432M12 14c-3.264 0-5.491 1.293-6.444 3.318-.14.298-.186.406-.21.5-.013.056-.026.139.008.344 0 0 .007.035.04.11.032.073.077.158.132.245q.084.131.164.223c.05.057.08.08.083.083.21.144.361.177 1.427.177h9.6c1.066 0 1.218-.033 1.427-.177.002-.002.032-.025.083-.083.052-.06.109-.137.164-.223.055-.087.1-.172.133-.244.03-.072.039-.109.04-.11.033-.206.02-.29.006-.345-.023-.094-.069-.202-.209-.5C17.491 15.293 15.264 14 12 14"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserIconLinetone.displayName = "UserIconLinetone";
export { UserIconLinetone };
