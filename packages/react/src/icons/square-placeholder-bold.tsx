import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquarePlaceholderIconBold = memo(
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
          d="M20 11.868 12.132 4H11c-.977 0-1.751.003-2.382.022l11.359 11.359c.02-.63.023-1.404.023-2.381zM4.012 14.972c.009.468.023.872.052 1.23.064.772.183 1.244.372 1.614a4 4 0 0 0 1.748 1.749c.37.188.842.307 1.614.37.358.03.761.044 1.23.052zM6.184 4.436a4 4 0 0 0-1.748 1.748l-.007.012L17.803 19.57q.007-.002.013-.006a4 4 0 0 0 1.749-1.748l.005-.013L6.196 4.429zm13.803 4.591a20 20 0 0 0-.051-1.23c-.064-.771-.183-1.243-.372-1.613a4 4 0 0 0-1.748-1.748c-.37-.19-.842-.308-1.614-.372-.358-.029-.762-.043-1.23-.052zM22 13c0 2.15.009 3.656-.306 4.81-.087.321-.2.624-.348.914a6 6 0 0 1-2.622 2.622c-.29.148-.593.261-.913.348C16.657 22.01 15.15 22 13 22h-2c-1.383 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-2.15-.008-3.656.306-4.81.087-.321.2-.623.348-.914a6 6 0 0 1 2.622-2.622c.29-.148.593-.261.913-.348C7.344 1.99 8.85 2 11 2h2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.617 22 11zm-18-.868L11.868 20H13c.977 0 1.751-.003 2.382-.022L4.022 8.618A82 82 0 0 0 4 11z"
        />
      </svg>
    ))
);
SquarePlaceholderIconBold.displayName = "SquarePlaceholderIconBold";
export { SquarePlaceholderIconBold };
