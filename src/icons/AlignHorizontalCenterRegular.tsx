import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalCenterRegularProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterRegular = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-center" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 21a1 1 0 1 1-2 0v-2.5H9q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2Q8.48 13 9 13h2v-2H6q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02h5V3a1 1 0 1 1 2 0v2.5h5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02h-5v2h2q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.37.02-.88.02h-2zm-4-6.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76.01.76.04.22q.08.15.22.22l.22.04L9 17h6l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L15 14.5zM6 7l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76.01.76.04.22q.08.15.22.22l.22.04.76.01h12l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L18 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterRegular.displayName = 'AlignHorizontalCenterRegular';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterRegular, AlignHorizontalCenterRegular as AlignHorizontalCenterRegularIcon, AlignHorizontalCenterRegular as SiAlignHorizontalCenterRegular };
export type { AlignHorizontalCenterRegularProps };
