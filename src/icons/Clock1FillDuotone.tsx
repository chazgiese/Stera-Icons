import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock1FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-1-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6.09l.01.04a1 1 0 0 0 .09.3v.02l.06.1.02.03.18.18.02.02.05.04.04.03.03.02.05.02.05.03.06.02.03.01.06.02.1.02h.14L12 13h.09l.04-.01.1-.02h.04q.04-.02.07-.03h.02l.07-.04.02-.01.05-.02.04-.03.04-.02.18-.18.02-.02.04-.05.03-.05.02-.02 2-3.46a1 1 0 0 0-1.74-1l-.13.23V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v2.27l.13-.23a1 1 0 0 1 1.74 1l-2 3.46-.02.02-.03.05-.04.05-.02.02-.18.18-.04.02-.04.03-.05.02-.02.01-.07.03-.02.01-.07.02-.04.01-.1.02h-.11L12 13h-.12l-.04-.01-.1-.02-.05-.02-.03-.01-.06-.02-.05-.03-.03-.02h-.02l-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02-.1-.12-.03-.04-.05-.09-.01-.02a1 1 0 0 1-.09-.3v-.04l-.01-.07V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock1FillDuotone.displayName = 'Clock1FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock1FillDuotone, Clock1FillDuotone as Clock1FillDuotoneIcon, Clock1FillDuotone as SiClock1FillDuotone };
export default Clock1FillDuotone;
export type { Clock1FillDuotoneProps };
