import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-top-fill-duotone" {...props}>
      <path d="M22 3a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1" opacity={.4} />
        <path d="M13 13q0 .51.02.88.02.39.2.78.3.57.87.87.39.18.78.2.37.02.88.02.52 0 .88-.02.39-.02.78-.2a2 2 0 0 0 .87-.87q.18-.39.2-.78.02-.37.02-.88V8.5q0-.51-.02-.88a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.87 2 2 0 0 0-.78-.2q-.36-.02-.88-.02-.51 0-.88.02-.39.02-.78.2a2 2 0 0 0-.87.87q-.18.39-.2.78-.02.37-.02.88zM5.5 19q0 .52.02.88.02.39.2.78.3.57.87.87.39.18.78.2.37.02.88.02.52 0 .88-.02.39-.02.78-.2a2 2 0 0 0 .87-.87q.18-.39.2-.78.02-.36.02-.88V8.5q0-.51-.02-.88a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.87 2 2 0 0 0-.78-.2q-.36-.02-.88-.02-.51 0-.88.02-.39.02-.78.2a2 2 0 0 0-.87.87q-.18.39-.2.78-.02.37-.02.88z" />
    </IconBase>
  ))
);

AlignVerticalTopFillDuotone.displayName = 'AlignVerticalTopFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopFillDuotone, AlignVerticalTopFillDuotone as AlignVerticalTopFillDuotoneIcon, AlignVerticalTopFillDuotone as SiAlignVerticalTopFillDuotone };
export default AlignVerticalTopFillDuotone;
export type { AlignVerticalTopFillDuotoneProps };
