import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalBottomRegularProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomRegular = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 20.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M8.25 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v11q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88V5q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02m0 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22L7 5v11l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76V5l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22A1 1 0 0 0 9 3.76zM15.75 8.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v5q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 16.52 13 16v-5q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02m0 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v5l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22L17 16v-5l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalBottomRegular.displayName = 'AlignVerticalBottomRegular';

export { AlignVerticalBottomRegular };
export type { AlignVerticalBottomRegularProps };
