import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1BoldProps = Omit<IconBaseProps, 'children'>;

const Clock1Bold = memo(
  forwardRef<SVGSVGElement, Clock1BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-1-bold" {...props}>
      <path d="M12 6a1 1 0 0 1 1 1v1.27l.13-.23a1 1 0 0 1 1.74 1l-2 3.46-.01.01-.04.06-.04.05-.02.02-.18.18-.04.02-.04.03-.05.02-.02.01-.07.03-.02.01-.07.02-.04.01-.1.02h-.11L12 13h-.12l-.04-.01-.1-.02-.05-.02-.03-.01-.06-.02-.05-.03-.03-.02h-.02l-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.18-.18-.02-.04-.05-.09-.01-.02a1 1 0 0 1-.09-.3v-.04l-.01-.07V7a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock1Bold.displayName = 'Clock1Bold';

// Triple export pattern (lucide-react style)
export { Clock1Bold, Clock1Bold as Clock1BoldIcon, Clock1Bold as SiClock1Bold };
export default Clock1Bold;
export type { Clock1BoldProps };
