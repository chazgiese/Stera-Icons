import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.97 6.97a.75.75 0 0 1 1.06 1.06L10.06 12l3.97 3.97a.75.75 0 0 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

ChevronCircleLeftRegularDuotone.displayName = 'ChevronCircleLeftRegularDuotone';

export { ChevronCircleLeftRegularDuotone };
export type { ChevronCircleLeftRegularDuotoneProps };
