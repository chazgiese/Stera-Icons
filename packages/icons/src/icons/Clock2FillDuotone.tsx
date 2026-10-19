import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock2FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock2FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5.13l.02.06.03.12.06.12.01.03.03.04.03.04.02.03.03.03.03.03.11.09.02.01.04.03.05.02h.01l.07.04h.01l.07.02.07.02h.05l.03.01h.21l.06-.02h.04l.03-.02.05-.01.04-.02h.02l.06-.04 3.47-2c.42-.24.56-.78.32-1.2s-.78-.56-1.2-.32l-2.14 1.24V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v3.48l2.15-1.24c.41-.24.95-.1 1.2.32.23.42.09.96-.33 1.2l-3.46 2h-.01l-.06.03-.02.01-.04.02-.05.01-.03.01-.04.01-.06.01h-.03l-.03.01h-.18l-.05-.01-.06-.01h-.01l-.07-.03h-.01l-.07-.03h-.01l-.05-.03-.04-.03-.02-.01-.1-.09-.04-.03-.03-.03-.02-.03-.03-.04-.03-.04v-.02l-.01-.01-.06-.12-.03-.12-.01-.06-.02-.1V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock2FillDuotone.displayName = 'Clock2FillDuotone';

// Triple export pattern
export { Clock2FillDuotone, Clock2FillDuotone as Clock2FillDuotoneIcon, Clock2FillDuotone as SiClock2FillDuotone };
export default Clock2FillDuotone;
export type { Clock2FillDuotoneProps };
