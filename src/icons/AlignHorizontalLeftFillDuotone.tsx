import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-left-fill-duotone" {...props}>
      <path d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M13 13q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.37.02-.88.02H8.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM19 5.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H8.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

AlignHorizontalLeftFillDuotone.displayName = 'AlignHorizontalLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalLeftFillDuotone, AlignHorizontalLeftFillDuotone as AlignHorizontalLeftFillDuotoneIcon, AlignHorizontalLeftFillDuotone as SiAlignHorizontalLeftFillDuotone };
export default AlignHorizontalLeftFillDuotone;
export type { AlignHorizontalLeftFillDuotoneProps };
