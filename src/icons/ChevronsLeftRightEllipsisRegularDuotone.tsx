import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsLeftRightEllipsisRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-right-ellipsis-duotone" {...props}>
      <path d="M6.47 6.47a.75.75 0 1 1 1.06 1.06L3.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06zM16.47 6.47c.3-.3.77-.3 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L20.94 12l-4.47-4.47a.75.75 0 0 1 0-1.06" opacity={0.4} />
        <path fill="currentColor" d="M8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisRegularDuotone.displayName = 'ChevronsLeftRightEllipsisRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRightEllipsisRegularDuotone, ChevronsLeftRightEllipsisRegularDuotone as ChevronsLeftRightEllipsisRegularDuotoneIcon, ChevronsLeftRightEllipsisRegularDuotone as SiChevronsLeftRightEllipsisRegularDuotone };
export type { ChevronsLeftRightEllipsisRegularDuotoneProps };
