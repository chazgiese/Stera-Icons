import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentSearchIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M15.943 1.504q.43.005.78.033c.48.04.934.125 1.366.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C20 5.243 20 5.816 20 6.5v5a1 1 0 1 1-2 0v-5c0-.717 0-1.194-.03-1.56-.03-.355-.08-.518-.133-.62a1.5 1.5 0 0 0-.656-.657c-.103-.052-.266-.104-.62-.133a10 10 0 0 0-.65-.026L15 3.5H9c-.717 0-1.194 0-1.56.03-.355.03-.518.08-.62.133a1.5 1.5 0 0 0-.657.656c-.052.103-.104.266-.133.62C6 5.306 6 5.783 6 6.5v10c0 .716 0 1.194.03 1.56.03.355.08.518.133.62.144.283.374.513.656.657.103.052.266.104.62.133.367.03.844.03 1.561.03h1a1 1 0 1 1 0 2H9c-.684 0-1.257.001-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.305-.886-.344-1.364C4 17.757 4 17.184 4 16.5v-10c0-.684-.001-1.257.037-1.724.04-.478.125-.933.345-1.365a3.5 3.5 0 0 1 1.53-1.53c.43-.22.886-.305 1.364-.344C7.743 1.5 8.316 1.5 9 1.5h6z" />
          <path d="M15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 5.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 12.5a4.5 4.5 0 0 1 3.94 6.673l1.944 1.943a1.25 1.25 0 0 1-1.768 1.768l-1.943-1.944A4.5 4.5 0 1 1 15.5 12.5m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DocumentSearchIconBoldDuotone.displayName = "DocumentSearchIconBoldDuotone";
export { DocumentSearchIconBoldDuotone };
