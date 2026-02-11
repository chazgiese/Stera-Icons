import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-top-duotone" {...props}>
      <path d="M21 2a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" opacity={.4} />
        <path fillRule="evenodd" d="M8.25 5.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v11q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V8q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02m0 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22L7 8v11l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76V8l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22A1 1 0 0 0 9 6.76zM15.75 5.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v5q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 13.51 13 13V8q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02m0 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v5l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22L17 13V8l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalTopRegularDuotone.displayName = 'AlignVerticalTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopRegularDuotone, AlignVerticalTopRegularDuotone as AlignVerticalTopRegularDuotoneIcon, AlignVerticalTopRegularDuotone as SiAlignVerticalTopRegularDuotone };
export default AlignVerticalTopRegularDuotone;
export type { AlignVerticalTopRegularDuotoneProps };
