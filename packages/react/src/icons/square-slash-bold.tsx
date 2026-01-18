import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquareSlashIconBold = memo(
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
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zM4.436 6.184c-.19.37-.308.842-.372 1.614C4 8.58 4 9.584 4 11v2c0 1.416 0 2.419.064 3.202.064.772.183 1.244.372 1.614a4 4 0 0 0 1.748 1.749c.37.188.842.307 1.614.37C8.58 20 9.584 20 11 20h2c1.416 0 2.419 0 3.202-.064.772-.064 1.244-.183 1.614-.372q.11-.056.214-.12L4.555 5.97q-.063.105-.12.215M11 4c-1.416 0-2.419 0-3.202.064-.772.064-1.244.183-1.614.372a4 4 0 0 0-.215.119L19.444 18.03q.064-.104.12-.214c.19-.37.308-.842.372-1.614C20 15.42 20 14.416 20 13v-2c0-1.416 0-2.419-.064-3.202-.064-.772-.183-1.244-.372-1.614a4 4 0 0 0-1.748-1.748c-.37-.19-.842-.308-1.614-.372C15.42 4 14.416 4 13 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SquareSlashIconBold.displayName = "SquareSlashIconBold";
export { SquareSlashIconBold };
