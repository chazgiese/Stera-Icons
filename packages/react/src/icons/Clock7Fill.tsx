import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock7FillProps = Omit<IconBaseProps, 'children'>;

const Clock7Fill = memo(
  forwardRef<SVGSVGElement, Clock7FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v5.73l-1.87 3.23a1 1 0 0 0 1.74 1l2-3.46v-.02l.02-.03.03-.05.02-.06.01-.03.02-.06v-.04l.01-.03.02-.17V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Fill.displayName = 'Clock7Fill';

export { Clock7Fill };
export type { Clock7FillProps };
