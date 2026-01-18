import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 13H3a1 1 0 1 1 0-2h2.5zM13 13h-2v-2h2zM21 11a1 1 0 1 1 0 2h-2.5v-2z" opacity={0.4} />
        <path fill="currentColor" d="M8.25 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v12q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02M15.75 6.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v6q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 15.51 13 15V9q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02" />
    </IconBase>
  ))
);

AlignVerticalCenterFillDuotone.displayName = 'AlignVerticalCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalCenterFillDuotone, AlignVerticalCenterFillDuotone as AlignVerticalCenterFillDuotoneIcon, AlignVerticalCenterFillDuotone as SiAlignVerticalCenterFillDuotone };
export type { AlignVerticalCenterFillDuotoneProps };
