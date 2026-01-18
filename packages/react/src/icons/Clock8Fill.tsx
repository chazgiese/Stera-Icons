import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock8FillProps = Omit<IconBaseProps, 'children'>;

const Clock8Fill = memo(
  forwardRef<SVGSVGElement, Clock8FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v5.42l-2.96 1.71a1 1 0 0 0 1 1.74l3.46-2 .01-.01a1 1 0 0 0 .33-.33l.02-.02A1 1 0 0 0 13 12V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Fill.displayName = 'Clock8Fill';

// Triple export pattern (lucide-react style)
export { Clock8Fill, Clock8Fill as Clock8FillIcon, Clock8Fill as SiClock8Fill };
export type { Clock8FillProps };
