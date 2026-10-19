import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock2BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock2BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v3.27l1.96-1.14c.48-.27 1.1-.1 1.37.37.28.48.11 1.09-.37 1.37l-3.46 2h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02h-.04l-.03.01-.07.01H12L12 13h-.09l-.04-.01h-.05l-.05-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.05-.02-.04-.03-.04-.02-.05-.04-.01-.01-.06-.06-.02-.01-.05-.06-.02-.02q0-.02-.03-.05l-.03-.04-.02-.03v-.02l-.02-.03-.03-.05-.02-.06v-.02l-.02-.02v-.05l-.02-.04v-.03l-.02-.15V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock2BoldDuotone.displayName = 'Clock2BoldDuotone';

// Triple export pattern
export { Clock2BoldDuotone, Clock2BoldDuotone as Clock2BoldDuotoneIcon, Clock2BoldDuotone as SiClock2BoldDuotone };
export default Clock2BoldDuotone;
export type { Clock2BoldDuotoneProps };
