import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock10BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5q0 .1-.02.2l-.01.04q-.06.24-.21.41l-.03.03-.04.04-.03.03-.05.04-.02.02q-.03 0-.05.03l-.04.02q-.1.07-.23.1h-.03l-.06.02h-.04l-.05.02h-.2l-.08-.02h-.02l-.06-.02h-.03l-.06-.03-.04-.01-.1-.05-3.46-2c-.48-.28-.65-.9-.37-1.37s.89-.64 1.37-.37L11 10.27V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock10BoldDuotone.displayName = 'Clock10BoldDuotone';

// Triple export pattern
export { Clock10BoldDuotone, Clock10BoldDuotone as Clock10BoldDuotoneIcon, Clock10BoldDuotone as SiClock10BoldDuotone };
export default Clock10BoldDuotone;
export type { Clock10BoldDuotoneProps };
