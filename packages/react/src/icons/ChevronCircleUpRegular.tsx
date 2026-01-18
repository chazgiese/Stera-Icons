import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 8.75q.31 0 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L12 10.56l-3.97 3.97a.75.75 0 0 1-1.06-1.06l4.5-4.5a.8.8 0 0 1 .53-.22" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpRegular.displayName = 'ChevronCircleUpRegular';

export { ChevronCircleUpRegular };
export type { ChevronCircleUpRegularProps };
