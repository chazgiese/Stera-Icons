import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M10.3 4.3a1 1 0 1 1 1.4 1.4L5.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
        <path fill="currentColor" d="M18.3 4.3a1 1 0 1 1 1.4 1.4L13.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsLeftBoldDuotone.displayName = 'ChevronsLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftBoldDuotone, ChevronsLeftBoldDuotone as ChevronsLeftBoldDuotoneIcon, ChevronsLeftBoldDuotone as SiChevronsLeftBoldDuotone };
export default ChevronsLeftBoldDuotone;
export type { ChevronsLeftBoldDuotoneProps };
