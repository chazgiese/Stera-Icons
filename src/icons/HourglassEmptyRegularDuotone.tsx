import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassEmptyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassEmptyRegularDuotone = memo(
  forwardRef<SVGSVGElement, HourglassEmptyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-empty-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 1.25A2.75 2.75 0 0 1 19.75 4v1.12c0 2.05-.93 3.99-2.53 5.27l-1.29 1.02a.75.75 0 0 0 0 1.18l1.29 1.02a6.8 6.8 0 0 1 2.53 5.27V20A2.75 2.75 0 0 1 17 22.75H7A2.75 2.75 0 0 1 4.25 20v-1.12c0-2.05.93-3.99 2.53-5.27l1.29-1.02a.75.75 0 0 0 0-1.18L6.78 10.4a6.8 6.8 0 0 1-2.53-5.27V4A2.75 2.75 0 0 1 7 1.25zM7 2.75c-.69 0-1.25.56-1.25 1.25v1.12c0 1.6.73 3.1 1.97 4.1L9 10.24a2.25 2.25 0 0 1 0 3.52l-1.28 1.02a5.3 5.3 0 0 0-1.97 4.1V20c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-1.12c0-1.6-.73-3.1-1.97-4.1L15 13.76a2.25 2.25 0 0 1 0-3.52l1.28-1.02c1.24-1 1.97-2.5 1.97-4.1V4c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.42c.33 0 .7.11.98.38l.12.13.14.17q.23.25.5.47l1.29 1.03a3.3 3.3 0 0 1 1.18 2.04.75.75 0 0 1-.74.86H8.53a.75.75 0 0 1-.74-.86c.12-.8.54-1.53 1.18-2.04l1.28-1.03q.38-.3.65-.64l.12-.13c.28-.27.65-.38.98-.38" />
    </IconBase>
  ))
);

HourglassEmptyRegularDuotone.displayName = 'HourglassEmptyRegularDuotone';

// Triple export pattern (lucide-react style)
export { HourglassEmptyRegularDuotone, HourglassEmptyRegularDuotone as HourglassEmptyRegularDuotoneIcon, HourglassEmptyRegularDuotone as SiHourglassEmptyRegularDuotone };
export default HourglassEmptyRegularDuotone;
export type { HourglassEmptyRegularDuotoneProps };
