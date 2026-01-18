import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronInwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronInwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 2a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 2z" />
        <path fill="currentColor" d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.7-1.7z" opacity={.4} />
    </IconBase>
  ))
);

ChevronInwardFillDuotone.displayName = 'ChevronInwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronInwardFillDuotone, ChevronInwardFillDuotone as ChevronInwardFillDuotoneIcon, ChevronInwardFillDuotone as SiChevronInwardFillDuotone };
export type { ChevronInwardFillDuotoneProps };
