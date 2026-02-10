import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareRegular = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-square" {...props}>
      <path fill="currentColor" d="M9.5 7.75a.75.75 0 0 1 0 1.5h-.6a.16.16 0 0 0-.15.16v5.18q.01.15.16.16h.59a.75.75 0 0 1 0 1.5h-.6c-.9 0-1.65-.74-1.65-1.66V9.41c0-.92.74-1.66 1.66-1.66zM15.1 7.75c.9 0 1.65.74 1.65 1.66v5.18c0 .92-.74 1.66-1.66 1.66h-.59a.75.75 0 0 1 0-1.5h.6q.13-.01.15-.16V9.41a.16.16 0 0 0-.16-.16h-.59a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-3.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareSquareRegular.displayName = 'BracketsSquareSquareRegular';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquareRegular, BracketsSquareSquareRegular as BracketsSquareSquareRegularIcon, BracketsSquareSquareRegular as SiBracketsSquareSquareRegular };
export default BracketsSquareSquareRegular;
export type { BracketsSquareSquareRegularProps };
