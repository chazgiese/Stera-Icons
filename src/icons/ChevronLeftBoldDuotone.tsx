import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.7 18.3a1 1 0 1 1-1.4 1.4l-7-7a1 1 0 0 0 1.4 0l.71-.7z" opacity={.4} />
        <path fill="currentColor" d="M14.3 4.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

ChevronLeftBoldDuotone.displayName = 'ChevronLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronLeftBoldDuotone, ChevronLeftBoldDuotone as ChevronLeftBoldDuotoneIcon, ChevronLeftBoldDuotone as SiChevronLeftBoldDuotone };
export type { ChevronLeftBoldDuotoneProps };
