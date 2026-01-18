import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuoteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuoteRegularDuotone = memo(
  forwardRef<SVGSVGElement, QuoteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 6.25c1.92 0 3.25 1.81 3.25 3.75 0 2.32-.38 4.22-1.16 5.56A4 4 0 0 1 15 17.75a.75.75 0 0 1 0-1.5c.95 0 1.72-.45 2.29-1.44q.33-.57.56-1.4-.6.34-1.35.34c-1.92 0-3.25-1.81-3.25-3.75s1.33-3.75 3.25-3.75m0 1.5c-.84 0-1.75.87-1.75 2.25s.9 2.25 1.75 2.25c.84 0 1.75-.87 1.75-2.25s-.9-2.25-1.75-2.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M7.5 6.25c1.92 0 3.25 1.81 3.25 3.75 0 2.32-.38 4.22-1.16 5.56A4 4 0 0 1 6 17.75a.75.75 0 0 1 0-1.5c.95 0 1.72-.45 2.29-1.44q.33-.57.56-1.4-.6.34-1.35.34c-1.92 0-3.25-1.81-3.25-3.75S5.58 6.25 7.5 6.25m0 1.5c-.84 0-1.75.87-1.75 2.25s.9 2.25 1.75 2.25c.84 0 1.75-.87 1.75-2.25s-.9-2.25-1.75-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

QuoteRegularDuotone.displayName = 'QuoteRegularDuotone';

export { QuoteRegularDuotone };
export type { QuoteRegularDuotoneProps };
