import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChatBoxOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.67 4.73q-.34.35-.57.8c-.15.3-.25.68-.3 1.3-.05.63-.05 1.44-.05 2.57v2.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05H9c.41 0 .75.34.75.75v2.6l4.83-3.22.1-.06q.14-.07.32-.07h1.19l1.48 1.48q-.86.02-2.07.02h-.37l-5.04 3.36a1.25 1.25 0 0 1-1.94-1.04v-2.32q-1.55.02-2.54-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87.33-.64.84-1.17zM15.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v2.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87q-.3.58-.73 1.05a.75.75 0 0 1-1.1-1.01q.3-.33.5-.72c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05H7.24a.75.75 0 0 1-.01-1.5h8.370000000000001" />
        <path fill="currentColor" d="M1.47 1.47c.3-.3.77-.3 1.06 0l19 19a.75.75 0 1 1-1.06 1.06l-19-19a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChatBoxOffRegularDuotone.displayName = 'ChatBoxOffRegularDuotone';

export { ChatBoxOffRegularDuotone };
export type { ChatBoxOffRegularDuotoneProps };
