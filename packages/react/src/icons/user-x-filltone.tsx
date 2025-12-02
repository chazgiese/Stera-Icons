import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserXIconFilltone = memo(
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
          d="M18.794 15.292a1 1 0 0 1 1.412 1.416l-1.292 1.29 1.294 1.296a1 1 0 0 1-1.416 1.412L17.5 19.412l-1.292 1.294a1 1 0 0 1-1.416-1.412l1.293-1.297-1.291-1.289a1 1 0 0 1 1.412-1.416l1.294 1.292z"
        />
        <path
          fill="currentColor"
          d="M12 3.5a5 5 0 0 1 2.593 9.275c1.77.4 3.24 1.232 4.273 2.452q-.038.03-.072.065L17.5 16.584l-1.294-1.292a1 1 0 0 0-1.412 1.416l1.291 1.29-1.293 1.296a1 1 0 0 0-.156 1.206H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.489-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
          opacity={0.4}
        />
      </svg>
    ))
);
UserXIconFilltone.displayName = "UserXIconFilltone";
export { UserXIconFilltone };
