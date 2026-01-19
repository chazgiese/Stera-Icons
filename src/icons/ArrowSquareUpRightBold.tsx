import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowSquareUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-right-bold" {...props}>
      <path fill="currentColor" d="M7.3 15.3a1 1 0 1 0 1.4 1.4l6.3-6.29V15a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1H9a1 1 0 0 0 0 2h4.59z" />
        <path fill="currentColor" fillRule="evenodd" d="M2 13q-.02 2.05.07 3.37c.07.9.23 1.65.58 2.35a6 6 0 0 0 2.63 2.63c.7.35 1.46.5 2.35.58q1.32.09 3.37.07h2q2.05.02 3.37-.07c.9-.07 1.65-.23 2.35-.58a6 6 0 0 0 2.63-2.63c.35-.7.5-1.46.58-2.35q.09-1.32.07-3.37v-2q.02-2.05-.07-3.37a6 6 0 0 0-.58-2.35 6 6 0 0 0-2.63-2.63 6 6 0 0 0-2.35-.58Q15.05 1.98 13 2h-2q-2.05-.02-3.37.07c-.9.07-1.65.23-2.35.58a6 6 0 0 0-2.63 2.63c-.35.7-.5 1.46-.58 2.35Q1.98 8.95 2 11zm2-2c0-1.42 0-2.42.06-3.2.07-.77.19-1.25.38-1.62a4 4 0 0 1 1.74-1.74c.37-.2.85-.31 1.62-.38C8.58 4 9.58 4 11 4h2c1.42 0 2.42 0 3.2.06.77.07 1.25.19 1.62.38a4 4 0 0 1 1.74 1.74c.2.37.31.85.38 1.62.06.78.06 1.78.06 3.2v2c0 1.42 0 2.42-.06 3.2a4 4 0 0 1-.38 1.62 4 4 0 0 1-1.74 1.74c-.37.2-.85.31-1.62.38-.78.06-1.78.06-3.2.06h-2c-1.42 0-2.42 0-3.2-.06a4 4 0 0 1-1.62-.38 4 4 0 0 1-1.74-1.74c-.2-.37-.31-.85-.38-1.62C4 15.42 4 14.42 4 13z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpRightBold.displayName = 'ArrowSquareUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpRightBold, ArrowSquareUpRightBold as ArrowSquareUpRightBoldIcon, ArrowSquareUpRightBold as SiArrowSquareUpRightBold };
export type { ArrowSquareUpRightBoldProps };
