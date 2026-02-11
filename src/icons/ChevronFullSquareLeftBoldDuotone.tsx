import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-square-left-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 3q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q2.98 14.05 3 12q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q9.95 2.98 12 3m0 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C5 9.58 5 10.58 5 12s0 2.42.06 3.2c.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06s2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2s0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C14.42 5 13.42 5 12 5" clipRule="evenodd" opacity={.4} />
        <path d="M12.73 8.02a1.25 1.25 0 0 1 2.02 1v5.97c0 1.04-1.2 1.62-2.02.99l-3.84-3a1.25 1.25 0 0 1 0-1.97z" />
    </IconBase>
  ))
);

ChevronFullSquareLeftBoldDuotone.displayName = 'ChevronFullSquareLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareLeftBoldDuotone, ChevronFullSquareLeftBoldDuotone as ChevronFullSquareLeftBoldDuotoneIcon, ChevronFullSquareLeftBoldDuotone as SiChevronFullSquareLeftBoldDuotone };
export default ChevronFullSquareLeftBoldDuotone;
export type { ChevronFullSquareLeftBoldDuotoneProps };
