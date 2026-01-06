import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDocumentIconFill = memo(
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
          d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.348 6.25c.277 0 .541-.005.797.059.21.051.41.136.591.25.223.142.403.337.595.537l1.652 1.72c.182.19.359.368.487.583q.156.266.227.566c.057.244.053.495.053.757V15.4c0 .268 0 .514-.017.718a1.8 1.8 0 0 1-.173.677 1.75 1.75 0 0 1-.766.765c-.23.117-.463.156-.676.173-.204.017-.45.017-.718.017H9.6c-.268 0-.514 0-.718-.017a1.8 1.8 0 0 1-.677-.173 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.173-.677c-.017-.204-.017-.45-.017-.718V8.6c0-.268 0-.514.017-.718.017-.213.056-.447.173-.677.168-.329.436-.597.765-.765.23-.117.464-.156.677-.173.204-.017.45-.017.718-.017zm.418 1.25a.266.266 0 0 0-.266.266V9c0 .466 0 .7.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1.234a.266.266 0 0 0 .188-.452l-2.469-2.47a.27.27 0 0 0-.187-.078"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanDocumentIconFill.displayName = "ScanDocumentIconFill";
export { ScanDocumentIconFill };
