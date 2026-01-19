import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareCircleFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.4 6.5a1.9 1.9 0 0 0-1.9 1.9v7.2c0 1.05.85 1.9 1.9 1.9H9a1 1 0 1 0 0-2h-.5v-7H9a1 1 0 1 0 0-2zm6.6 0a1 1 0 1 0 0 2h.5v7H15a1 1 0 1 0 0 2h.6a1.9 1.9 0 0 0 1.9-1.9V8.4a1.9 1.9 0 0 0-1.9-1.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleFill.displayName = 'BracketsSquareCircleFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleFill, BracketsSquareCircleFill as BracketsSquareCircleFillIcon, BracketsSquareCircleFill as SiBracketsSquareCircleFill };
export type { BracketsSquareCircleFillProps };
