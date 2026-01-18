import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFill = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.22 4.22q.54-.54 1.14-.98l15.4 15.4a11 11 0 0 1-2.12 2.12L3.24 5.36q.44-.6.98-1.14M16.9 21.85q-1.55.76-3.22 1.02L1.13 10.32q.25-1.67 1.02-3.22zM7.1 2.15q1.55-.76 3.22-1.02l12.55 12.55q-.26 1.67-1.02 3.22zM10.93 22.95a10.95 10.95 0 0 1-9.88-9.88zM13.07 1.05a10.95 10.95 0 0 1 9.88 9.88z" />
    </IconBase>
  ))
);

CirclePlaceholderFill.displayName = 'CirclePlaceholderFill';

export { CirclePlaceholderFill };
export type { CirclePlaceholderFillProps };
