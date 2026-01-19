import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M3.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L9.88 12 3.94 6.06a1.5 1.5 0 0 1 0-2.12" opacity={.4} />
        <path fill="currentColor" d="M11.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L17.88 12l-5.94-5.94a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

ChevronsRightFillDuotone.displayName = 'ChevronsRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsRightFillDuotone, ChevronsRightFillDuotone as ChevronsRightFillDuotoneIcon, ChevronsRightFillDuotone as SiChevronsRightFillDuotone };
export type { ChevronsRightFillDuotoneProps };
