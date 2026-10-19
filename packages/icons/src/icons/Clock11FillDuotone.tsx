import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock11FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v1.73l-.37-.63c-.24-.42-.78-.56-1.2-.32s-.56.78-.32 1.2l2 3.46.01.02.03.04.02.03.03.04.03.02.03.04.04.03.03.02.03.03.03.02.04.03.05.02h.01l.07.04h.01l.07.02h.01l.06.02h.06l.02.01h.21q.13-.03.22-.07h.02l.06-.04.03-.01.04-.04.04-.02.03-.03.03-.02.03-.04.03-.02q0-.03.03-.04l.02-.03.02-.03.03-.04.08-.2.01-.04v-.04l.02-.04V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5.07l-.01.05-.01.04v.04l-.02.04-.08.2-.03.04-.02.03-.02.03-.03.04-.03.02q0 .03-.03.04l-.03.02-.03.03-.04.02-.04.04h-.02l-.01.01-.06.03-.02.01q-.1.04-.22.06h-.03l-.03.01h-.17l-.06-.01-.06-.01h-.01l-.07-.03h-.01l-.07-.03h-.01l-.05-.03-.04-.03-.03-.02-.03-.03-.03-.02-.04-.03-.03-.04-.03-.02q0-.03-.03-.04l-.02-.03-.03-.04v-.02l-2-3.47c-.25-.41-.1-.95.31-1.2.42-.23.96-.09 1.2.33l.37.63V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock11FillDuotone.displayName = 'Clock11FillDuotone';

// Triple export pattern
export { Clock11FillDuotone, Clock11FillDuotone as Clock11FillDuotoneIcon, Clock11FillDuotone as SiClock11FillDuotone };
export default Clock11FillDuotone;
export type { Clock11FillDuotoneProps };
