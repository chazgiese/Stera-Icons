import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsSquareCircleBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleBold = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 6.5a1 1 0 1 1 0 2h-.5v7H9a1 1 0 1 1 0 2h-.6a1.9 1.9 0 0 1-1.9-1.9V8.4c0-1.05.85-1.9 1.9-1.9zM15.6 6.5c1.05 0 1.9.85 1.9 1.9v7.2a1.9 1.9 0 0 1-1.9 1.9H15a1 1 0 1 1 0-2h.5v-7H15a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleBold.displayName = 'BracketsSquareCircleBold';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleBold, BracketsSquareCircleBold as BracketsSquareCircleBoldIcon, BracketsSquareCircleBold as SiBracketsSquareCircleBold };
export type { BracketsSquareCircleBoldProps };
