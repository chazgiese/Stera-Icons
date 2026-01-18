import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29-.7.7a1 1 0 0 0 0 1.42l-7-7a1 1 0 0 1 0-1.42" opacity={.4} />
        <path fill="currentColor" d="M18.3 8.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

ChevronDownBoldDuotone.displayName = 'ChevronDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronDownBoldDuotone, ChevronDownBoldDuotone as ChevronDownBoldDuotoneIcon, ChevronDownBoldDuotone as SiChevronDownBoldDuotone };
export type { ChevronDownBoldDuotoneProps };
