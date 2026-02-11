import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalTopFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-top-fill" {...props}>
      <path d="M22 3.25a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1M13 13.25q0 .51.02.88.02.39.2.78.3.57.87.87.39.18.78.2.37.02.88.02.52 0 .88-.02.39-.02.78-.2a2 2 0 0 0 .87-.87q.18-.39.2-.78.02-.37.02-.88v-4.5q0-.52-.02-.88a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.87 2 2 0 0 0-.78-.2Q16.27 6 15.75 6q-.51 0-.88.02-.39.02-.78.2a2 2 0 0 0-.87.87q-.18.39-.2.78-.02.36-.02.88zM5.5 19.25q0 .52.02.88.02.39.2.78.3.57.87.87.39.18.78.2.37.02.88.02.52 0 .88-.02.39-.02.78-.2a2 2 0 0 0 .87-.87q.18-.39.2-.78.02-.36.02-.88V8.75q0-.52-.02-.88a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.87 2 2 0 0 0-.78-.2Q8.77 6 8.25 6q-.51 0-.88.02-.39.02-.78.2a2 2 0 0 0-.87.87q-.18.39-.2.78-.02.36-.02.88z" />
    </IconBase>
  ))
);

AlignVerticalTopFill.displayName = 'AlignVerticalTopFill';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopFill, AlignVerticalTopFill as AlignVerticalTopFillIcon, AlignVerticalTopFill as SiAlignVerticalTopFill };
export default AlignVerticalTopFill;
export type { AlignVerticalTopFillProps };
