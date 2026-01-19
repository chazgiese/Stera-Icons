import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock4FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock4FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6.09l.01.04.02.1v.04l.03.07v.02l.04.07v.02l.06.1.02.03.18.18.02.02.05.04.04.03.03.02 3.46 2a1 1 0 0 0 1-1.74L13 11.43V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5.42l2.96 1.71a1 1 0 0 1-1 1.74l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02-.1-.12-.03-.04-.05-.09-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.02-.1v-.04l-.01-.07V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock4FillDuotone.displayName = 'Clock4FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock4FillDuotone, Clock4FillDuotone as Clock4FillDuotoneIcon, Clock4FillDuotone as SiClock4FillDuotone };
export type { Clock4FillDuotoneProps };
