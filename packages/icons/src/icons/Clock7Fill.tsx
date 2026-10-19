import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillProps = Omit<IconBaseProps, 'children'>;

const Clock7Fill = memo(
  forwardRef<SVGSVGElement, Clock7FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v4.76l-1.89 3.27c-.24.41-.1.95.32 1.2.42.23.96.09 1.2-.33l2-3.46v-.01l.06-.12.03-.12.01-.06.01-.12V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Fill.displayName = 'Clock7Fill';

// Triple export pattern
export { Clock7Fill, Clock7Fill as Clock7FillIcon, Clock7Fill as SiClock7Fill };
export default Clock7Fill;
export type { Clock7FillProps };
