import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SidebarLeftIconFill = memo(
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
          d="M15.6 3c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V13.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H8.4c-.827 0-1.534.001-2.138-.023q-.302-.013-.57-.035c-.73-.06-1.37-.185-1.962-.487a5 5 0 0 1-2.185-2.185c-.302-.593-.428-1.233-.487-1.961C.999 15.59 1 14.703 1 13.599V10.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 3.73 3.544c.593-.302 1.233-.428 1.961-.487C6.41 2.999 7.297 3 8.401 3zM10 19h5.6c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.218C21 15.53 21 14.736 21 13.6v-3.2c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C17.53 5 16.737 5 15.6 5H10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SidebarLeftIconFill.displayName = "SidebarLeftIconFill";
export { SidebarLeftIconFill };
