import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 5a1 1 0 0 0-1 1v4H7a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PlusCircleFillDuotone.displayName = 'PlusCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusCircleFillDuotone, PlusCircleFillDuotone as PlusCircleFillDuotoneIcon, PlusCircleFillDuotone as SiPlusCircleFillDuotone };
export type { PlusCircleFillDuotoneProps };
