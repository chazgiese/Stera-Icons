import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderFill = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-fill" {...props}>
      <path d="M16.11 20.95q-1 .06-2.51.05h-1.45L3 11.85V10.4q-.01-1.5.04-2.51zM9.31 21q-.92 0-1.62-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q3 15.6 3 14.68zM20.39 18.4a5 5 0 0 1-2.01 2L3.6 5.62a5 5 0 0 1 2-2zM21 12.17v1.43q.01 1.51-.05 2.53L7.87 3.05Q8.88 2.99 10.4 3h1.43zM14.66 3q.95 0 1.65.06c.73.06 1.37.18 1.96.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.05.7.06 1.65z" />
    </IconBase>
  ))
);

SquarePlaceholderFill.displayName = 'SquarePlaceholderFill';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderFill, SquarePlaceholderFill as SquarePlaceholderFillIcon, SquarePlaceholderFill as SiSquarePlaceholderFill };
export default SquarePlaceholderFill;
export type { SquarePlaceholderFillProps };
