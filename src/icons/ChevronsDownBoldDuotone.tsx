import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-down-bold-duotone" {...props}>
      <path fill="currentColor" d="M18.3 4.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" opacity={.4} />
        <path fill="currentColor" d="M18.3 12.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronsDownBoldDuotone.displayName = 'ChevronsDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsDownBoldDuotone, ChevronsDownBoldDuotone as ChevronsDownBoldDuotoneIcon, ChevronsDownBoldDuotone as SiChevronsDownBoldDuotone };
export type { ChevronsDownBoldDuotoneProps };
