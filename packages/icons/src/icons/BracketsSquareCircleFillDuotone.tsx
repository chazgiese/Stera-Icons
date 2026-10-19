import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M8.9 7.63c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.6q-.02 0-.03-.04V9.41q0-.04.04-.04h.59c.48 0 .88-.39.88-.87s-.4-.87-.88-.87zm5.6 0c-.48 0-.87.39-.87.87s.39.88.87.88h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59c-.48 0-.87.39-.87.87s.39.88.87.88h.6c.98 0 1.78-.8 1.78-1.79V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.63c.48 0 .88.39.88.87s-.4.88-.88.88h-.6q-.02 0-.03.03v5.18q0 .03.04.04h.59c.48 0 .88.39.88.87s-.4.88-.88.88h-.6c-.98 0-1.78-.8-1.78-1.79V9.41c0-.99.8-1.78 1.79-1.78zM15.1 7.63c.98 0 1.78.8 1.78 1.78v5.18c0 .99-.8 1.79-1.79 1.79h-.59c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.6q.02 0 .03-.04V9.41q0-.04-.04-.04h-.59c-.48 0-.87-.39-.87-.87s.39-.87.87-.87z" />
    </IconBase>
  ))
);

BracketsSquareCircleFillDuotone.displayName = 'BracketsSquareCircleFillDuotone';

// Triple export pattern
export { BracketsSquareCircleFillDuotone, BracketsSquareCircleFillDuotone as BracketsSquareCircleFillDuotoneIcon, BracketsSquareCircleFillDuotone as SiBracketsSquareCircleFillDuotone };
export default BracketsSquareCircleFillDuotone;
export type { BracketsSquareCircleFillDuotoneProps };
