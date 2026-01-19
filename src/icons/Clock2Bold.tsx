import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock2BoldProps = Omit<IconBaseProps, 'children'>;

const Clock2Bold = memo(
  forwardRef<SVGSVGElement, Clock2BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-2-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v4.27l1.96-1.14a1 1 0 0 1 1 1.74l-3.46 2h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02h-.04l-.03.01-.07.01H12L12 13h-.09l-.04-.01-.1-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.1-.05-.03-.02-.05-.04-.01-.01-.13-.13-.02-.02q0-.02-.03-.05l-.03-.04-.02-.03v-.02l-.02-.03-.03-.05-.02-.06v-.02l-.02-.02v-.05l-.02-.04v-.03l-.02-.15V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Bold.displayName = 'Clock2Bold';

// Triple export pattern (lucide-react style)
export { Clock2Bold, Clock2Bold as Clock2BoldIcon, Clock2Bold as SiClock2Bold };
export default Clock2Bold;
export type { Clock2BoldProps };
