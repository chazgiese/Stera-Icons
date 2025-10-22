import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImageSquareIconBold = memo(
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
        <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365-.042.512-.113.98-.23 1.42l.008.008-.015.014c-.087.32-.197.624-.346.917a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zM7.677 12.59a.25.25 0 0 0-.354 0l-3.28 3.28q.01.172.021.332c.064.772.183 1.244.372 1.614a4 4 0 0 0 1.748 1.749c.37.188.842.307 1.614.37C8.58 20 9.584 20 11 20h2c1.416 0 2.419 0 3.202-.064.772-.064 1.244-.183 1.614-.372a4 4 0 0 0 1.5-1.334l-2.64-2.64a.25.25 0 0 0-.353 0l-1.232 1.233a2.25 2.25 0 0 1-3.182 0zM11 4c-1.416 0-2.419 0-3.202.064-.772.064-1.244.183-1.614.372a4 4 0 0 0-1.748 1.748c-.19.37-.308.842-.372 1.614C4 8.58 4 9.584 4 11v2.085l1.91-1.908a2.25 2.25 0 0 1 3.18 0l4.233 4.232a.25.25 0 0 0 .354 0l1.232-1.232a2.25 2.25 0 0 1 3.182 0l1.854 1.854c.052-.757.055-1.715.055-3.031v-2c0-1.416 0-2.419-.064-3.202-.064-.772-.183-1.244-.372-1.614a4 4 0 0 0-1.748-1.748c-.37-.19-.842-.308-1.614-.372C15.42 4 14.416 4 13 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImageSquareIconBold.displayName = "ImageSquareIconBold";
export { ImageSquareIconBold };
