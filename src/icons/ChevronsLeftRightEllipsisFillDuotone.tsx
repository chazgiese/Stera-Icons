import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftRightEllipsisFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-right-ellipsis-fill-duotone" {...props}>
      <path d="M5.94 5.94a1.5 1.5 0 1 1 2.12 2.12L4.12 12l3.94 3.94a1.5 1.5 0 1 1-2.12 2.12l-5-5a1.5 1.5 0 0 1 0-2.12zM15.94 5.94a1.5 1.5 0 0 1 2.12 0l5 5a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 1 1-2.12-2.12L19.88 12l-3.94-3.94a1.5 1.5 0 0 1 0-2.12" opacity={0.4} />
        <path fill="currentColor" d="M8 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisFillDuotone.displayName = 'ChevronsLeftRightEllipsisFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRightEllipsisFillDuotone, ChevronsLeftRightEllipsisFillDuotone as ChevronsLeftRightEllipsisFillDuotoneIcon, ChevronsLeftRightEllipsisFillDuotone as SiChevronsLeftRightEllipsisFillDuotone };
export default ChevronsLeftRightEllipsisFillDuotone;
export type { ChevronsLeftRightEllipsisFillDuotoneProps };
