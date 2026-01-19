import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftRightEllipsisBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-right-ellipsis-bold-duotone" {...props}>
      <path d="M6.3 6.3a1 1 0 1 1 1.4 1.4L3.42 12l4.3 4.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4zM16.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l4.29-4.3-4.3-4.3a1 1 0 0 1 0-1.4" opacity={0.4} />
        <path fill="currentColor" d="M8 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisBoldDuotone.displayName = 'ChevronsLeftRightEllipsisBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRightEllipsisBoldDuotone, ChevronsLeftRightEllipsisBoldDuotone as ChevronsLeftRightEllipsisBoldDuotoneIcon, ChevronsLeftRightEllipsisBoldDuotone as SiChevronsLeftRightEllipsisBoldDuotone };
export default ChevronsLeftRightEllipsisBoldDuotone;
export type { ChevronsLeftRightEllipsisBoldDuotoneProps };
