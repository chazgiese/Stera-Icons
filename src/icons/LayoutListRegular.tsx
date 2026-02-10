import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutListRegular = memo(
  forwardRef<SVGSVGElement, LayoutListRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-list" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.05 13q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v.35q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H6.7q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-.35q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm-.35 1.5q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v.35q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h.35c.57 0 .96 0 1.25-.02s.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-.35q0-.84-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
        <path fill="currentColor" d="M20.5 18.75a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1 0-1.5zM20.5 14a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M7.05 2.75q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v.35q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H6.7q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V6.7q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm-.35 1.5q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v.35c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h.35c.57 0 .96 0 1.25-.02s.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V6.7q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
        <path fill="currentColor" d="M20.5 8.5a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1 0-1.5zM20.5 3.75a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

LayoutListRegular.displayName = 'LayoutListRegular';

// Triple export pattern (lucide-react style)
export { LayoutListRegular, LayoutListRegular as LayoutListRegularIcon, LayoutListRegular as SiLayoutListRegular };
export default LayoutListRegular;
export type { LayoutListRegularProps };
