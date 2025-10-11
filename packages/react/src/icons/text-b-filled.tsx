import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextBIconFilled = memo(
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
          d="M12.5 1.5a6 6 0 0 1 4.747 9.666A6 6 0 0 1 14.5 22.5H9.2c-.535 0-1.027.001-1.435-.032-.427-.035-.893-.115-1.354-.35a3.5 3.5 0 0 1-1.53-1.53c-.234-.46-.314-.926-.349-1.353q-.023-.307-.028-.67L4.5 17.8V6.143c0-.51-.001-.978.03-1.368.03-.406.103-.85.317-1.294A3.5 3.5 0 0 1 6.48 1.847c.444-.214.888-.286 1.294-.318.39-.03.858-.029 1.368-.029zm-3.3 12c-.584 0-.933.001-1.191.023-.24.02-.268.048-.236.032a.5.5 0 0 0-.218.218c.016-.032-.013-.005-.033.236-.02.258-.022.607-.022 1.191v2.6l.003.719c.003.192.009.343.02.472.02.241.048.268.032.236.048.094.124.17.218.218-.032-.016-.005.013.236.032.258.022.607.023 1.191.023h5.3a3 3 0 1 0 0-6zm-.057-9c-.557 0-.888.001-1.134.02-.23.018-.258.045-.226.03a.5.5 0 0 0-.233.233c.015-.032-.012-.004-.03.226-.019.246-.02.577-.02 1.134v2.714c0 .557.001.888.02 1.134.018.23.045.258.03.226.049.102.131.184.233.233-.032-.015-.004.012.226.03.246.019.577.02 1.134.02H12.5a3 3 0 1 0 0-6z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TextBIconFilled.displayName = "TextBIconFilled";
export { TextBIconFilled };
