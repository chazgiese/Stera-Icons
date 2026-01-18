import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm4.7 6.3a1 1 0 0 0-1.4 0l-6.2 6.18-2.3-3.08a1 1 0 0 0-1.6 1.2l2.45 3.26q.13.19.28.36c.1.12.27.28.52.4q.5.2 1 .06.4-.12.58-.31l.33-.32 6.35-6.34a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.3 8.3a1 1 0 0 1 1.4 1.4l-6.34 6.35q-.16.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.25-.1-.41-.27-.52-.39q-.16-.16-.28-.36L6.2 12.6a1 1 0 1 1 1.6-1.2l2.3 3.08z" />
    </IconBase>
  ))
);

CheckSquareFillDuotone.displayName = 'CheckSquareFillDuotone';

export { CheckSquareFillDuotone };
export type { CheckSquareFillDuotoneProps };
