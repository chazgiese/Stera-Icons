import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock11FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v1.27l-.13-.23a1 1 0 0 0-1.74 1l2 3.46.02.02q0 .03.03.05l.03.05.02.02.2.18.02.01.06.04.03.02.04.01.06.03.02.01.07.02.04.01.21.03h.14l.03-.01.06-.01.05-.02.05-.01.03-.01.06-.02.05-.03.03-.02h.02l.03-.02.04-.03.04-.03.03-.03.18-.18.02-.04.03-.04.02-.05.02-.03a1 1 0 0 0 .08-.29v-.11L13 12V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v5.09l-.01.04a1 1 0 0 1-.08.3l-.02.02q0 .03-.03.05l-.02.04-.2.22-.03.03-.04.03-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.05.01-.05.02h-.06l-.03.01H12L12 13h-.02l-.21-.03-.04-.01-.07-.02h-.02l-.06-.04-.04-.01-.03-.02-.06-.04h-.02l-.2-.19-.02-.02q0-.02-.03-.05l-.03-.05-.02-.02-2-3.46a1 1 0 0 1 1.74-1l.13.23V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock11FillDuotone.displayName = 'Clock11FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock11FillDuotone, Clock11FillDuotone as Clock11FillDuotoneIcon, Clock11FillDuotone as SiClock11FillDuotone };
export default Clock11FillDuotone;
export type { Clock11FillDuotoneProps };
