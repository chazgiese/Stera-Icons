import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandRegularProps = Omit<IconBaseProps, 'children'>;

const WandRegular = memo(
  forwardRef<SVGSVGElement, WandRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wand" {...props}>
      <path fill="currentColor" d="M12 17.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M15.63 7.35a.75.75 0 0 1 1.02 1.02l-1.07 1.91a3.5 3.5 0 0 0 0 3.44l1.07 1.91a.75.75 0 0 1-1.02 1.02l-1.91-1.07a3.5 3.5 0 0 0-3.44 0l-1.19.67q-.63.35-1.15.87l-3.91 3.91a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l3.91-3.91q.52-.52.87-1.15l.46-.82.2-.37c.6-1.07.6-2.37 0-3.44L7.36 8.37a.75.75 0 0 1 1.02-1.02l1.91 1.07c1.07.6 2.37.6 3.44 0zM14.1 9.9a5 5 0 0 1-4.18 0 5 5 0 0 1 0 4.18 5 5 0 0 1 4.18 0 5 5 0 0 1 0-4.18" clipRule="evenodd" />
        <path fill="currentColor" d="M17.97 17.97c.3-.3.77-.3 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M6 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM12 2.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75M3.97 3.97c.3-.3.77-.3 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M18.97 3.97a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06z" />
    </IconBase>
  ))
);

WandRegular.displayName = 'WandRegular';

// Triple export pattern (lucide-react style)
export { WandRegular, WandRegular as WandRegularIcon, WandRegular as SiWandRegular };
export default WandRegular;
export type { WandRegularProps };
