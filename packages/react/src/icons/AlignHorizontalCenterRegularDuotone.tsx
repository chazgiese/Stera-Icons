import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalCenterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-2.5h2zM13 13h-2v-2h2zM12 2a1 1 0 0 1 1 1v2.5h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15 13q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.37.02-.88.02H9q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2Q8.48 13 9 13zm-6 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76.01.76.04.22q.08.15.22.22l.22.04L9 17h6l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L15 14.5zM18 5.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H6q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM6 7l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76.01.76.04.22q.08.15.22.22l.22.04.76.01h12l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L18 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterRegularDuotone.displayName = 'AlignHorizontalCenterRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterRegularDuotone, AlignHorizontalCenterRegularDuotone as AlignHorizontalCenterRegularDuotoneIcon, AlignHorizontalCenterRegularDuotone as SiAlignHorizontalCenterRegularDuotone };
export type { AlignHorizontalCenterRegularDuotoneProps };
