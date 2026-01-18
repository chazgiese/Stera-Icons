import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock12FillProps = Omit<IconBaseProps, 'children'>;

const Clock12Fill = memo(
  forwardRef<SVGSVGElement, Clock12FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Fill.displayName = 'Clock12Fill';

export { Clock12Fill };
export type { Clock12FillProps };
