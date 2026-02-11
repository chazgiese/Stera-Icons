import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-center-fill" {...props}>
      <path d="M8.25 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v5h2V9q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v2H21a1 1 0 1 1 0 2h-2.5v2q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 15.51 13 15v-2h-2v5q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88v-5H3a1 1 0 1 1 0-2h2.5V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02" />
    </IconBase>
  ))
);

AlignVerticalCenterFill.displayName = 'AlignVerticalCenterFill';

// Triple export pattern (lucide-react style)
export { AlignVerticalCenterFill, AlignVerticalCenterFill as AlignVerticalCenterFillIcon, AlignVerticalCenterFill as SiAlignVerticalCenterFill };
export default AlignVerticalCenterFill;
export type { AlignVerticalCenterFillProps };
