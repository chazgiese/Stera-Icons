import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11BoldProps = Omit<IconBaseProps, 'children'>;

const Clock11Bold = memo(
  forwardRef<SVGSVGElement, Clock11BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11-bold" {...props}>
      <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v5.09l-.01.04a1 1 0 0 1-.09.3l-.01.02-.05.1-.02.03-.18.18-.02.02-.05.04-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02-.1.02h-.14L12 13h-.09l-.04-.01-.1-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.1-.05-.03-.02-.05-.04-.03-.03-.04-.03-.07-.08-.02-.02q0-.02-.03-.05l-.04-.06v-.01l-2-3.46a1 1 0 0 1 1.73-1l.13.23V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Bold.displayName = 'Clock11Bold';

// Triple export pattern (lucide-react style)
export { Clock11Bold, Clock11Bold as Clock11BoldIcon, Clock11Bold as SiClock11Bold };
export default Clock11Bold;
export type { Clock11BoldProps };
