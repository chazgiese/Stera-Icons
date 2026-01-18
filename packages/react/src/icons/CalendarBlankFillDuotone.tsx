import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarBlankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalendarBlankFillDuotone = memo(
  forwardRef<SVGSVGElement, CalendarBlankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.5 10.4v4.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V10h19z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v1.09c.73.07 1.28.2 1.77.45a5 5 0 0 1 2.19 2.19c.47.93.53 2.12.54 4.27h-19c0-2.15.07-3.34.54-4.27a5 5 0 0 1 2.19-2.19A5 5 0 0 1 7 3.1V2a1 1 0 0 1 2 0v1h6V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CalendarBlankFillDuotone.displayName = 'CalendarBlankFillDuotone';

export { CalendarBlankFillDuotone };
export type { CalendarBlankFillDuotoneProps };
