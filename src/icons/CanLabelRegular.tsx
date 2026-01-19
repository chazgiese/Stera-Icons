import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanLabelRegularProps = Omit<IconBaseProps, 'children'>;

const CanLabelRegular = memo(
  forwardRef<SVGSVGElement, CanLabelRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-label" {...props}>
      <path fill="currentColor" d="M12 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 2.25a.75.75 0 0 1 0 1.5h-.2l.56 1c.58 1.01.89 2.17.89 3.34v7.82c0 1.17-.3 2.33-.89 3.35l-.63 1.1a2.8 2.8 0 0 1-2.39 1.39H9.16c-.99 0-1.9-.53-2.39-1.39l-.63-1.1a7 7 0 0 1-.89-3.35V8.09c0-1.17.3-2.33.89-3.35l.57-.99H6.5a.75.75 0 0 1 0-1.5zM7.09 17.75q.14.4.35.76l.64 1.11c.22.39.63.63 1.08.63h5.68c.45 0 .86-.24 1.08-.63l.64-1.1q.2-.37.35-.77zm-.33-10-.01.34v7.82l.01.34h10.48l.01-.34V8.09l-.01-.34zm.68-2.26q-.2.37-.35.76h9.82q-.15-.4-.35-.76l-1-1.74H8.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

CanLabelRegular.displayName = 'CanLabelRegular';

// Triple export pattern (lucide-react style)
export { CanLabelRegular, CanLabelRegular as CanLabelRegularIcon, CanLabelRegular as SiCanLabelRegular };
export type { CanLabelRegularProps };
