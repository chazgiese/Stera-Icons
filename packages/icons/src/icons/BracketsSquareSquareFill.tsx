import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM8.9 7.63c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.6q-.02 0-.03-.04V9.41q0-.04.04-.04h.59c.48 0 .88-.39.88-.87s-.4-.87-.88-.87zm5.6 0c-.48 0-.87.39-.87.87s.39.88.87.88h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59c-.48 0-.87.39-.87.87s.39.88.87.88h.6c.98 0 1.78-.8 1.78-1.79V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareSquareFill.displayName = 'BracketsSquareSquareFill';

// Triple export pattern
export { BracketsSquareSquareFill, BracketsSquareSquareFill as BracketsSquareSquareFillIcon, BracketsSquareSquareFill as SiBracketsSquareSquareFill };
export default BracketsSquareSquareFill;
export type { BracketsSquareSquareFillProps };
