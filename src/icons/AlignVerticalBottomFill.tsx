import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalBottomFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-bottom-fill" {...props}>
      <path fill="currentColor" d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM8.25 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v10.5q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V5q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02M15.75 8.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v4.5q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V11q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02" />
    </IconBase>
  ))
);

AlignVerticalBottomFill.displayName = 'AlignVerticalBottomFill';

// Triple export pattern (lucide-react style)
export { AlignVerticalBottomFill, AlignVerticalBottomFill as AlignVerticalBottomFillIcon, AlignVerticalBottomFill as SiAlignVerticalBottomFill };
export default AlignVerticalBottomFill;
export type { AlignVerticalBottomFillProps };
