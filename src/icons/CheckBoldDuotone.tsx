import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-bold-duotone" {...props}>
      <path d="M3.43 10.32a1 1 0 0 1 1.39.25l4.1 5.84-.85.9a1 1 0 0 0-.1 1.25l-4.79-6.84a1 1 0 0 1 .25-1.4" opacity={0.4} />
        <path fill="currentColor" d="M19.27 5.32a1 1 0 0 1 1.46 1.36l-11.2 12a1 1 0 0 1-1.46-1.36z" />
    </IconBase>
  ))
);

CheckBoldDuotone.displayName = 'CheckBoldDuotone';

// Triple export pattern (lucide-react style)
export { CheckBoldDuotone, CheckBoldDuotone as CheckBoldDuotoneIcon, CheckBoldDuotone as SiCheckBoldDuotone };
export type { CheckBoldDuotoneProps };
