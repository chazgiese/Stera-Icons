import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquarePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderFill = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.92 21.99 13 22h-1.96L2 12.96V11l.01-1.92zM8.9 21.98q-.69 0-1.27-.05a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.04-.58-.06-1.27zM19.68 20.74a5.5 5.5 0 0 1-2.76 1.13L2.13 7.08a5.5 5.5 0 0 1 1.13-2.76zM21.87 16.92a5.5 5.5 0 0 1-1.13 2.76L4.32 3.26a5.5 5.5 0 0 1 2.76-1.13zM22 11.04V13l-.01 1.92L9.09 2 11 2h1.96zM15.1 2.01q.69.02 1.27.06c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.04.58.05 1.27z" />
    </IconBase>
  ))
);

SquarePlaceholderFill.displayName = 'SquarePlaceholderFill';

export { SquarePlaceholderFill };
export type { SquarePlaceholderFillProps };
