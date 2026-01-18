import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock9FillProps = Omit<IconBaseProps, 'children'>;

const Clock9Fill = memo(
  forwardRef<SVGSVGElement, Clock9FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v5H8a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock9Fill.displayName = 'Clock9Fill';

export { Clock9Fill };
export type { Clock9FillProps };
