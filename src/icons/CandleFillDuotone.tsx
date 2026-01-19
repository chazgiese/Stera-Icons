import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleFillDuotone = memo(
  forwardRef<SVGSVGElement, CandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="candle-fill-duotone" {...props}>
      <path fill="currentColor" d="M13.83 10.25q.8 0 1.34.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v4.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03h-3.6q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-4.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.54-.04 1.34-.03a3.6 3.6 0 0 0 3.66 0" opacity={.4} />
        <path fill="currentColor" d="M11.5 1.43c.3-.24.7-.24 1 0v.01l.03.03.1.1a14 14 0 0 1 2.57 3.21c.31.61.55 1.3.55 2.02 0 2.14-1.63 3.95-3.75 3.95S8.25 8.94 8.25 6.8c0-.71.24-1.4.55-2.02.31-.61.72-1.19 1.12-1.68a15 15 0 0 1 1.44-1.54l.1-.09.04-.03" />
    </IconBase>
  ))
);

CandleFillDuotone.displayName = 'CandleFillDuotone';

// Triple export pattern (lucide-react style)
export { CandleFillDuotone, CandleFillDuotone as CandleFillDuotoneIcon, CandleFillDuotone as SiCandleFillDuotone };
export type { CandleFillDuotoneProps };
