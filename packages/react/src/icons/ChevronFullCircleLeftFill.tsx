import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m2.75 7.52a1.25 1.25 0 0 0-2.03-.98l-4.35 3.48c-.63.5-.63 1.46 0 1.96l4.35 3.48c.82.65 2.03.07 2.03-.98z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFill.displayName = 'ChevronFullCircleLeftFill';

export { ChevronFullCircleLeftFill };
export type { ChevronFullCircleLeftFillProps };
