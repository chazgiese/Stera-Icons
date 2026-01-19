import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up-bold-duotone" {...props}>
      <path fill="currentColor" d="M19.7 14.3a1 1 0 1 1-1.4 1.4L12 9.42l.7-.7a1 1 0 0 0 0-1.42z" opacity={.4} />
        <path fill="currentColor" d="M11.3 7.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

ChevronUpBoldDuotone.displayName = 'ChevronUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronUpBoldDuotone, ChevronUpBoldDuotone as ChevronUpBoldDuotoneIcon, ChevronUpBoldDuotone as SiChevronUpBoldDuotone };
export type { ChevronUpBoldDuotoneProps };
