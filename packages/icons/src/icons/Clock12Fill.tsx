import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12FillProps = Omit<IconBaseProps, 'children'>;

const Clock12Fill = memo(
  forwardRef<SVGSVGElement, Clock12FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5c0 .48.39.88.87.88s.88-.4.88-.88V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Fill.displayName = 'Clock12Fill';

// Triple export pattern
export { Clock12Fill, Clock12Fill as Clock12FillIcon, Clock12Fill as SiClock12Fill };
export default Clock12Fill;
export type { Clock12FillProps };
