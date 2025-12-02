import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDocumentIconFilltone = memo(
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
          <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.348 6.25c.277 0 .541-.005.797.058.21.052.41.136.591.251.223.141.403.336.595.536l1.652 1.721c.182.19.359.368.487.583q.156.266.227.565c.057.244.053.495.053.757V15.4c0 .267 0 .514-.017.718a1.8 1.8 0 0 1-.173.677c-.168.329-.437.596-.766.764-.23.117-.463.157-.676.174-.204.017-.45.017-.718.017H9.6c-.268 0-.514 0-.718-.017a1.8 1.8 0 0 1-.677-.174 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.173-.676c-.017-.204-.017-.45-.017-.718V8.6c0-.268 0-.514.017-.719.017-.213.056-.446.173-.676.168-.33.436-.597.765-.765.23-.117.464-.156.677-.174.204-.016.45-.016.718-.016zm.418 1.25a.266.266 0 0 0-.266.265V9c0 .465 0 .699.076.882a1 1 0 0 0 .541.541c.184.076.417.077.883.077h1.234a.265.265 0 0 0 .188-.453l-2.469-2.47a.27.27 0 0 0-.187-.077"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanDocumentIconFilltone.displayName = "ScanDocumentIconFilltone";
export { ScanDocumentIconFilltone };
