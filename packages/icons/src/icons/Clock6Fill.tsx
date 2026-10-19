import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6FillProps = Omit<IconBaseProps, 'children'>;

const Clock6Fill = memo(
  forwardRef<SVGSVGElement, Clock6FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v9c0 .48.39.88.87.88s.88-.4.88-.88V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Fill.displayName = 'Clock6Fill';

// Triple export pattern
export { Clock6Fill, Clock6Fill as Clock6FillIcon, Clock6Fill as SiClock6Fill };
export default Clock6Fill;
export type { Clock6FillProps };
