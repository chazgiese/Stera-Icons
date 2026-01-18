import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.4 6.5a1.9 1.9 0 0 0-1.9 1.9v7.2c0 1.05.85 1.9 1.9 1.9H9a1 1 0 1 0 0-2h-.5v-7H9a1 1 0 1 0 0-2zm6.6 0a1 1 0 1 0 0 2h.5v7H15a1 1 0 1 0 0 2h.6a1.9 1.9 0 0 0 1.9-1.9V8.4a1.9 1.9 0 0 0-1.9-1.9z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 6.5a1 1 0 0 1 0 2h-.5v7H9a1 1 0 1 1 0 2h-.6a1.9 1.9 0 0 1-1.9-1.9V8.4c0-1.05.85-1.9 1.9-1.9zM15.6 6.5c1.05 0 1.9.85 1.9 1.9v7.2a1.9 1.9 0 0 1-1.9 1.9H15a1 1 0 1 1 0-2h.5v-7H15a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsSquareCircleFillDuotone.displayName = 'BracketsSquareCircleFillDuotone';

export { BracketsSquareCircleFillDuotone };
export type { BracketsSquareCircleFillDuotoneProps };
