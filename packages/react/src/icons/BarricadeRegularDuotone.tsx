import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BarricadeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BarricadeRegularDuotone = memo(
  forwardRef<SVGSVGElement, BarricadeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.75 20a.75.75 0 0 1-1.5 0v-4.25h1.5zM18.75 20a.75.75 0 0 1-1.5 0v-4.25h1.5zM9.31 6.75l7.5 7.5H14.7l-7.5-7.5zM9.81 14.25H7.7L2.75 9.31V9.2c0-.57 0-.96.02-1.25s.07-.43.12-.52l.03-.07zM16.31 6.75l4.94 4.94v.11c0 .57 0 .96-.02 1.25a1.4 1.4 0 0 1-.15.59l-6.89-6.89z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.8 5.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v2.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V9.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM5.2 6.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h13.6q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V9.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

BarricadeRegularDuotone.displayName = 'BarricadeRegularDuotone';

// Triple export pattern (lucide-react style)
export { BarricadeRegularDuotone, BarricadeRegularDuotone as BarricadeRegularDuotoneIcon, BarricadeRegularDuotone as SiBarricadeRegularDuotone };
export type { BarricadeRegularDuotoneProps };
