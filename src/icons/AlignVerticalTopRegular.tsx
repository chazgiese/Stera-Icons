import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalTopRegularProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopRegular = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-top" {...props}>
      <path fill="currentColor" d="M2.25 3c0 .41.34.75.75.75h18a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0-.75.75" />
        <path fill="currentColor" fillRule="evenodd" d="M13 13q0 .51.02.88.02.39.2.78.3.57.87.87.39.18.78.2.37.02.88.02.52 0 .88-.02.39-.02.78-.2a2 2 0 0 0 .87-.87q.18-.39.2-.78.02-.37.02-.88V8q0-.51-.02-.88a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.87 2 2 0 0 0-.78-.2q-.36-.02-.88-.02-.51 0-.88.02-.39.02-.78.2a2 2 0 0 0-.87.87q-.18.39-.2.78Q13 7.49 13 8zm1.5-5 .01-.76.04-.22a.5.5 0 0 1 .22-.22l.22-.04.76-.01.76.01.22.04q.15.08.22.22l.04.22L17 8v5l-.01.76a1 1 0 0 1-.04.22.5.5 0 0 1-.22.22 1 1 0 0 1-.22.04l-.76.01-.76-.01a1 1 0 0 1-.22-.04.5.5 0 0 1-.22-.22 1 1 0 0 1-.04-.22L14.5 13zM5.5 19q0 .52.02.88.02.39.2.78.3.57.87.87.39.18.78.2.37.02.88.02.52 0 .88-.02.39-.02.78-.2a2 2 0 0 0 .87-.87q.18-.39.2-.78.02-.36.02-.88V8q0-.51-.02-.88a2 2 0 0 0-.2-.78 2 2 0 0 0-.87-.87 2 2 0 0 0-.78-.2q-.36-.02-.88-.02-.51 0-.88.02-.39.02-.78.2a2 2 0 0 0-.87.87q-.18.39-.2.78-.02.37-.02.88zM7 8l.01-.76.04-.22a.5.5 0 0 1 .22-.22l.22-.04.76-.01.76.01.22.04q.15.08.22.22l.04.22.01.76v11l-.01.76a1 1 0 0 1-.04.22.5.5 0 0 1-.22.22 1 1 0 0 1-.22.04l-.76.01-.76-.01a1 1 0 0 1-.22-.04.5.5 0 0 1-.22-.22 1 1 0 0 1-.04-.22L7 19z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalTopRegular.displayName = 'AlignVerticalTopRegular';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopRegular, AlignVerticalTopRegular as AlignVerticalTopRegularIcon, AlignVerticalTopRegular as SiAlignVerticalTopRegular };
export type { AlignVerticalTopRegularProps };
