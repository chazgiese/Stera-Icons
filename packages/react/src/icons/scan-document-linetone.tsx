import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDocumentIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.672 5c.258 0 .55-.006.836.063q.347.083.65.27c.25.153.453.364.635.546l2.328 2.328c.183.183.394.385.547.635q.185.303.27.65c.068.286.062.578.062.836v6.073c0 .263.001.521-.017.738a2 2 0 0 1-.2.77 2 2 0 0 1-.875.873 2 2 0 0 1-.77.201c-.216.018-.474.017-.738.017H8.6c-.264 0-.522.001-.739-.017a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77C5.999 16.923 6 16.665 6 16.4V7.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77a2 2 0 0 1 .875-.873c.271-.138.54-.183.77-.201C8.077 4.999 8.335 5 8.6 5zM8.6 7c-.297 0-.459.001-.576.01l-.012.002-.001.013C8 7.14 8 7.304 8 7.6v8.8c0 .297.001.46.01.576l.002.011.012.002c.117.01.28.011.576.011h6.8c.297 0 .46-.001.576-.01q.006 0 .011-.003l.002-.011c.01-.117.011-.28.011-.575V12h-2.4c-.264 0-.522 0-.739-.018a2 2 0 0 1-.77-.2 2 2 0 0 1-.873-.875 2 2 0 0 1-.201-.77c-.018-.216-.017-.474-.017-.737V7zM13 9.4a8 8 0 0 0 .012.587l.012.002c.117.01.28.011.576.011h2.396c-.002-.045-.005-.05-.003-.04a.3.3 0 0 0-.03-.073l-.034-.04a8 8 0 0 0-.222-.226l-2.328-2.328a8 8 0 0 0-.266-.256.3.3 0 0 0-.072-.03c.01.002.004-.001-.041-.004z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanDocumentIconLinetone.displayName = "ScanDocumentIconLinetone";
export { ScanDocumentIconLinetone };
