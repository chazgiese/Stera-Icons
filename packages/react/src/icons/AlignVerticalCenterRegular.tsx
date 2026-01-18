import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalCenterRegularProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterRegular = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.25 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v5h2V9q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v2H21a1 1 0 1 1 0 2h-2.5v2q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 15.51 13 15v-2h-2v5q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88v-5H3a1 1 0 1 1 0-2h2.5V6q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02m0 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22L7 6v12l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76V6l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22A1 1 0 0 0 9 4.76zm7.5 3-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v6l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22L17 15V9l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalCenterRegular.displayName = 'AlignVerticalCenterRegular';

export { AlignVerticalCenterRegular };
export type { AlignVerticalCenterRegularProps };
