import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDocumentIconBoldDuotone = memo(
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
          d="M12.767 6.006c.144.007.293.023.44.06.234.057.458.153.663.283.255.16.458.383.642.574l1.652 1.72c.174.182.375.383.52.628q.178.299.257.636c.066.279.059.564.059.815V15.4c0 .264.001.522-.017.739a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.217.018-.474.017-.738.017H9.6c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C6.999 15.923 7 15.665 7 15.4V8.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C9.077 5.999 9.335 6 9.6 6h2.748zM9.6 8a8 8 0 0 0-.576.01l-.012.002-.001.012A8 8 0 0 0 9 8.6v6.8c0 .297.001.46.01.576l.002.011.012.002c.117.01.28.011.576.011h4.8c.297 0 .46-.001.576-.01l.011-.003.002-.011c.01-.117.011-.28.011-.576V12h-1.4c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C10.999 9.923 11 9.665 11 9.4V8zM13 9.4a8 8 0 0 0 .012.587l.012.002c.117.01.28.011.576.011h1.094L13.07 8.308 13 8.236z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanDocumentIconBoldDuotone.displayName = "ScanDocumentIconBoldDuotone";
export { ScanDocumentIconBoldDuotone };
