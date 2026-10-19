import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.5c.55 0 1 .45 1 1s-.45 1-1 1H9v5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.6c-1.05 0-1.9-.85-1.9-1.9V9.4c0-1.05.85-1.9 1.9-1.9zM15.1 7.5c1.05 0 1.9.85 1.9 1.9v5.2c0 1.05-.85 1.9-1.9 1.9h-.6c-.55 0-1-.45-1-1s.45-1 1-1h.5v-5h-.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

BracketsSquareCircleBoldDuotone.displayName = 'BracketsSquareCircleBoldDuotone';

// Triple export pattern
export { BracketsSquareCircleBoldDuotone, BracketsSquareCircleBoldDuotone as BracketsSquareCircleBoldDuotoneIcon, BracketsSquareCircleBoldDuotone as SiBracketsSquareCircleBoldDuotone };
export default BracketsSquareCircleBoldDuotone;
export type { BracketsSquareCircleBoldDuotoneProps };
