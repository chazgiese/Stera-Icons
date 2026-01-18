import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalRightRegularProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightRegular = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 2.25c.41 0 .75.34.75.75v18a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M16 13q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02h-5q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zm-5 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76.01.76.04.22q.08.15.22.22l.22.04.76.01h5l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L16 14.5zM16 5.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM5 7l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76.01.76.04.22q.08.15.22.22l.22.04.76.01h11l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L16 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalRightRegular.displayName = 'AlignHorizontalRightRegular';

export { AlignHorizontalRightRegular };
export type { AlignHorizontalRightRegularProps };
