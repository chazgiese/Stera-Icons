import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock4BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v4.42l2.96 1.71c.48.28.65.9.37 1.37s-.89.64-1.37.37l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02q-.06-.06-.1-.12l-.03-.04-.03-.05-.02-.04-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.01-.05-.01-.05v-.04l-.01-.07V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock4BoldDuotone.displayName = 'Clock4BoldDuotone';

// Triple export pattern
export { Clock4BoldDuotone, Clock4BoldDuotone as Clock4BoldDuotoneIcon, Clock4BoldDuotone as SiClock4BoldDuotone };
export default Clock4BoldDuotone;
export type { Clock4BoldDuotoneProps };
