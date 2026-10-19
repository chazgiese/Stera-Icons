import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock10FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v3.48L8.97 9.24c-.42-.24-.95-.1-1.2.32-.23.42-.1.96.33 1.2l3.46 2h.02l.03.02.04.02.04.02.05.01.03.01.04.01.04.01h.06l.01.01h.19l.05-.01q.16-.03.28-.1l.03-.02.04-.03.03-.03.04-.02.02-.02q.27-.25.28-.64V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5q-.01.39-.28.64l-.02.02-.04.02-.03.03q-.03 0-.04.03l-.03.01q-.12.09-.28.11h-.05l-.03.01h-.23l-.04-.02h-.04l-.03-.02-.05-.01-.04-.02-.04-.02q-.02 0-.03-.02h-.02l-3.46-2c-.42-.24-.56-.78-.32-1.2s.77-.56 1.2-.32l2.15 1.24V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock10FillDuotone.displayName = 'Clock10FillDuotone';

// Triple export pattern
export { Clock10FillDuotone, Clock10FillDuotone as Clock10FillDuotoneIcon, Clock10FillDuotone as SiClock10FillDuotone };
export default Clock10FillDuotone;
export type { Clock10FillDuotoneProps };
