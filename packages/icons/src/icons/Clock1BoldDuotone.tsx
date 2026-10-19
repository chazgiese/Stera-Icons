import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock1BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v1.27l.13-.23c.28-.48.9-.65 1.37-.37s.64.89.37 1.37l-2 3.46-.02.02-.03.05-.04.05-.02.02q0 .03-.04.05l-.03.03-.03.03-.03.03-.05.04-.04.02-.04.03-.05.02-.02.01-.07.03-.02.01-.07.02-.04.01-.05.01h-.05l-.04.02h-.21l-.04-.01-.05-.01-.04-.01-.06-.02-.03-.01-.06-.02-.05-.03-.03-.02h-.02l-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02q-.06-.06-.1-.12l-.03-.04-.03-.05-.02-.04-.01-.02q-.04-.07-.06-.16l-.01-.04-.01-.05-.01-.05v-.04l-.01-.07V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock1BoldDuotone.displayName = 'Clock1BoldDuotone';

// Triple export pattern
export { Clock1BoldDuotone, Clock1BoldDuotone as Clock1BoldDuotoneIcon, Clock1BoldDuotone as SiClock1BoldDuotone };
export default Clock1BoldDuotone;
export type { Clock1BoldDuotoneProps };
