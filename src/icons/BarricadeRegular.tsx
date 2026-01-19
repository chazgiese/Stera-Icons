import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BarricadeRegularProps = Omit<IconBaseProps, 'children'>;

const BarricadeRegular = memo(
  forwardRef<SVGSVGElement, BarricadeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="barricade" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.8 5.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v2.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03h-.1q.05.12.05.25v4a.75.75 0 0 1-1.5 0v-4q0-.13.05-.25H6.7q.05.12.05.25v4a.75.75 0 0 1-1.5 0v-4q0-.13.05-.25h-.1q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V9.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM2.75 11.8c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h2.49L2.75 9.31zM5.2 6.75q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.32.16-.5.47l6.88 6.89h4.88l-7.5-7.5zm11.61 7.5h1.99q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.31-.16.5-.47L14.2 6.75H9.3zm4.44-2.56V9.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02h-2.49z" clipRule="evenodd" />
    </IconBase>
  ))
);

BarricadeRegular.displayName = 'BarricadeRegular';

// Triple export pattern (lucide-react style)
export { BarricadeRegular, BarricadeRegular as BarricadeRegularIcon, BarricadeRegular as SiBarricadeRegular };
export type { BarricadeRegularProps };
