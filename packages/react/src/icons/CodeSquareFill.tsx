import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeSquareFillProps = Omit<IconBaseProps, 'children'>;

const CodeSquareFill = memo(
  forwardRef<SVGSVGElement, CodeSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm.82 4.55a1 1 0 0 0-1.27.63l-3 9a1 1 0 1 0 1.9.64l3-9a1 1 0 0 0-.63-1.27M8.7 9.3a1 1 0 0 0-1.42 0l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 1 0 1.42-1.42L7.4 12l1.3-1.3a1 1 0 0 0 0-1.4m8 0a1 1 0 1 0-1.42 1.42L16.6 12l-1.3 1.3a1 1 0 1 0 1.42 1.4l2-2a1 1 0 0 0 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeSquareFill.displayName = 'CodeSquareFill';

export { CodeSquareFill };
export type { CodeSquareFillProps };
