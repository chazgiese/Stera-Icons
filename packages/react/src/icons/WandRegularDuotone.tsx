import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WandRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WandRegularDuotone = memo(
  forwardRef<SVGSVGElement, WandRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M18.47 18.47c.3-.3.77-.3 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM3.47 3.47c.3-.3.77-.3 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M12 1.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M19.47 3.47a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.25 6.8a.75.75 0 0 1 .9 1.07l-1.2 2.15a4 4 0 0 0 0 3.96l1.2 2.15a.75.75 0 0 1-1.02 1.02l-2.15-1.2a4 4 0 0 0-3.87-.04l-1.02.56q-1.12.63-2.04 1.54l-3.52 3.52-.06.05a.8.8 0 0 1-.61.16.75.75 0 0 1-.56-1.02 1 1 0 0 1 .17-.25l3.54-3.54q.9-.9 1.51-2l.54-.96a4 4 0 0 0 0-3.95L6.84 7.87a.75.75 0 0 1 1.02-1.02l2.15 1.2c1.23.69 2.73.69 3.96 0l2.15-1.2zm-1.69 2.64c-1.6.83-3.52.83-5.12 0 .83 1.59.83 3.48.02 5.07l-.02.05a5.6 5.6 0 0 1 5.12 0 5.6 5.6 0 0 1 0-5.12" clipRule="evenodd" />
    </IconBase>
  ))
);

WandRegularDuotone.displayName = 'WandRegularDuotone';

// Triple export pattern (lucide-react style)
export { WandRegularDuotone, WandRegularDuotone as WandRegularDuotoneIcon, WandRegularDuotone as SiWandRegularDuotone };
export type { WandRegularDuotoneProps };
