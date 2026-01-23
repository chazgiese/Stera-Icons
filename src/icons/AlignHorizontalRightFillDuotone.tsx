import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M21 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M15.5 13q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H11q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM15.5 5.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

AlignHorizontalRightFillDuotone.displayName = 'AlignHorizontalRightFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalRightFillDuotone, AlignHorizontalRightFillDuotone as AlignHorizontalRightFillDuotoneIcon, AlignHorizontalRightFillDuotone as SiAlignHorizontalRightFillDuotone };
export default AlignHorizontalRightFillDuotone;
export type { AlignHorizontalRightFillDuotoneProps };
