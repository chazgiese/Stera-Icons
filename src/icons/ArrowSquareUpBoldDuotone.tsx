import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-4.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.9c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" opacity={.4} />
        <path d="M12 7a1 1 0 0 1 .7.3l4 4a1 1 0 1 1-1.4 1.4L13 10.42V16a1 1 0 0 1-2 0v-5.59l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4A1 1 0 0 1 12 7" />
    </IconBase>
  ))
);

ArrowSquareUpBoldDuotone.displayName = 'ArrowSquareUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpBoldDuotone, ArrowSquareUpBoldDuotone as ArrowSquareUpBoldDuotoneIcon, ArrowSquareUpBoldDuotone as SiArrowSquareUpBoldDuotone };
export default ArrowSquareUpBoldDuotone;
export type { ArrowSquareUpBoldDuotoneProps };
