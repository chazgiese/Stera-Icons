import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 18.5V21a1 1 0 1 1-2 0v-2.5zM13 13h-2v-2h2zM12 2a1 1 0 0 1 1 1v2.5h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M15 13q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.37.02-.88.02H9q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2Q8.48 13 9 13zM18 5.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H6q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02z" />
    </IconBase>
  ))
);

AlignHorizontalCenterFillDuotone.displayName = 'AlignHorizontalCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterFillDuotone, AlignHorizontalCenterFillDuotone as AlignHorizontalCenterFillDuotoneIcon, AlignHorizontalCenterFillDuotone as SiAlignHorizontalCenterFillDuotone };
export type { AlignHorizontalCenterFillDuotoneProps };
