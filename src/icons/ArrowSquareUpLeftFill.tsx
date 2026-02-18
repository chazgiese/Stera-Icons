import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-left-fill" {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.17 8.3a.9.9 0 0 0-.87.87v5.66a.88.88 0 0 0 1.75 0v-3.55l4.16 4.17a.88.88 0 0 0 1.24-1.24l-4.17-4.16h3.55a.88.88 0 0 0 0-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpLeftFill.displayName = 'ArrowSquareUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpLeftFill, ArrowSquareUpLeftFill as ArrowSquareUpLeftFillIcon, ArrowSquareUpLeftFill as SiArrowSquareUpLeftFill };
export default ArrowSquareUpLeftFill;
export type { ArrowSquareUpLeftFillProps };
