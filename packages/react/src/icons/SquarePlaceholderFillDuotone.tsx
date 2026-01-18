import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquarePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.57 22 1.22-.04q-1.15.05-2.79.04h-1.6L2 12.6V9.44zM8.54 21.98l-.9-.05a6 6 0 0 1-2.36-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35l-.05-.91zM21.88 16.85a5.6 5.6 0 0 1-3.16 4.5 6 6 0 0 1-1.5.47L2.18 6.78a5 5 0 0 1 .93-2.26L19.47 20.9a6 6 0 0 0 1.42-1.42L4.52 3.11a5.2 5.2 0 0 1 2.25-.93l15.05 15.04zM12.6 2l9.4 9.4v3.17L9.42 2 11 2zM15.46 2.02l.9.05c.9.07 1.66.23 2.36.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35l.05.91z" />
        <path fill="currentColor" d="M11.4 22H11q-1.42 0-2.46-.02l-6.52-6.52Q2 14.42 2 13v-.4zM17.22 21.82q-.4.07-.85.1a26 26 0 0 1-1.8.07L2 9.43q0-1.01.06-1.8l.1-.85zM20.89 19.47a6 6 0 0 1-1.42 1.42L3.11 4.52a6 6 0 0 1 1.41-1.41zM22 14.57a26 26 0 0 1-.07 1.8l-.1.85L6.77 2.18q.4-.07.85-.1Q8.42 2 9.43 2zM13 2q1.42 0 2.46.02l6.52 6.52Q22 9.58 22 11v.4L12.6 2z" />
    </IconBase>
  ))
);

SquarePlaceholderFillDuotone.displayName = 'SquarePlaceholderFillDuotone';

export { SquarePlaceholderFillDuotone };
export type { SquarePlaceholderFillDuotoneProps };
