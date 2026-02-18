import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderFill = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-fill" {...props}>
      <path d="M16.51 21.46q-.99.05-2.41.04h-1.8l-9.8-9.8V9.9q-.01-1.43.04-2.41zM9.48 21.5q-1.36.01-2.29-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-.93-.06-2.29zM20.93 18.81a5 5 0 0 1-2.12 2.12L3.07 5.2a5 5 0 0 1 2.12-2.12zM21.5 12.3v1.8q.01 1.43-.04 2.41L7.49 2.54A45 45 0 0 1 9.9 2.5h1.8zM14.52 2.5q1.36-.02 2.29.06c.73.06 1.37.18 1.96.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.07.93.06 2.29z" />
    </IconBase>
  ))
);

SquarePlaceholderFill.displayName = 'SquarePlaceholderFill';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderFill, SquarePlaceholderFill as SquarePlaceholderFillIcon, SquarePlaceholderFill as SiSquarePlaceholderFill };
export default SquarePlaceholderFill;
export type { SquarePlaceholderFillProps };
