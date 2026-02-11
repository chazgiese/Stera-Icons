import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogRegularProps = Omit<IconBaseProps, 'children'>;

const NotebookLogRegular = memo(
  forwardRef<SVGSVGElement, NotebookLogRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-log" {...props}>
      <path d="M12 12.25a.75.75 0 0 1 0 1.5H9.5a.75.75 0 0 1 0-1.5zM14.5 8.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 1 1 0-1.5z" />
        <path fillRule="evenodd" d="M14.2 2.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v8.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47l-.04-.98H3.5a.75.75 0 0 1 0-1.5h.75v-3H3.5a.75.75 0 0 1 0-1.5h.75v-3H3.5a.75.75 0 1 1 0-1.5h.75l.04-.98c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91l-.04.86h.75a.75.75 0 0 1 0 1.5h-.75v3h.75a.75.75 0 0 1 0 1.5h-.75v3h.75a.75.75 0 0 1 0 1.5h-.75q0 .5.04.86c.04.45.1.71.2.91q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V7.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookLogRegular.displayName = 'NotebookLogRegular';

// Triple export pattern (lucide-react style)
export { NotebookLogRegular, NotebookLogRegular as NotebookLogRegularIcon, NotebookLogRegular as SiNotebookLogRegular };
export default NotebookLogRegular;
export type { NotebookLogRegularProps };
