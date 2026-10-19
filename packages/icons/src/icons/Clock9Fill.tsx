import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9FillProps = Omit<IconBaseProps, 'children'>;

const Clock9Fill = memo(
  forwardRef<SVGSVGElement, Clock9FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v4.13H8c-.48 0-.87.39-.87.87s.39.88.87.88h4c.48 0 .88-.4.88-.88V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock9Fill.displayName = 'Clock9Fill';

// Triple export pattern
export { Clock9Fill, Clock9Fill as Clock9FillIcon, Clock9Fill as SiClock9Fill };
export default Clock9Fill;
export type { Clock9FillProps };
