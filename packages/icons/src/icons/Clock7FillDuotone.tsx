import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock7FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v4.76l-1.89 3.27c-.24.41-.1.95.32 1.2.42.23.96.09 1.2-.33l2-3.46v-.01l.06-.12.03-.12.01-.05v-.04l.01-.04V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5.06l-.01.04v.04l-.02.05-.03.12-.06.12-2 3.47c-.24.42-.78.56-1.2.32s-.56-.78-.32-1.2l1.89-3.26V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock7FillDuotone.displayName = 'Clock7FillDuotone';

// Triple export pattern
export { Clock7FillDuotone, Clock7FillDuotone as Clock7FillDuotoneIcon, Clock7FillDuotone as SiClock7FillDuotone };
export default Clock7FillDuotone;
export type { Clock7FillDuotoneProps };
