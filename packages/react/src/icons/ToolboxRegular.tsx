import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolboxRegularProps = Omit<IconBaseProps, 'children'>;

const ToolboxRegular = memo(
  forwardRef<SVGSVGElement, ToolboxRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.42 2.75a2 2 0 0 1 1.98 1.72l.25 1.78h2.15q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v6.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-6.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h2.15l.25-1.78a2 2 0 0 1 1.98-1.72zm3.33 11v.75a.75.75 0 0 1-1.5 0v-.75h-8.5v.75a.75.75 0 0 1-1.5 0v-.75h-3.5v3.05q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h13.6q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-3.05zm-12.55-6c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.05h3.5v-.75a.75.75 0 0 1 1.5 0v.75h8.5v-.75a.75.75 0 0 1 1.5 0v.75h3.5V10.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02zm4.38-3.5a.5.5 0 0 0-.5.43l-.22 1.57h6.28l-.23-1.57a.5.5 0 0 0-.5-.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxRegular.displayName = 'ToolboxRegular';

// Triple export pattern (lucide-react style)
export { ToolboxRegular, ToolboxRegular as ToolboxRegularIcon, ToolboxRegular as SiToolboxRegular };
export type { ToolboxRegularProps };
