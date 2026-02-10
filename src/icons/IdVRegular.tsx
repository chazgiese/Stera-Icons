import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVRegularProps = Omit<IconBaseProps, 'children'>;

const IdVRegular = memo(
  forwardRef<SVGSVGElement, IdVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-v" {...props}>
      <path fill="currentColor" d="M14.5 5.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 1 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.2 2.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v8.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37l-.63.04H8.4q-.12 0-.24-.02l-.4-.02a4 4 0 0 1-1.46-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-3.1 15a2.85 2.85 0 0 0-2.85 2.85q0 .1.09.14l1.46.01h4.4l1.46-.01a.2.2 0 0 0 .09-.14 2.85 2.85 0 0 0-2.85-2.85zM9.8 3.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.27.53.77.85A4.4 4.4 0 0 1 9.4 16.1a3.5 3.5 0 1 1 5.2 0 4.4 4.4 0 0 1 2.64 3.78q.5-.32.76-.85c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V7.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04zm2.2 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

IdVRegular.displayName = 'IdVRegular';

// Triple export pattern (lucide-react style)
export { IdVRegular, IdVRegular as IdVRegularIcon, IdVRegular as SiIdVRegular };
export default IdVRegular;
export type { IdVRegularProps };
